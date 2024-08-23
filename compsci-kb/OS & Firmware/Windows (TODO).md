


## Windows-Specific Features (TODO)
...

### The registry (TODO)
...


### COM Objects

COM Objects are a Microsoft-designed standard for creating re-usable objects (components) [^1] [^2]. Specifically a COM Object is an object provided by an API which implements some of the COM Standard Interfaces [^3]. COM objects run inside a COM server, this must be a DLL or executable [^8]. Despite it's name a COM server most often is an in-process communication server, meaning it doesn't use network connectivity, but primarily operates locally through a direct data binding.

#### How Common are they?

The easiest way to find all the COM objects available on your system is to use the tool provided in the windows SDK called `oleview.exe`[^5]. Generally this is a large number of items, for example in Windows 10 x64 , 1909 there are[^6]:

* 8300+ COM Objects
* 27000+ Interfaces
* 7500+ Are In-process Servers (DLLs)
* 810+ Are Out-of-Process Servers (EXE)

  

#### What are they really
*The information from this section primarily comes from [Demystifying Windows Component Object Model (COM) | 0xShukruN (221bluestreet.com)](https://www.221bluestreet.com/offensive-security/windows-components-object-model/demystifying-windows-component-object-model-com)*

Specifically COM objects are all classes that inherit from IUnknown in their inheritence chain[^4]. From there they have a few pieces of important metadata:

  

* **CLSID** - Class ID, Is globally unique identifier (GUID) that Identifies a COM Class. For example, the Windows Script Host Class which has CLSID - _{72C24DD5-D70A-438B-8A42-98424B88AFB8}_

* **ProgID** - Program ID, A friendly name for a COM Class which can be used in a similar manner as CLSID, For example, the Windows Script Host Class can be called in powershell by it's ProgID, which is  _Wscript.Shell_ (example code at the end)
* **AppID** - Application ID, globally unique identifier (GUID) that identifies a registry key that contains various configuration for an individual or a group of COM classes
* **IID** - Interface ID Is globally unique identifier (GUID) that Identifies a COM Interface, For example, IWshShell Interface which has the IID of - {F935DC21-1CF0-11d0-ADB9-00C04FD58A0B}
  

There is additional metadata found in the registry including where the binary/DLL for the class is located. This is important in particular for network implementations of COM objects because they need to know where to instantiate the objects from.

You can create instances of a COM object via powershell using the CLSID or ProgID (you can specify a second argument to get an object over DCOM):

  

```powershell
# Create Instance from CLSID
[System.Activator]::CreateInstance([Type]::GetTypeFromCLSID("56FDF344-FD6D-11d0-958A-006097C9A090"))

# Over DCOM
[System.Activator]::CreateInstance([Type]::GetTypeFromCLSID("49B2791A-B1AE-4C90-9B8E-E860BA07F889", "10.10.0.1"))

# Create Instance from Prog ID
[System.Activator]::CreateInstance([Type]::GetTypeFromProgID("Wscript.Shell")

# Shorter version of creating an instance from Prog ID
$WScriptShell = New-Object -ComObject WScript.Shell
```

*in .Net you can use [CoCreateInstance](https://learn.microsoft.com/en-us/windows/win32/api/combaseapi/nf-combaseapi-cocreateinstance) for local COM and [CoCreateInstanceEx](https://learn.microsoft.com/en-us/windows/win32/api/combaseapi/nf-combaseapi-cocreateinstanceex) for remote instances*

  

**SCM** (the Windows Service Manager) is what handles much of the registry communication, as well as local COM servers. COM servers can operate in a few different "activation modes" (how they're registered in the registry):  

* **In-Process** (InprocServer32) - The vast majority of native COM servers are activated In-Process which means that the COM server is a **DLL** file that will be loaded into the client process that instantiated the COM Object, In this activation method, the SCM returns the file path of the DLL that contains the object server implementation. The COM Library loads the DLL and queries it for its **class factory** interface pointer.
* **Out-of-Process** / Local - (LocalServer32) When a COM object is configured as a Local Server it means that the server is an **EXE** file which will be executed as a different process than the Client that instantiated the COM Object, the SCM starts the local executable which registers a class factory on startup, and its interface pointer is available to the system and clients.
* **Out-of-Process** / Remote - The remote aspect here refers to DCOM which is distributed COM, for now, think of it as COM over the network (DCE-RPC). It is the act of activating or accessing a COM object on a remote machine, The local SCM acquires a class factory interface pointer from the SCM that is running on a remote computer.

  

#### Examples

A ton of examples can be found in the [gist scripts](https://gist.github.com/Descent098/eeefbc004ba17f3857ff20374a1b495e).
##### Wscript

Wscript is a COM object that allows you to run code. It will allow you to do things like start processes[^13], create shortcuts[^12] and many more. It was also the system that allowed you to write VBScript, which has since been deprecated[^14].
 

Creating a shortcut in powershell using `wscript`:

```powershell
$WScriptShell = New-Object -ComObject WScript.Shell

$Shortcut = $WScriptShell.CreateShortcut($ShortcutFile)

$Shortcut.TargetPath = $TargetFile

$Shortcut.Save()
```


Running a file explorer using `wscript` and validating it ran properly:

```powershell
$WScriptShell = New-Object -ComObject WScript.Shell

$q = $WScriptShell.Run("explorer")

$q # Returns 0 if it ran correctly

```

  
##### OLE/Compound Documents

Compound documents is a Microsoft standard for enabling robust cross-document embedding[^11]. The easiest way to think about this is that it's similar to the idea of an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe). It does this through [uniform data transfer](https://learn.microsoft.com/en-us/windows/win32/com/compound-documents#:~:text=or%20IPersistStream%20interfaces.-,Uniform%20Data%20Transfer,-Applications%20that%20support), which is another interface which allows one document to essentially hook into the COM object that allows running the embedded data interactively (called [In-place activation](https://learn.microsoft.com/en-us/windows/win32/com/implementing-in-place-activation)).

###### Example with excel 

This example counts the number of used rows and columns in the document ([Source](https://support.smartbear.com/testcomplete/docs/testing-with/working-with-external-data-sources/excel/working-via-com.html), also has other languages):

```python

def read_data_from_excel(filepath:str):

  Excel = Sys.OleObject["Excel.Application"]

  Excel.Workbooks.Open(filepath)

  

  RowCount = Excel.ActiveSheet.UsedRange.Rows.Count

  ColumnCount = Excel.ActiveSheet.UsedRange.Columns.Count

  

  for i in range(1, RowCount + 1):

    s = "";

    for j in range(1, ColumnCount + 1):

      s = s + VarToString(Excel.Cells.Item[i, j]) + '\r\n'

    Log.Message("Row: " + VarToString(i), s);

  

  Excel.Quit();

```



##### DCOM

I've mentioned DCOM a few times, but didn't explain it. DCOM is the standard for communicating with COM objects across a network [^9]. It has been succeeded by [winrm](https://learn.microsoft.com/en-us/windows/win32/winrm/portal), but some standards still use DCOM.

As an extension of COM, DCOM solves a few inherent problems with the COM model to better use over a network[^15]:
  
- **Marshalling:** Marshalling solves a need to pass data from one COM object instance to another on a different computer – in programming terms, this is called “passing arguments.” For example, if I wanted Zaphod’s last name, I would call the COM Object LastName with the argument of Zaphod. The LastName function would use a Remote Procedure Call (RPC) to ask the other COM object on the target server for the return value for LastName(Zaphod), and then it would send the answer – Beeblebrox – back to the first COM object.
- **Distributed Garbage Collection:** Designed to scale DCOM in order to support high volume internet traffic, Distributed Garbage Collection also addresses a way to destroy and reclaim completed or abandoned DCOM objects to avoid blowing up the memory on webservers. In turn, it communicates with the other servers in the transaction chain to let them know they can get rid of the objects related to a transaction.
- **Using DCE/RPC as the underlying RPC mechanism:** To achieve the previous items and to attempt to scale to support high volume web traffic, Microsoft implemented DCE/RPC as the underlying technology for DCOM – which is where the D in DCOM came from.

```powershell
# the computer name or IP address you want to connect to:
$computer = '192.168.2.109'

# use a user account that has Administrator permissions on
# the target computer:

$credential = Get-Credential

# try and retrieve BIOS information:

Get-WmiObject -Class Win32_BIOS -ComputerName $computer -Credential $credential
```


  

## Resources

- COM
	* [4 The Component Object Model (utah.edu)](https://www-old.cs.utah.edu/flux/oskit/html/oskit-wwwch4.html)
	* [Hunting COM Objects | Mandiant](https://www.mandiant.com/resources/blog/hunting-com-objects)	
	* [COM: Component Object Model Technologies (archive.org)](https://web.archive.org/web/20150619203545/http://www.microsoft.com/com/default.mspx)	
	* [GitHub - microsoft/component-object-model-sample: Sample code for Component Object Model (COM) setup and registration.](https://github.com/microsoft/component-object-model-sample)	
	* [Component Object Model (COM) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal)	
	* [COM Technical Overview - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/com-technical-overview)	
	* [[MS-OPENSPECLP]: Open Specifications | Microsoft Learn](https://learn.microsoft.com/en-us/openspecs/main/ms-openspeclp/3589baea-5b22-48f2-9d43-f5bea4960ddb)	
	* [Dancing with COM - Deep dive into understanding Component Object Model (youtube.com)](https://www.youtube.com/watch?v=8tjrFm2K30Q)	
	* [Microsoft Component Object Model (COM): A Technical Overview of COM (umd.edu)](https://www.cs.umd.edu/~pugh/com/)
	* [Demystifying Windows Component Object Model (COM) | 0xShukruN (221bluestreet.com)](https://www.221bluestreet.com/offensive-security/windows-components-object-model/demystifying-windows-component-object-model-com)
	* [Component Object Model (COM) API - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/api/_com/)
	- [4 The Component Object Model (utah.edu)](https://www-old.cs.utah.edu/flux/oskit/html/oskit-wwwch4.html)	
	- [GitHub - microsoft/component-object-model-sample: Sample code for Component Object Model (COM) setup and registration.](https://github.com/microsoft/component-object-model-sample)	
	- [Component Object Model (COM) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal)	
	- [COM Technical Overview - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/com-technical-overview)	
	- [[MS-OPENSPECLP]: Open Specifications | Microsoft Learn](https://learn.microsoft.com/en-us/openspecs/main/ms-openspeclp/3589baea-5b22-48f2-9d43-f5bea4960ddb)	
	- [youtube.com/watch?v=8tjrFm2K30Q](https://www.youtube.com/watch?v=8tjrFm2K30Q)- [IUnknown - Wikipedia](https://en.wikipedia.org/wiki/IUnknown)	
	- [Microsoft COM Specification (archive.org)](https://web.archive.org/web/20040215095320/http://www.microsoft.com/com/resources/comdocs.asp)	
	- [Using and Implementing IUnknown - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/using-and-implementing-iunknown)	
	- [IUnknown - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/api/unknwn/nn-unknwn-iunknown)	
	- [IUnknown::QueryInterface(REFIID,void) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/api/unknwn/nf-unknwn-iunknown-queryinterface(refiid_void))	
	- [c++ - What is COM (Component Object Model) in a nutshell? - Stack Overflow](https://stackoverflow.com/questions/455687/what-is-com-component-object-model-in-a-nutshell)
	- [221bluestreet.com/offensive-security/windows-components-object-model/demystifying-windows-component-object-model-com](https://www.221bluestreet.com/offensive-security/windows-components-object-model/demystifying-windows-component-object-model-com)	
	- [GitHub - sahar55/windows-com-objects: A Database of COM objects and their configuration across multiple windows builds](https://github.com/sahar55/windows-com-objects)	
	- [Introduction to COM - What It Is and How to Use It. - CodeProject](https://www.codeproject.com/articles/633/introduction-to-com-what-it-is-and-how-to-use-it)	
	- [c++ - What is COM (Component Object Model) in a nutshell? - Stack Overflow](https://stackoverflow.com/questions/455687/what-is-com-component-object-model-in-a-nutshell)
	- [sciencedirect.com/topics/computer-science/component-object](https://www.sciencedirect.com/topics/computer-science/component-object)
	- [Microsoft Component Object Model (COM): A Technical Overview of COM (umd.edu)](https://www.cs.umd.edu/~pugh/com/)
	- [Automating Windows Applications Using COM - Practical Business Python (pbpython.com)](https://pbpython.com/windows-com.html)	
	- Python bindings
		- [pywin32 · PyPI](https://pypi.org/project/pywin32/)
		- [Python for Win32 Extensions Help (mhammond.github.io)](https://mhammond.github.io/pywin32/)
		- [win32com - win32.Dispatch vs win32.gencache in Python. What are the pros and cons? - Stack Overflow](https://stackoverflow.com/questions/50127959/win32-dispatch-vs-win32-gencache-in-python-what-are-the-pros-and-cons)
		- [win32com Documentation Index (mhammond.github.io)](https://mhammond.github.io/pywin32/html/com/win32com/HTML/docindex.html)
	- James Forshaw who created OLEView
		- [Tyranid's Lair (tiraniddo.dev)](https://www.tiraniddo.dev/) blog
		- [james forshaw - YouTube](https://www.youtube.com/results?search_query=james+forshaw) talks
	- wscript
		- [Script Runtime | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions//bstcxhf7(v=vs.85)?redirectedfrom=MSDN)
		- [Scripting | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions/ms950396(v=msdn.10)?redirectedfrom=MSDN)
		- [wscript | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wscript)
		- [wscript - VBScript - SS64.com](https://ss64.com/vb/syntax-wscript.html)
		- [wscript.Shell + Shell.Application - VBScript - SS64.com](https://ss64.com/vb/shell.html)
		- [Shell object (Shldisp.h) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/shell/shell)
		- [Windows Script Host: Scripting; Management Services | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc784547(v=ws.10))
		- [Run Windows Script Host samples: Scripting; Management Services | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc776366(v=ws.10))
		- [Objects (Windows Script Host) | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions//f51wc7hz(v=vs.85))
	- OLE
		- [Compound Documents - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/compound-documents)
		- [Microsoft Compound File Binary File Format, Version 3 (loc.gov)](https://www.loc.gov/preservation/digital/formats/fdd/fdd000380.shtml#:~:text=Microsoft%20Compound%20File%20Binary%20(CFB,storage%20objects%20and%20stream%20objects.)
		- [In-Process Servers - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/in-process-servers)
		- [Linked Objects and Monikers - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/com/linked-objects-and-monikers)
		- [Containers: Compound Files | Microsoft Learn](https://learn.microsoft.com/en-us/cpp/mfc/containers-compound-files?view=msvc-170)
		- Format(s)
			* [[MS-CFB]: Compound File Binary File Format | Microsoft Learn](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cfb/53989ce4-7b05-4f8d-829b-d08d6148375b)
			* [pdf](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi0nqqulsyFAxUsD1kFHQ2vCMY4ChAWegQICBAB&url=https%3A%2F%2Fwinprotocoldoc.blob.core.windows.net%2Fproductionwindowsarchives%2FMS-CFB%2F%255BMS-CFB%255D-130808.pdf&usg=AOvVaw3ygpwRqRd063zXiH5M4Pb5&opi=89978449)
			* [libolecf/documentation/OLE Compound File format.asciidoc at main · libyal/libolecf (github.com)](https://github.com/libyal/libolecf/blob/main/documentation/OLE%20Compound%20File%20format.asciidoc)
		- Excel Specification
			* [Application object (Excel) | Microsoft Learn](https://learn.microsoft.com/en-us/office/vba/api/excel.application(object))
			* [Excel object model for Visual Basic for Applications (VBA) | Microsoft Learn](https://learn.microsoft.com/en-us/office/vba/api/overview/excel/object-model)
			* [Excel Object model overview - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/vsto/excel-object-model-overview?view=vs-2022&tabs=csharp)
	* DCOM
		* [Automate measurements with DCOM by using Python : Engineering Support (dewesoft.com)](https://support.dewesoft.com/en/support/solutions/articles/14000137752-automate-measurements-with-dcom-by-using-python)
		- [pywin32/com/win32com/test/testDCOM.py at main · mhammond/pywin32 (github.com)](https://github.com/mhammond/pywin32/blob/main/com/win32com/test/testDCOM.py)
		- [Connecting OPC Servers Using Python | by Burger Wu | Medium](https://burgercewu.medium.com/connecting-opc-servers-using-python-b774d630acb)
		- [What is Distributed Component Object Model (DCOM)? (techtarget.com)](https://www.techtarget.com/whatis/definition/DCOM-Distributed-Component-Object-Model)
		- [What is DCOM (Distributed Component Object Model)? (varonis.com)](https://www.varonis.com/blog/dcom-distributed-component-object-model)
		- [[MS-DCOM]: Distributed Component Object Model (DCOM) Remote Protocol | Microsoft Learn](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-dcom/4a893f3d-bd29-48cd-9f43-d9777a4415b0)
  

[^1]: https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal#:~:text=Purpose-,COM%20is%20a%20platform%2Dindependent%2C%20distributed%2C%20object%2Doriented%20system%20for%20creating%20binary%20software%20components%20that%20can%20interact.%20COM%20is%20the%20foundation%20technology%20for%20Microsoft%27s%20OLE%20(compound%20documents)%20and%20ActiveX%20(Internet%2Denabled%20components)%20technologies.,-Where%20applicable
[^2]: https://stackoverflow.com/questions/455687/what-is-com-component-object-model-in-a-nutshell
[^3]: [Component Object Model (COM) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/api/_com/)
[^4]: https://learn.microsoft.com/en-us/windows/win32/api/unknwn/nn-unknwn-iunknown#:~:text=All%20other%20COM%20interfaces%20are%20inherited%2C%20directly%20or%20indirectly%2C%20from%20IUnknown
[^5]: https://learn.microsoft.com/en-us/windows/win32/com/ole-com-object-viewer
  [^6]: https://www.221bluestreet.com/offensive-security/windows-components-object-model/demystifying-windows-component-object-model-com#:~:text=Windows%2010%20x64,Process%20Servers%20(EXE)
[^7]: https://www.221bluestreet.com/offensive-security/windows-components-object-model/demystifying-windows-component-object-model-com#:~:text=COM%20Objects%20Identifiers
[^8]: https://www.uio.no/studier/emner/matnat/ifi/INF5040/h07/gruppemateriale/studpres/Group%204-.NET.pdf 
[^9]: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiy6Jm2g8yFAxUUFlkFHSDcDW8QFnoECAkQAQ&url=https%3A%2F%2Fwinprotocoldoc.blob.core.windows.net%2Fproductionwindowsarchives%2FMS-DCOM%2F%255BMS-DCOM%255D.pdf&usg=AOvVaw2B6bWwFpAPfrXTuLgAshHl&opi=89978449
[^10]: https://wiki.novachem.com/en/teams/data-integration-and-operations/ingestion/historians-opc-odbc#:~:text=Further%20details%20about
[^11]: https://learn.microsoft.com/en-us/windows/win32/com/compound-documents
[^12]: https://learn.microsoft.com/en-us/troubleshoot/windows-client/admin-development/create-desktop-shortcut-with-wsh
[^13]: https://ss64.com/vb/run.html
[^14]: https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features-resources#vbscript
[^15]: https://www.varonis.com/blog/dcom-distributed-component-object-model
