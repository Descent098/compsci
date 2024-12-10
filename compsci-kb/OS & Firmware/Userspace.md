This is the good old operating system you know and love. This is where applications, your desktop, and %90 of computing is done.

- [(5) The Layman's Guide to Linux: User Space - YouTube](https://www.youtube.com/watch?v=5JoYzAyo8eA) (Covers most things at once, but I would recommend doing other sections first then come back to this video)

### Package managers

These systems are designed to help a user manage packages (applications and services that run on an OS). These are common on linux systems, but less common on windows. They give advantages over just normally just installing applications because you can manage versions, updates, and uninstalling more easliy:

- [apt, dpkg, git, Python PiP (Linux Package Management) // Linux for Hackers // EP 5 - YouTube](https://www.youtube.com/watch?v=vX3krP6JmOY)
    
- [The APT Package Manager in Debian and Ubuntu - YouTube](https://www.youtube.com/watch?v=X20QCZlOhzM)
    
- [Windows Package Manager | Microsoft Docs](https://docs.microsoft.com/en-us/windows/package-manager/)
    
- [The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)
    
- [Chocolatey Software | Chocolatey - The package manager for Windows](https://chocolatey.org/)
    

There is an alternative to package managers that are essentially containerized forms of package managers:

- [Snapcraft - Snaps are universal Linux packages](https://snapcraft.io/)
    
- [Flatpak—the future of application distribution](https://flatpak.org/)
    

### Distro's

Distro's or distributions is the name given to different "flavours" of operating systems (really only applies to linux since there's 1 version of macos and 1 version of windows). A distro is what you actually install to your computer and includes a kernel, and all the default userspace packages and configurations.

There are many different distro's, but generally there are some groups of "similar" ones that do thing in a similar way and have similar setups. Packages can have a wide range of formats and which ones are supported is often tied to the type of distro you use

#### Debian

The most popular type of linux distro. Can use raw binaries or .deb files for packages. Typically uses apt as a package manager:

- ZorinOS: [Zorin OS - Make your computer better.](https://zorin.com/os/)
    
- Mint: [Home - Linux Mint](https://linuxmint.com/), [Linux Mint · GitHub](https://github.com/linuxmint)
    
- Ubuntu: [Enterprise Open Source and Linux | Ubuntu](https://ubuntu.com/)
    
- Cutefish: [CuteFishOS - A Clean Mac-Like Linux Desktop - YouTube](https://www.youtube.com/watch?v=o-VYDqMK994)
    
- Parrot: [Parrot Security](https://www.parrotsec.org/)
    
- Kali: [Kali Linux | Penetration Testing and Ethical Hacking Linux Distribution](https://www.kali.org/)
    
- POP!: [Pop!_OS by System76](https://pop.system76.com/)
    
- Elementary: [The thoughtful, capable, and ethical replacement for Windows and macOS ⋅ elementary OS](https://elementary.io/)
    

#### Arch

Considered to be the bleeding edge, and also typically the hardest learning curve. Tends to use pacman in conjunction with AUR (Arch user repository) to get it's packages:

- Manjaro: [Manjaro](https://manjaro.org/)
    
- Endeavour: [EndeavourOS – A terminal-centric distro with a vibrant and friendly community at its core](https://endeavouros.com/)
    
- Reborn: [Homepage rebornos - RebornOS](https://rebornos.org/)
    

#### Fedora

Often considered the more "corporate" type of distro:

- [Fedora (getfedora.org)](https://getfedora.org/)

#### LFS (Linux from scratch)

Linux from scratch is exactly what it sounds like. You build your system from nothing and basically create "your own distro"

- [Welcome to Linux From Scratch!](https://www.linuxfromscratch.org/)
    
- [Linux From Scratch - Wikipedia](https://en.wikipedia.org/wiki/Linux_From_Scratch)
    

### Processes

A running program. They are essentially enclosed processes that have a bunch of state. When a process is made it will have a PID you can use to identify the process. While each process is seperate you can technically "pipe" the contents of processes between each other, typically using STDIN and STDOUT:

- [Linux Internals - Process Management - YouTube](https://www.youtube.com/watch?v=Ip9P1XJt5PI)
    
- [Linux processes, init, fork/exec, ps, kill, fg, bg, jobs - YouTube](https://www.youtube.com/watch?v=TJzltwv7jJs)
    

### Terminal/Shell

The shell is the name given to the system that lets you start and stop processes. The terminal is just the visualization of the shell that you interact with. When you start processes via clicking on a shortcut this still goes through the shell, but you likely won't see the terminal representation.

Shells:

- Bash; [Bash (Unix shell) - Wikipedia](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), [Bash - GNU Project - Free Software Foundation](https://www.gnu.org/software/bash/)
    
- ZSH; [Z shell - Wikipedia](https://en.wikipedia.org/wiki/Z_shell), [Zsh](https://www.zsh.org/)
    
- Fish: [fish shell](https://fishshell.com/)
    

Terminals

- [Oh My Zsh - a delightful & open source framework for Zsh](https://ohmyz.sh/)
    
- Termux; [Termux | Terminal emulator and Linux environment for Android.](https://termux.com/)
    
- Cmder; [cmderdev/cmder: Lovely console emulator package for Windows (github.com)](https://github.com/cmderdev/cmder)
    
- warp: [Warp: The terminal for the 21st century](https://www.warp.dev/)
    
- Alacritty: [alacritty/alacritty: A cross-platform, OpenGL terminal emulator. (github.com)](https://github.com/alacritty/alacritty)
    

Additional references

- [The Terminal vs The Shell - YouTube](https://www.youtube.com/watch?v=Yt57-gg9jVg)
    
- [Terminal Basics](https://kieranwood.ca/terminal-basics)
    
- [Introduction to Basic Linux Commands - YouTube](https://www.youtube.com/watch?v=VWicoVXmCNw)
    
- [Bash in 100 Seconds - YouTube](https://www.youtube.com/watch?v=I4EWvMFj37g)
    
- [Batch/Cmd Programming: Lesson 1 (Basics) - YouTube](https://www.youtube.com/watch?v=kboexp3QiUg)
    
- [Bash Shell Scripting Tutorial For Beginners - Bash Basics in 20 Minutes - YouTube](https://www.youtube.com/watch?v=Zl7npywCB84)
    
- [Microsoft PowerShell for Beginners - Video 1 Learn PowerShell - YouTube](https://www.youtube.com/watch?v=IHrGresKu2w)
    

#### Streams

Streams is the name given to the system used to communicate with processes through the shell. There are 2 main types (and also STDERR you can look into yourself)

[![std](https://gist.githubusercontent.com/Descent098/ab3bc88425c71e36f3583d916b9ee2b9/raw/c8497db3647bcb1e934120a32b60775c1874ee8f/std.png)](https://gist.githubusercontent.com/Descent098/ab3bc88425c71e36f3583d916b9ee2b9/raw/c8497db3647bcb1e934120a32b60775c1874ee8f/std.png)

##### STDIN

The INput stream that the terminal and commands use

##### STDOUT

The OUTput stream that is what you as a user often read when a command is finished

##### Piping

You can PIPE the output (stdout) of one command (command1), or some text to the input (stdin) of another command (command2):

```shell
command1 | command2
```

This means command2 will run using the output of command1 as input

#### Sudo/permissions

Some folders and files are locked to "admins", on linux you need to use the command `sudo` to allow access. On windows you need to use the gui prompt.

### File System

This is the system that is used to keep track of your files. People use this term to refer to multiple things (including both the way things are stored, and the file structure itself), but this just simply refers to the actual process of how your files are stored.

Further on we will talk about the file system structures that are common on operating systems, and that is not about how something is stored, but where things are commonly stored (though sometimes people still just call it the file system)

- [(5) Files & File Systems: Crash Course Computer Science #20 - YouTube](https://www.youtube.com/watch?v=KN8YgJnShPM)
- ["The ZFS filesystem" - Philip Paeps (LCA 2020) (youtube.com)](https://www.youtube.com/watch?v=Hjpqa_kjCOI)

#### File System Structure

This is the standard used to describe where you should look in a file system for certain things (i.e. installed apps, default configurations etc.)

- [Linux Directories Explained in 100 Seconds - YouTube](https://www.youtube.com/watch?v=42iQKuQodW4)
    
- [Linux File System/Structure Explained! - YouTube](https://www.youtube.com/watch?v=HbgzrKJvDRw)
    
- [(5) Linux vs Windows File System Structure Compared! - YouTube](https://www.youtube.com/watch?v=K71WCq-g77U)
    
- [Environment variables]([Terminal Basics (kieranwood.ca)](https://kieranwood.ca/terminal-basics/#slide=21)) (These often get used to make finding certain paths easier)
    

#### File System Formats

This is the way in which the file system actually stores it's data. This can impose limitations (like 4Gb file size limits for FAT32) and enable features (rolling backups/snapshots for BTRFS for some setups) depending on which you chose:

- [NTFS vs FAT32 vs exFAT - Everything You Need To Know - YouTube](https://www.youtube.com/watch?v=qsP_sBUbmZM)
    
- [(5) File Systems | Which One is the Best? ZFS, BTRFS, or EXT4 - YouTube](https://www.youtube.com/watch?v=HdEozE2gN9I) (Bit opinionated, particularly about raid)
    
- [(5) Introduction to the Ext4 File System for Linux - YouTube](https://www.youtube.com/watch?v=B6kg2zeJ9do)
    
- [(5) File Systems as Fast As Possible - YouTube](https://www.youtube.com/watch?v=BV0-EPUYuQc)
    

### Display Server

Controls what you actually see, without this nothing will render to the screen (examples are x server and wayland). In order for a GUI to appear whatever application is running will need to run through the display server

- [X Window System - YouTube](https://www.youtube.com/watch?v=mV1TNyWGQQ8)
    
- [Wayland vs Xorg | Learn which one to choose - YouTube](https://www.youtube.com/watch?v=U_MBJcD3SFI)
    

### Desktop Environments

The name given to the collection of systems that run to give a linux distribution it's "look and feel". This includes things like a start menu (or not), a search bar (or not), desktop icons (or not), taskbar/app dock (or not), the file explorer and many other features that make a distribution look and feel different. Note that sometimes distro's with the same desktop environment will look different because they can often be styled with custom themes using CSS.

- GNOME, a very popular DE: [GNOME – Simple, beautiful, elegant.](https://www.gnome.org/)
    
- KDE Plasma: [Plasma - KDE Community](https://kde.org/plasma-desktop/)
    
- Cinnamon: [Cinnamon (desktop environment) - Wikipedia](https://en.wikipedia.org/wiki/Cinnamon_(desktop_environment)), [video](https://www.youtube.com/watch?v=XUkUmx6TZLA)
    
- MATE: [MATE Desktop Environment | MATE (mate-desktop.org)](https://mate-desktop.org/)
    
- XFCE: [Xfce Desktop Environment](https://www.xfce.org/)
    
- Cutefish: [CutefishOS – Cutefish OS Built on Ubuntu (cutefish-ubuntu.github.io)](https://cutefish-ubuntu.github.io/), [How to install Cutefish Desktop in Ubuntu and derivatives (linuxcool.net)](https://linuxcool.net/en/instructions/how-to-install-cutefish-desktop-in-ubuntu-and-derivatives/)
    

### Window Manager

Controls the borders of GUI windows [the minimize, maximize and close buttons], as well as their positions and dimensions. These are usually part of desktop environments but you can install custom ones:

- Window manager used by GNOME: [Enlightenment Main](https://www.enlightenment.org/)
- A fun tiling window manager I used to use in my edgy arch linux days: [https://github.com/qtile/qtile](https://github.com/qtile/qtile)
- Another Tiling window manager: [https://i3wm.org/](https://i3wm.org/)
- Awesome: [https://awesomewm.org/](https://awesomewm.org/)

### File Manager

What allows you to visually traverse your file system

- Nemo: [Nemo (file manager) - Wikipedia](https://en.wikipedia.org/wiki/Nemo_(file_manager)),[source](https://github.com/linuxmint/nemo)
    
- Dolphin: [Dolphin - KDE Applications](https://apps.kde.org/dolphin/)
    
- Nautilus (GNOME): [GNOME / Files · GitLab](https://gitlab.gnome.org/GNOME/nautilus)
    
## Helpful reference videos

- [Brief Introduction to Computing Systems - User Space Processes, Shells, Kernels, and Hardware - CS1 - YouTube](https://www.youtube.com/watch?v=LB9wVRYF9tA)
    
- [Unix system calls (1/2) - YouTube](https://www.youtube.com/watch?v=xHu7qI1gDPA) & [Unix system calls (2/2) - YouTube](https://www.youtube.com/watch?v=2DrjQBL5FMU)