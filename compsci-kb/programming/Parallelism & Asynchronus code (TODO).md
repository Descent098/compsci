---
title: Parallelism & Asynchronus code (TODO)
date: 2024-01-19
aliases: 
tags:
---
Most code is serial. This means it runs from top to bottom, and it runs one line at a time. There are various different ways that we can break this paradigm and run our code multiple lines at a time.
## Async/Await (TODO)
...

## Threading (TODO)
...
## Multiprocessing (TODO)
...

- Race conditions
	- Dangers of getting this wrong
		- [how a simple programming mistake ended 6 lives (youtube.com)](https://www.youtube.com/watch?v=41Gv-zzICIQ)
			- [The Worst Computer Bugs in History: Race conditions in Therac-25 | BugSnag Blog](https://www.bugsnag.com/blog/bug-day-race-condition-therac-25/)
	- [Programming embedded systems: Race conditions and how to avoid them - Embedded.com](https://www.embedded.com/programming-embedded-systems-race-conditions-and-how-to-avoid-them/)
	- [Fantastic Bugs and How to Resolve Them Ep2: Race Conditions | Rookout](https://www.rookout.com/blog/fantastic-bugs-and-how-to-resolve-them-ep2-race-conditions/)
	- [Hacking Banks With Race Conditions | by Vickie Li | The Startup | Medium](https://medium.com/swlh/hacking-banks-with-race-conditions-2f8d55b45a4b)
- [Amdahl's law - Wikipedia](https://en.wikipedia.org/wiki/Amdahl%27s_law)