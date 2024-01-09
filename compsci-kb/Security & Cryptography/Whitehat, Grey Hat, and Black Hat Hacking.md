---
title: White, Grey & Black Hat Hacking
aliases:
  - white hat
  - black hat
  - grey hat
  - hat hacking
date: 2024-01-08
---

When Talking about hacking there's a few different common terms that come up. These terms convey the **intent, permission & motivations** behind the way someone is hacking. 

## Legality
All hacking (including white hat) **can** be illegal in various ways, so don't think just because you pick one of these that you're free of legal scrutiny [^1] [^2]. This changes over time, and per country, but you should look into your legal risk before doing **any** work on systems in particular for any situation you should:

1. Ask permission first before trying an exploit. 
	- Importantly you need to get **in writing** that you're allowed to do what you're doing. Even if someone hires you there should be a record, or they can say they never gave you permission.
2. Disclose all exploits
	- If you come across an exploit while intentionally **or unintentionally** using an application you should disclose it. The two common types are responsible disclosure, and full[^7]. Many places will have bug bounty programs exactly for this[^8] [^9]
3. DO NOT COLLECT DATA
	- If you are able to get data from a system do not store it. Storing stolen data is illegal in pretty much every country, especially user data

Doing all of this does not guarantee you legal immunity, it's just the best practices to avoid **most** legal issues. Some countries have stronger stances on this [^3] [^5] than others[^6] and that will effect legality a lot as well.

## Types of Disclosures

It's important to note when disclosing bugs there are 2 main types, public/full and responsible/private. Their names should give you some indication, but essentially a full disclosure is a disclosure of a bug publicly [^11] [^12] [^13]. The philosophy of this is that people deserve to know their devices are vulnerable. By disclosing publicly it forces the company to resolve the issues, unlike private disclosures, which can often take years and can lead to "[catch and kill](https://security.stackexchange.com/questions/199514/how-to-deal-with-responsible-disclosure-catch-and-kill)".

Private/responsible disclosures instead will report directly to the hardware/software developer directly so they can fix it without the knowledge of the public. This is often done through bug bounty programs where people are paid to find bugs. This also has the benefit of not allowing black hat hackers to use a bug while the developer is patching it.

