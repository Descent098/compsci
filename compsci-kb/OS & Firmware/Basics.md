---
title: Basics
date: 2024-01-09
aliases:
  - firmware
  - operating systems
  - os
tags:
---

## Firmware/Bios

When starting a computer your bios will run after POSTing (basically a check that happens before the bios to make sure hardware is running). This is what is called firmware. Essentially it's code that is written directly onto the hardware that lets it start up. From there it then passes on to the bootloader:

- [How To - What is BIOS? - YouTube](https://www.youtube.com/watch?v=ncUmWthHrU0)
    
- [PC BIOS Settings - YouTube](https://www.youtube.com/watch?v=ezubjTO7rRI) <-- Explains some basic settings
    
- [BIOS, CMOS, UEFI - What's the difference? - YouTube](https://www.youtube.com/watch?v=LGz0Io_dh_I) (useful to know about CMOS if you need to troubleshoot hardware)
    

## Bootloader

This then is what starts the kernel. Most importantly this is the system that when the bios talks to it can actually provide the memory location of where to start the kernel. This is important because it allows you to setup multiboot systems where more than 1 OS, and even OS's with different kernels can be loaded:

- GRUB: [GNU GRUB - Wikipedia](https://en.wikipedia.org/wiki/GNU_GRUB), [GNU GRUB - GNU Project - Free Software Foundation (FSF)](https://www.gnu.org/software/grub/)
    
- rEIFIT: [The rEFInd Boot Manager (rodsbooks.com)](https://www.rodsbooks.com/refind/)
    
- clover: [GitHub - CloverHackyColor/CloverBootloader: Bootloader for macOS, Windows and Linux in UEFI and in legacy mode](https://github.com/CloverHackyColor/CloverBootloader)
    
- Windows 10 boot manager [Windows 10 Boot Manager - YouTube](https://www.youtube.com/watch?v=coeo_8RqeZA)
    

## Kernel

The kernel is what allows your operating system to talk to hardware. Generally speaking this is high-level interfaces, while all the complicated portions of the communication are handled by the drivers:

- [What is a Kernel and what does it do? Explore the Kernels of Linux, Windows, and MacOS. - YouTube](https://www.youtube.com/watch?v=IvGdY6luTtU)
    
- [Linux And Windows Kernel Comparison - YouTube](https://www.youtube.com/watch?v=Nz-vWYM-2Gw)
    
- [24C3: Inside the Mac OS X Kernel - YouTube](https://www.youtube.com/watch?v=-7GMHB3Plc8)
    
- [What is a kernel - Gary explains - YouTube](https://www.youtube.com/watch?v=mycVSMyShk8)
    
- [Write Your Own 64-bit Operating System Kernel #1 - Boot code and multiboot header - YouTube](https://www.youtube.com/watch?v=FkrpUaGThTQ)
    

### Drivers

This is where the magic happens. Typically drivers are talked about as seperate from the kernel because they are installed seperately, though they are typically kernal ["modules"](https://en.wikipedia.org/wiki/Loadable_kernel_module). Some drivers are part of userspace, but people often think of it as blurring the lines between kernel and userspace, not to mention some implementations actually skip the kernel entirely and just access drivers directly.

Generally speaking each device is going to be different, and therefore will need a different driver. Some will just work with generic drivers, but it's usually best to run a device with it's specific driver.

- [What is a Software Driver as Fast As Possible - YouTube](https://www.youtube.com/watch?v=t-aRlwLI-b0)

## The flow of data

To start a system it looks like:

[![os-starting](https://gist.githubusercontent.com/Descent098/ab3bc88425c71e36f3583d916b9ee2b9/raw/c8497db3647bcb1e934120a32b60775c1874ee8f/os-starting.png)](https://gist.githubusercontent.com/Descent098/ab3bc88425c71e36f3583d916b9ee2b9/raw/c8497db3647bcb1e934120a32b60775c1874ee8f/os-starting.png)

Hardware --> Talks to Firmware/bios --> talks to bootloader --> talks to kernel

--> Starts operating system

once started the flow looks more like:

[![os-communication](https://gist.githubusercontent.com/Descent098/ab3bc88425c71e36f3583d916b9ee2b9/raw/c43b126c242e1834e3e4c015940e5735d1adc861/os-communication.png)](https://gist.githubusercontent.com/Descent098/ab3bc88425c71e36f3583d916b9ee2b9/raw/c43b126c242e1834e3e4c015940e5735d1adc861/os-communication.png)

 Hardware --> Kernel --> Userspace (what you see and all the processes you see running including windows managers, desktop environments, user management, etc.)

So for example if you have a frame from a video game first the hardware would generate the frame, it would then send it via the graphics driver to the display server, which would then render it through the Desktop environment/window manager