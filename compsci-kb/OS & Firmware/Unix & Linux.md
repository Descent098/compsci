---
aliases:
  - unix
  - linux
  - debian
title: Linux
tags:
  - foss
  - os
  - linux
---
>[!info]
> History informs some of the technical information, as such this section will include technical info about linux, and some history. This I think is the best way to talk about linux & unix since often the history **informs** the technical decisions.

UNIX was an operating system developed at bell labs. UNIX was an incredibly popular operating system especially for academics when it was released. UNIX was primarily closed source, meaning it's code was proprietary. It was a system that had tons of tools that were built to internally suit the needs of bell labs. These tools are often still used today (like [grep](https://www.gnu.org/software/grep/manual/grep.html), [awk](https://www.gnu.org/software/gawk/manual/gawk.html), [cat](https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html#cat-invocation) etc.), or something inspired from them. 

Linux on the other hand was [[Open Source & Free Software|open source]] and is a combination of a few pieces of software all rolled up into one package. Linux as we know it today is a combination of:

- GNU tools ([gcc](https://gcc.gnu.org/) etc.)
- Linus Torvalds' Kernel (called [linux](https://github.com/torvalds/linux))

People who are a part of the free software movement will often call it [GNU + Linux](https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy) instead of just Linux. Technically Linux is **just the kernel**, and the rest of the tools in "Linux" are mostly GNU tools.

>[!info]
>You will see me use the word nix or \*nix. This is a shortform for any unix-like operating system, like linux

## Linux vs UNIX
What are the actual differences between them, and why are they mentioned together? The main reason you see the two mentioned together is because the philosophies that guided the development of UNIX were a large influence on Linux. Both follow the [POSIX](https://pubs.opengroup.org/onlinepubs/9699919799.2018edition/) standards for how to implement operating systems. Many early Linux users were UNIX users who wanted to find a [[Open Source & Free Software#Free software vs Open Source|free software]] alternative to UNIX. At the time UNIX was relatively expensive, and so for individuals an open source alternative was appealing. Besides that they each use separate kernels, and internal tools to build out the specifics of each operating system.

## Distros
A distro follows the traditional format of the underlying operating system, but typically with more specific changes. For example [linux mint](https://linuxmint.com/, [Zorin OS](https://zorin.com/os/), and [ubuntu](https://ubuntu.com/) are all linux debian-systems, but they have quite significant differences as far as user experience goes. I mentioned debian in the last sentence, what is debian?

Well for distros there are lots of "base" of distros, where the distros will follow the design philosophies of a broader system. For example someone might say they use a debian based system (like we talked about before), or they may say they prefer to use arch-based, or maybe fedora based. What this means is that the distro implements the features of debian, arch or fedora, then adds on top of it. Which one your distro is based on will change what files you can install, the user interfaces you can use, and the philosophies behind the more "subjective" parts of the POSIX standard. Debian-based systems for example can install `.deb` programs, whereas fedora-based would instead be able to install `.rpm` programs. 

## Additional Resources
- Technical information
	- [Unix Pipeline (Brian Kernighan) - Computerphile (youtube.com)](https://www.youtube.com/watch?v=bKzonnwoR2I)
	- File systems
		- [UNIX Inodes and Files (Harry) (youtube.com)](https://www.youtube.com/watch?v=3P8n1uC0tyI)
		- [What's behind a file descriptor in Linux? Also, i/o redirection with dup2. (youtube.com)](https://www.youtube.com/watch?v=rW_NV6rf0rM)
		- [Learning the Linux File System (youtube.com)](https://www.youtube.com/watch?v=HIXzJ3Rz9po)
		- [Linux File Permissions in 5 Minutes | MUST Know! (youtube.com)](https://www.youtube.com/watch?v=LnKoncbQBsM)
	- Syscalls
		- [Unix system calls (1/2) (youtube.com)](https://www.youtube.com/watch?v=xHu7qI1gDPA)
		- [Unix system calls (2/2) (youtube.com)](https://www.youtube.com/watch?v=2DrjQBL5FMU)
- Important people
	- Dennis Ritchie
		- [he UNIX Time-Sharing System (berkeley.edu)](https://dsf.berkeley.edu/cs262/unix.pdf)
	- Ken Thompson
		- [Ken Thompson interviewed by Brian Kernighan at VCF East 2019 (youtube.com)](https://www.youtube.com/watch?v=EY6q5dv_B-o)
		- [Ken Thompson and Dennis Ritchie Explain UNIX (Bell Labs) (youtube.com)](https://www.youtube.com/watch?v=JoVQTPbD6UY)
	- Brian Kernighan
		- [Brian Kernighan: UNIX, C, AWK, AMPL, and Go Programming | Lex Fridman Podcast #109 (youtube.com)](https://www.youtube.com/watch?v=O9upVbGSBFo)
		- [Coffee with Brian Kernighan - Computerphile (youtube.com)](https://www.youtube.com/watch?v=GNyQxXw_oMQ)
		- [UNIX was designed for programmers | Brian Kernighan and Lex Fridman - YouTube](https://www.youtube.com/watch?v=v0ON23Y4W68)
		- [UNIX Special: Profs Kernighan & Brailsford - Computerphile (youtube.com)](https://www.youtube.com/watch?v=vT_J6xc-Az0)
		- [Oral History of Brian Kernighan (youtube.com)](https://www.youtube.com/watch?v=bTWv-l0JhAc)
	- Linus Torvalds
		- [The mind behind Linux | Linus Torvalds | TED (youtube.com)](https://www.youtube.com/watch?v=o8NPllzkFhE)
		- [Keynote: Linus Torvalds, Creator of Linux & Git, in Conversation with Dirk Hohndel (youtube.com)](https://www.youtube.com/watch?v=OvuEYtkOH88)
		- [Q&A with Linus Torvalds (youtube.com)](https://www.youtube.com/watch?v=7SofmXIYvGM)
		- [Aalto Talk with Linus Torvalds [Full-length] - YouTube](https://www.youtube.com/watch?v=MShbP3OpASA)
	- John "maddog" hall
		- [Jon "maddog" Hall talks Unix and Linux history (youtube.com)](https://www.youtube.com/watch?v=EZMA3Ge144U)
- Talks & Documentaries about linux and/or unix
	- [The Rise of Unix. The Seeds of its Fall. (youtube.com)](https://www.youtube.com/watch?v=HADp3emVABg)
	- [Linux: The Origin Story (youtube.com)](https://www.youtube.com/watch?v=s7u7jBwIocU)
	- [A Chronicle of the Unix Wars (youtube.com)](https://www.youtube.com/watch?v=Ffh3DRFzRL0)
	- [The Computer Chronicles - UNIX (1985) (youtube.com)](https://www.youtube.com/watch?v=0DdoGPav3fc)
	- [Unix50 - Unix Today and Tomorrow: The Languages (youtube.com)](https://www.youtube.com/watch?v=xnCgoEyz31M)
	- [UNIX: Making Computers Easier To Use -- AT&T Archives film from 1982, Bell Laboratories - YouTube](https://www.youtube.com/watch?v=XvDZLjaCJuw)
	- [AT&T Archives: The UNIX Operating System (youtube.com)](https://www.youtube.com/watch?v=tc4ROCJYbm0)
	- [AT&T's The Unix Connection (youtube.com)](https://www.youtube.com/watch?v=JJlz0JIbHt8)
	- [History of Gnu, Linux, Free and Open Source Software (Revolution OS) (youtube.com)](https://www.youtube.com/watch?v=vjMZssWMweA)
	- [The History of Unix, Rob Pike](https://youtu.be/_2NI6t2r_Hs?si=FV5i3UIYxLHOlP7u&t=220)
	- [When Unix Landed - Computerphile (youtube.com)](https://www.youtube.com/watch?v=fCDsn7OTNMg)
	- ["What UNIX Cost Us" - Benno Rice (LCA 2020) (youtube.com)](https://www.youtube.com/watch?v=9-IWMbJXoLM)
	- [Mainframes and the Unix Revolution - Computerphile (youtube.com)](https://www.youtube.com/watch?v=-rPPqm44xLs)
