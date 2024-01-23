---
title: FOSS (Free and Open Source Software)
aliases:
  - FOSS
  - open source
  - free software
  - libre
tags:
  - foss
  - legal
  - linux
---
When developing software you have an important choice to make. Should users be able to see the [[Programming/Basics#Source Code, Binaries, and scripts|source code]] to the program you're asking them to run? Should you be able to know the internals of what's happening in your computer? Much of the software we used today is closed source and proprietary, meaning we don't know how it works, since we can't view the source code. This is in contrast to many other products like cars for example where we can open it up while it's running to determine how it works.

Free and open source software (FOSS) is a movement that says that users have the right to know what is running, and should be able to understand what's happening on their devices. 

Other benefits:

- People who want a feature can create it and contribute it back to the project for other people to use
- Bugs and security flaws can be found and patched
- People can learn from existing code
- Privacy audits can be done on code you are running
- Can take [libraries and API’s](https://schulichignite.com/blog/stealing-like-a-developer/#apis-and-libraries) and stick them together to build a bigger overall project

Open source is **very** popular in software development. Many of the projects that power the internet are open source. Here are a few examples:

- [linux kernel](https://github.com/torvalds/linux); What runs all “[[Unix & Linux|linux]]” operating systems, which account for over %90 of server market share [^6]
- [Bootstrap](https://github.com/twbs/bootstrap); Popular CSS framework used to build over %20 of sites [^7]
- [Python](https://github.com/python/cpython); Yep the source code for the python programming language is fully open source and you can see exactly how it works

There are many more examples, but basically most of modern development runs on open source!

## Free software vs Open Source
Inside you there are two wolves[^1]... in all seriousness with open source & free software (abbreviated to FOSS) there are broadly speaking 2 "camps" or schools of thought, the people interested in it philosophically (free software advocates), and those interested in it "pragmatically" (open source advocates). These schools of thought can overlap, but they are often at odds, namely in their level of commitment. 

People like Richard Stallman actually take it further from just open source to free/libre software[^2]. The common phrase used to explain this is "free as in free speech, not as in free beer". Free software goes beyond traditional open source and expands to encompass a more stringent philosophy. Free software generally has 4 tenets[^3], those being:

0. The user should have the freedom to run the software as they wish, for whatever purpose
1. The user should have the freedom to change the software and how it runs, therefore free software required open source
2. The user should have the freedom to redistribute their software
3. The user should have the freedom to redistribute their software with their changes

Bruce Perens and others on the Debian team have actually expanded these out to the "ten commandments" or "social contract" :

 
> 1. **Free Redistribution**
    The license of a Debian component may not restrict any party from selling or giving away the software as a component of an aggregate software distribution containing programs from several different sources. The license may not require a royalty or other fee for such sale.
>2. **Source Code**
    The program must include source code, and must allow distribution in source code as well as compiled form.
>3. **Derived Works**
    The license must allow modifications and derived works, and must allow them to be distributed under the same terms as the license of the original software.
>4. **Integrity of The Author's Source Code**
    The license may restrict source-code from being distributed in modified form **only** if the license allows the distribution of patch files with the source code for the purpose of modifying the program at build time. The license must explicitly permit distribution of software built from modified source code. The license may require derived works to carry a different name or version number from the original software. (_This is a compromise. The Debian group encourages all authors not to restrict any files, source or binary, from being modified._)
>5. **No Discrimination Against Persons or Groups**
    The license must not discriminate against any person or group of persons.
>6. **No Discrimination Against Fields of Endeavor**
    The license must not restrict anyone from making use of the program in a specific field of endeavor. For example, it may not restrict the program from being used in a business, or from being used for genetic research.
>7. **Distribution of License**
    The rights attached to the program must apply to all to whom the program is redistributed without the need for execution of an additional license by those parties.
>8. **License Must Not Be Specific to Debian**
    The rights attached to the program must not depend on the program's being part of a Debian system. If the program is extracted from Debian and used or distributed without Debian but otherwise within the terms of the program's license, all parties to whom the program is redistributed should have the same rights as those that are granted in conjunction with the Debian system.
>9. **License Must Not Contaminate Other Software**
    The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be free software.
>10. **Example Licenses**
    The **[GPL](https://www.gnu.org/copyleft/gpl.html)**, **[BSD](https://opensource.org/licenses/BSD-3-Clause)**, and **[Artistic](https://perldoc.perl.org/perlartistic.html)** licenses are examples of licenses that we consider _free_.
> - From the Debian Social contract [^5]

Without these rules being obeyed the argument is that the user is not in control of a program, but rather the program controls the user. These stipulations are what allow the sort of control that free software advocates would call "free or libre".

The people who are philosophically interested in FOSS care about "libre" and about the freedom for users. This interest often comes in spite of particular financial incentives.  For example people who are philosophically interested in FOSS would not allow companies to collect data on them, even if it couldn't be leaked because the individual should have the freedom to not be known to software developers and companies. This commitment would often also play out in the form of buying components that have open source [[OS & Firmware/Basics|firmware]]. running only FOSS [[OS & Firmware/Basics|operating systems]], and generally having products that as much as humanly possible are fully FOSS, even if it means making sacrifices for those commitments[^4].

On the other hand the pragmatist is only interested in FOSS for as far as it serves a practical purpose. Whether its benefits to security, collaboration driving features, or any other benefit, that is what they are committed to. However something not being FOSS only matters in so far as the pros outweigh the cons. Essentially the pragmatic view is only concerned with the consequences of choosing a particular piece of software or hardware, whereas the philosophically interested are more ideological, and even if there are downsides they will still pick a FOSS option because it's "the right thing to do". 

## Licensing

>[!attention] DISCLAIMER
> 
> **This is not legal advise**, if you’re going to put this into practice get it looked over by a lawyer first. We’re not responsible if something goes wrong, I’m a developer not a lawyer.

On top of that, a few things to consider while reading:

1. Laws change over time
2. Laws are different in different countries
3. Legal systems are often not intuitive. Don’t just assume it works “the obvious way”, look it up, or ask a lawyer

A license is basically the thing that tells you what you can do with some software. Sometimes you buy “license keys” in order to gain access, other times the licenses are implicit, meaning you agree to them when you use the software. These **must** be stated either somewhere in the software, and/or **must** be available in some form to be considered valid. That means if you are just providing a binary/executable, you must have some way for someone to read the license that is available to them.

Generally in software development we care about licenses for source code (code used to create the program), but licenses can exist in many forms. For example you might buy a license to use a photo, or to “unlock” a piece of software etc.

Source code licenses can be used to determine:

- If you can use the code in your project
- If you can use the project name in your project
- If you have to send back any changes you make
- If you are allowed to make any changes to the code
- If you are allowed to use the code without purchase
- If the code comes with a warranty
- If you can change the license to the code & usually which are “compatible”
- etc.

There are a few common misconceptions about source code licenses:

- Projects don’t have to have **just 1** license, portions of the code can be licensed differently (this gets messy though)
- Licenses do not imply [copyright, or trademarks](https://www.legalzoom.com/articles/trademarks-vs-copyrights-which-one-is-right-for-you), just because Facebook has open source libraries you can use code doesn’t mean you can use their brand name
### Open Source Licenses
Open source licenses are a particular type of license that is intended to license code according to terms that are in line with open source principles. These come in various flavors, some of which obey the full "free software" principles, and others which just obey "open source" principles.
### Copyleft
Copyleft is the opposite of copyright. Instead of being closed by default any copyleft licenses will require derivative products (products made with code that is copyleft) to also be open source. For example [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/) requires you to disclose the source code:

> To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.
> 
> For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

As well as other things like disclose any changes, and you also must maintain the license in any derivatives. This means if you create a new project based off a GPLv3 codebase, your code has to adhere to the same rules!
#### Common open source licenses

In the open source community there are lots of licenses, and families of licenses that come up a lot

- [MIT](https://schulichignite.com/blog/stealing-like-a-developer/) is an incredibly popular license that is incredibly permissible. It lets people do (mostly) whatever they want with the code, while still refusing to supply a warranty. When in doubt, I highly recommend it.
- GPL is a family of licenses. The two most popular are (there’s also [AGPL](https://choosealicense.com/licenses/agpl-3.0/) and others)
    - [GPLV3](https://choosealicense.com/licenses/gpl-3.0/); Highly popular option that requires people to make any derivatives based off the software also open source.
    - [LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/); Has similar terms to GLPv3 except if the project only includes the code to be used as a [library](https://schulichignite.com/blog/stealing-like-a-developer/#apis-and-libraries) then the remainder of the program doesn’t have to be under the same terms
- [Creative commons](https://creativecommons.org/) is a family of licenses that are generally permissive, but each “code” has different requirements to satisfy. One thing to keep in mind is that the license is **non-revokable**, meaning even if you want to stop sharing later anyone who has copies can do what they want so long as they’re within the original terms. You can see the full list [here](https://creativecommons.org/about/cclicenses/), but some common ones include:
    - CC-BY: You can do what you want, but the original creator must be credited somehow
    - CC-BY-SA: You can do what you want, but the original creator must be credited somehow and all adaptations must have the same terms
    - CC-0: The work is fully public domain and you give up all rights (including copyright) to the content
- [Apache 2](https://choosealicense.com/licenses/apache-2.0/) is a common license for big company projects because it allows a project to be open source, while keeping people from being able to use your trademarks

### Content Licensing
The idea of FOSS has also inspired many movements to "democratize information". This means instead of having the traditional proprietary approaches to content being produced, just like source code the information for content is open for people to use. 

### Public Domain & Creative commons
The public domain is the name for any content that doesn't fall under any intellectual property claims[^8]. This can be people volunteering their content, or if licensing expires in a country (such as Winnie the pooh[^9] [^10]). 

The [creative commons](https://creativecommons.org/) is a non-profit group that is devoted to help bring works into the public domain, and/or make it easy to license content in a way that makes it accessible to everyone. Creative commons licenses will **typically** have at least 1 stipulation. One thing to keep in mind is **you often can't remove the license you pick**. There are a ton of different possible licenses available for people to choose from that have various different stipulations, some popular ones are:
- [CC By 4.0 (Attribution 4.0 International)](https://creativecommons.org/licenses/by/4.0/legalcode.en)
	- People must include attribution[^11]
- [CC By-SA 4.0 (Attribution-ShareAlike 4.0 International)](https://creativecommons.org/licenses/by-sa/4.0/legalcode.en)
	- People must include attribution
	- Cannot change the license
- [CC BY-NC-SA 4.0 (Attribution-NonCommercial-ShareAlike 4.0 International)](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.en)
	- Must include attribution
	- Cannot use it in commercial projects
	- Cannot change the license of the text
- [CC BY-ND 4.0 (Attribution-NoDerivs 4.0 International)](https://creativecommons.org/licenses/by-nd/4.0/legalcode.en)
	- Must include attribution
	- Cannot modify or adapt content

If you are planning to use these licenses [they have a tool to help choose](https://chooser-beta.creativecommons.org/), and I would recommend using it.

#### MIT Open Courseware
In 2001 MIT launched the [OpenCourseWare project](https://ocw.mit.edu/)[^12]. This project was trying to help democratize the access to university level course content. They distribute the content on multiple platforms, details for which can be found [here](https://openlearning.mit.edu/courses-programs/mit-opencourseware).
## Critiques of open source
While the idea of open source sounds great there are many critiques in practice. While these shouldn't necessarily dissuade you from developing open source they are things to keep in mind:

- Little to no accountability
	- [The Dark Side of Open Source // What really happened to Faker.js? (youtube.com)](https://www.youtube.com/watch?v=R6S-b_k-ZKY)
	- [The Dark Side of Open Source (youtube.com)](https://www.youtube.com/watch?v=Q-02fW-n4qg)
	- David Tolney
		- [rustconf.md (github.com)](https://gist.github.com/dtolnay/7f5da4bf057b7c6d0d00c6bed3060b96)
		- [David Tolnay on the "RustConf Keynote Fiasco" | Hacker News (ycombinator.com)](https://news.ycombinator.com/item?id=37378328)
		- [The LAST Rust Drama (youtube.com)](https://www.youtube.com/watch?v=MD7tcupioh8)
- Weak Supply chain
	- Leftpad
		- [NPM & left-pad: Have We Forgotten How To Program? - (davidhaney.io)](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/)
		- [Rage-quit: Coder unpublished 17 lines of JavaScript and “broke the Internet” | Ars Technica](https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/)
		- [How one developer just broke Node, Babel and thousands of projects in 11 lines of JavaScript • The Register](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/)
	- Everything
		- [How One Command Broke NPM (youtube.com)](https://www.youtube.com/watch?v=IzqtWTMFv9Y)
		- ['everything' blocks devs from removing their own npm packages (bleepingcomputer.com)](https://www.bleepingcomputer.com/news/security/everything-blocks-devs-from-removing-their-own-npm-packages/)
		- [Everything Breaks NPM (youtube.com)](https://www.youtube.com/watch?v=8r4h6UkFQ4k)
		- [When "Everything" Becomes Too Much: The npm Package Chaos of 2024 - Socket](https://socket.dev/blog/when-everything-becomes-too-much)
	- OpenSSL
		- [Tech giants, chastened by Heartbleed, finally agree to fund OpenSSL | Ars Technica](https://arstechnica.com/information-technology/2014/04/tech-giants-chastened-by-heartbleed-finally-agree-to-fund-openssl/)
		- [OpenSSL Gets Funding After Heartbleed - BankInfoSecurity](https://www.bankinfosecurity.com/openssl-gets-funding-after-heartbleed-a-6893)
		- [OpenSSL needs corporate funding to avoid Heartbleed repeat | ZDNET](https://www.zdnet.com/article/openssl-needs-corporate-funding-to-avoid-heartbleed-repeat/)
	- [NPM security: preventing supply chain attacks | Snyk](https://snyk.io/blog/npm-security-preventing-supply-chain-attacks/)
	- [NPM supply-chain attack impacts hundreds of websites and apps (bleepingcomputer.com)](https://www.bleepingcomputer.com/news/security/npm-supply-chain-attack-impacts-hundreds-of-websites-and-apps/)
	- Actix
		- ['I am done with open source': Developer of Rust Actix web framework quits, appoints new maintainer • The Register](https://www.theregister.com/2020/01/21/rust_actix_web_framework_maintainer_quits/)
		- [Actix project postmortem | Hacker News (ycombinator.com)](https://news.ycombinator.com/item?id=22073908)
		- [A sad day for Rust (steveklabnik.com)](https://steveklabnik.com/writing/a-sad-day-for-rust)
		- [The Downfall of Actix Web (youtube.com)](https://www.youtube.com/watch?v=enLUX1TtNyE)

## Additional Resources
- Articles & Blog posts on the topic
	- [Stealing Like a Developer | Schulich Ignite](https://schulichignite.com/blog/stealing-like-a-developer/)
	- [The Open-Source Philosophy / Blogs / Perficient](https://blogs.perficient.com/2023/05/31/whatisopensource/)
	- [LateNite Legacy Blog (latenitefilms.com)](https://latenitefilms.com/blog/philosophy-of-open-source/)
- Aaron Swartz
	- [Aaron Swartz' Death Fuels MIT Probe, White House Petition to Oust Prosecutor - ABC News (go.com)](https://abcnews.go.com/Technology/aaron-swartz-death-fuels-mit-probe-white-house/story?id=18210596)
	- [Aaron Swartz's Brilliant Life and Tragic Death (rollingstone.com)](https://www.rollingstone.com/culture/culture-news/the-brilliant-life-and-tragic-death-of-aaron-swartz-177191/)
	- [The Darker Side of Aaron Swartz | The New Yorker](https://www.newyorker.com/magazine/2013/03/11/requiem-for-a-dream)
	- [Aaron Swartz](http://www.aaronsw.com/)
- [History of Gnu, Linux, Free and Open Source Software (Revolution OS) (youtube.com)](https://www.youtube.com/watch?v=vjMZssWMweA)
- [Reclaim your freedom with free libre software now - Richard Stallman of Free Software Movement (youtube.com)](https://www.youtube.com/watch?v=n9YDz-Iwgyw)
- [For A Free Digital Society - Richard M. Stallman (youtube.com)](https://www.youtube.com/watch?v=7ZSPf7YnGfE)
- [The Code: Story of Linux documentary (Multilingual) (youtube.com)](https://www.youtube.com/watch?v=XMm0HsmOTFI)
- [Free software, free society: Richard Stallman at TEDxGeneva 2014 (youtube.com)](https://www.youtube.com/watch?v=Ag1AKIl_2GM)

[^1]: [Inside You There Are Two Wolves | Know Your Meme](https://knowyourmeme.com/memes/inside-you-there-are-two-wolves)
[^2]: [Why Open Source Misses the Point of Free Software - GNU Project - Free Software Foundation](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html)
[^3]: [Free software, free society: Richard Stallman at TEDxGeneva 2014 (youtube.com)](https://www.youtube.com/watch?v=Ag1AKIl_2GM)
[^4]: https://youtu.be/Ag1AKIl_2GM?si=zN_U9fdbwRTZBFKv&t=433
[^5]: [Debian Social Contract](https://www.debian.org/social_contract#guidelines)
[^6]: [“Linux is used to power 96.3% of the world’s top web servers”](https://www.enterpriseappstoday.com/stats/linux-statistics.html#:~:text=Linux%20is%20used%20to%20power,the%20world%27s%20top%20web%20servers.&text=In%20fact%2C%2096.3%25%20account%20for,%25)
[^7]: ["Bootstrap is used by %25.8 of all the websites whose Javascript library we know. This is 21.3% of all websites"](https://w3techs.com/technologies/details/js-bootstrap#:~:text=Bootstrap%20is%20used%20by%2025.8,is%2021.3%25%20of%20all%20websites)
[^8]: [Welcome to the Public Domain - Copyright Overview by Rich Stim - Stanford Copyright and Fair Use Center](https://fairuse.stanford.edu/overview/public-domain/welcome/#:~:text=The%20term%20%E2%80%9Cpublic%20domain%E2%80%9D%20refers,an%20individual%20author%20or%20artist.)
[^9]: [Winnie-the-Pooh and hundreds of other works are now in the public domain | Temple Now](https://news.temple.edu/news/2022-01-24/winnie-pooh-and-hundreds-other-works-are-now-public-domain)
[^10]: [How Winnie-the-Pooh highlights flaws in U.S. copyright law — and what that could mean for Canada | CBC Radio](https://www.cbc.ca/radio/day6/trump-supporters-prep-for-2024-bye-bye-blackberry-don-t-look-up-why-we-procrastinate-joygerm-day-and-more-1.6307339/how-winnie-the-pooh-highlights-flaws-in-u-s-copyright-law-and-what-that-could-mean-for-canada-1.6309960)
[^11]: https://creativecommons.org/licenses/by/4.0/legalcode.en#:~:text=Attribution%20.,form)%2C%20You%20must%3A
[^12]: [Auditing Classes at M.I.T., on the Web and Free - The New York Times (nytimes.com)](https://www.nytimes.com/2001/04/04/us/auditing-classes-at-mit-on-the-web-and-free.html)