There is a more in depth article on the ethics [here](https://ethics.acm.org/integrity-project/ask-an-ethicist/ask-an-ethicist-vulnerability-disclosure/).

## White Hat

These are typically considered the "good guys", the intention is to discover security vulnerabilities to **help the affected systems**, and importantly doing all this while they **have permission** to do so. White hat hackers would include people who are part of security analysis teams

Just because white hat hackers have permission does not always mean they are free from legal issues. For example a polish train service hired hackers to look into issues with a train when their warranty expired, and they are now being threatened by the manufacturer[^4]. Likewise agents working for governments of one country do not have permission from other countries for their work, and may find themselves being charged if they enter those countries.
### Examples
- Companies that offer to do paid penetration testing
	- [Penetration Testing Services | Pentesting | HackerOne](https://www.hackerone.com/product/pentest)
	- [Penetration Testing Services for Security | BreachLock](https://www.breachlock.com/)
	- [White-hacking Services - White Hat Hacker Company - Enterprise Security - Kiss Software](https://kiss.software/what-we-do-details/white-hacking-services)
- Polish Train DRM
	- [Technical Details](https://www.youtube.com/watch?v=XrlrbfGZo2k)
	- Additional Sources, and legal threats
		- [Trains were designed to break down after third-party repairs, hackers find | Ars Technica](https://arstechnica.com/tech-policy/2023/12/manufacturer-deliberately-bricked-trains-repaired-by-competitors-hackers-find/)
		- [Hackers Hit With Legal Threats After They Fixed a 'Bricked' Polish Train (gizmodo.com)](https://gizmodo.com/hackers-hit-with-legal-threats-after-they-fixed-a-brick-1851097424)
## Grey Hat
This is essentially where you are hacking "for good", in a legally or ethically ambiguous way. This is someone for example who is working on a system **without explicit permission**. This means that you are operating in a "grey-area", since you don't intend to do something wrong, but this doesn't mean you are in the clear.

Some countries will "upgrade" grey hat hacking to white hat hacking if people follow responsible disclosure paths [^3] [^10]. These laws change by country, but in some countries it is "safe" to test an exploit so long as you can demonstrate it's sole purpose was to then disclose it to the company. Different countries have varying rules on this, but generally if you write up a disclosure (like a [CVE](https://cve.mitre.org/)) you can avoid the legal consequences. Realistically you should just go the "white hat" approach first, and reach out **before** testing, however if you accidentally find a vulnerability in many cases you should be protected so long as you disclose it to the company that makes the software or hardware you're using.

### Examples
- Google cloud hacking
	- [Google Online Security Blog: Google Cloud Awards $313,337 in 2022 VRP Prizes (googleblog.com)](https://security.googleblog.com/2023/06/google-cloud-awards-313337-in-2022-vrp.html)
	- [Hacking Google Cloud? (youtube.com)](https://www.youtube.com/watch?v=uOvizKc1WZY)
- Zuckerberg Facebook page hack
	- [Zuckerberg's Facebook page hacked to prove security exploit | CNN Business](https://edition.cnn.com/2013/08/19/tech/social-media/zuckerberg-facebook-hack/index.html)
- Dan Kaminsky discovering Sony rootkit
	- [Sony Numbers Add Up to Trouble (archive.org)](https://web.archive.org/web/20080423212131/http://www.wired.com/politics/security/news/2005/11/69573)
	- [Sony BMG Rootkit Scandal: 10 Years Later | CSO Online](https://www.csoonline.com/article/553369/sony-bmg-rootkit-scandal-10-years-later.html#:~:text=SONY%20BMG%20ROOTKIT%20REVISITED)
- TweetDeck XSS Vulnerability
	- [TweetDeck vulnerability lets attackers execute code remotely - The Verge](https://www.theverge.com/2014/6/11/5800370/tweetdeck-vulnerability-lets-attackers-execute-code-remotely)
	- [The breaches continued: Twitter’s TweetDeck Hacked | Indusface Blog](https://www.indusface.com/blog/and-so-the-breaches-continued-twitters-tweetdeck-hacked/)
	- [Tweetdeck vulnerability found by teen trying to code emoji heart | X | The Guardian](https://www.theguardian.com/technology/2014/jun/12/tweetdeck-vulnerability-teen-code-emoji-heart)
	- [Here's how that major Tweetdeck vulnerability works - Vox](https://www.vox.com/2014/6/11/5800610/heres-how-that-major-tweetdeck-vulnerability-works)
- Stuxnet
	- [An Unprecedented Look at Stuxnet, the World's First Digital Weapon | WIRED](https://www.wired.com/2014/11/countdown-to-zero-day-stuxnet/)
	- [Stuxnet explained: The first known cyberweapon | CSO Online](https://www.csoonline.com/article/562691/stuxnet-explained-the-first-known-cyberweapon.html)
	- [What Is Stuxnet? | Trellix](https://www.trellix.com/security-awareness/ransomware/what-is-stuxnet/)

## Black hat
Black hat hackers are essentially the "bad" side of hacking. This is people who are hacking illegally with the intention to be paid to exploit, and or sell exploits. Basically all forms of black hat hacking are illegal, including the less obvious forms like [social engineering](https://www.enisa.europa.eu/topics/incident-response/glossary/what-is-social-engineering). It's also important to be aware that in some countries even purchasing vulnerabilities can be considered illegal.


### Examples

- NHS ransomware attacks
	- [NHS ransomware attack spreads worldwide - PMC (nih.gov)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5461132/)
	- [UK battles hacking wave as ransomware gang claims ‘biggest ever’ NHS breach | TechCrunch](https://techcrunch.com/2023/07/10/uk-hacks-public-sector-nhs-ransomware/?guccounter=1)
	- [NHS ransomware attack: what happened and how bad is it? | Cybercrime | The Guardian](https://www.theguardian.com/technology/2022/aug/11/nhs-ransomware-attack-what-happened-and-how-bad-is-it)
- Ebay 2016 XSS attacks
	- [XSS Flaw Exposed eBay Users to Phishing Attacks - SecurityWeek](https://www.securityweek.com/xss-flaw-exposed-ebay-users-phishing-attacks/)
	- [Hackers still exploiting eBay's stored XSS vulnerabilities in 2017 | Netcraft](https://www.netcraft.com/blog/hackers-still-exploiting-ebays-stored-xss-vulnerabilities-in-2017/)
	- [eBay Falls Victim to Cross-Site Scripting Attack (bitdefender.com)](https://www.bitdefender.com/blog/hotforsecurity/ebay-falls-victim-to-cross-site-scripting-attack/)
- Sammy worm
	- [The MySpace Worm that Changed the Internet Forever (vice.com)](https://www.vice.com/en/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever)
	- [The Tale of Samy The Worm.. One of the greatest moments in hacking… | by Niall Leah | Medium](https://niallleah.medium.com/the-tale-of-samy-the-worm-9ade840e7fda)
	- [Samy (computer worm) - Wikipedia](https://en.wikipedia.org/wiki/Samy_(computer_worm))


## Additional Reference and resources

- [Hacker's Grimoire - Hacker's Grimoire (gitbook.io)](https://vulp3cula.gitbook.io/hackers-grimoire/)
- [LiveOverflow - YouTube](https://www.youtube.com/@LiveOverflow)
- [John Hammond - YouTube](https://www.youtube.com/@_JohnHammond)


[^1]: [It's Now Scary to Be A White Hat Hacker Thanks to the US Government (futurism.com)](https://futurism.com/white-hat-hacker-us-government-scary)
[^2]: [MERKBLATT White Hat Hacker EN.pdf](file:///C:/Users/kiera/Downloads/MERKBLATT%20White%20Hat%20Hacker%20EN.pdf)
[^3]: [US Justice Department won't prosecute white-hat hackers under the CFAA | ZDNET](https://www.zdnet.com/article/us-justice-department-says-it-wont-prosecute-white-hat-hackers-under-the-cfaa/)
[^4]: https://gizmodo.com/hackers-hit-with-legal-threats-after-they-fixed-a-brick-1851097424
[^5]: [Belgium legalises ethical hacking: a threat or an opportunity for cybersecurity? - CiTiP blog (kuleuven.be)](https://www.law.kuleuven.be/citip/blog/belgium-legalises-ethical-hacking-a-threat-or-an-opportunity-for-cybersecurity/)
[^6]: [License to hack? - Ethical hacking - Infosecurity Magazine (infosecurity-magazine.com)](https://www.infosecurity-magazine.com/magazine-features/license-to-hack-ethical-hacking/#:~:text=of%20the%20targets.-,%22There%27s%20no%20defence%20in%20our%20hacking%20laws%20that%20your%20behaviour%20is%20for%20the%20greater%20good.%20Even%20if%20it%27s%20what%20you%20believe.%22,-Struan%20Robertson)
[^7]: https://www.helpnetsecurity.com/2023/11/27/eddie-zhang-project-black-vulnerability-disclosure
[^8]: [Google Bug Hunters](https://bughunters.google.com/)
[^9]: [Microsoft Bounty Programs | MSRC](https://www.microsoft.com/en-us/msrc/bounty)
[^10]: https://www.justice.gov/opa/pr/department-justice-announces-new-policy-charging-cases-under-computer-fraud-and-abuse-act#:~:text=The%20policy%20for%20the%20first%20time%20directs%20that%20good%2Dfaith%20security%20research%20should%20not%20be%20charged.
[^11]: [misc.ktemkin.com/fusee_gelee_nvidia.pdf](https://misc.ktemkin.com/fusee_gelee_nvidia.pdf)
[^12]: [CVE - CVE (mitre.org)](https://cve.mitre.org/)
[^13]: [Zuckerberg's Facebook page hacked to prove security exploit | CNN Business](https://edition.cnn.com/2013/08/19/tech/social-media/zuckerberg-facebook-hack/index.html)