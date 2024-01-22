...
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
<script>
const CANVASWIDTH = 300

const CANVASHEIGHT = 300

let gameOfLife = [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]

function setup() {
    createCanvas(CANVASWIDTH, CANVASHEIGHT);
  }

  function draw() {
    background(255,255,255);
    for (let i = 0; i < 3; i++) {
        ypos = i * 100
        for (let j = 0; j < 3; j++) {
          xpos = 100 * j
          if (gameOfLife[i][j] == 1){
            fill(0)
          } else{
            noFill()
          }
          square(xpos,ypos,100)
        }
    }
  }
</script>

## Important terms (TODO)
...

### Cells (TODO)
...

## Neighborhoods (TODO)
...
- Von Neuman vs Moore

## Rules
Rules is a shorthand name used for various patterns. It was created by Stephenn Wolfram in his book *A New Kind of Science*[^1].

Here are a few:
- Rule 30
	- Used to generate "cone shell-like" patterns[^2]
	- [Rule 30 - Wikipedia](https://en.wikipedia.org/wiki/Rule_30)
- Rule 90
	- [Sierpiński triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle)
		- Can also do this pattern recursively
		- [5.8. Sierpinski Triangle — Problem Solving with Algorithms and Data Structures (runestone.academy)](https://runestone.academy/ns/books/published/pythonds/Recursion/pythondsSierpinskiTriangle.html)
	- [Cellular Automata | Rule 90 (youtube.com)](https://www.youtube.com/watch?v=Tx8Dk1AqQ-8)
	- [Rule 90 - Wikipedia](https://en.wikipedia.org/wiki/Rule_90#:~:text=Rule%2090%20is%20an%20elementary%20cellular%20automaton.,cells%20is%20called%20a%20configuration.)
- Rule 184
	- Used in traffic flow simulation, balistics, and particle deposition (stuff getting stuck to other stuff)
	- [Rule 184 - Wikipedia](https://en.wikipedia.org/wiki/Rule_184)

## Game of Life (TODO)

- [Game of Life -- from Wolfram MathWorld](https://mathworld.wolfram.com/GameofLife.html)
- [LifeWiki (conwaylife.com)](https://conwaylife.com/wiki/Main_Page)
- [Spaceship - LifeWiki (conwaylife.com)](https://conwaylife.com/wiki/Spaceship)
- [Inventing Game of Life (John Conway) - Numberphile (youtube.com)](https://www.youtube.com/watch?v=R9Plq-D1gEk)

## Uses
- [[Procedural Generation (TODO)]]
	- Textures
		- [Procedural Textures Created on Cellular Automata (sccg.sk)](http://sccg.sk/~borovsky/rigorous_thesis/version111.htm)
		- [[2111.13545] $μ$NCA: Texture Generation with Ultra-Compact Neural Cellular Automata (arxiv.org)](https://arxiv.org/abs/2111.13545)
	- Terrain Generation
		- [Ian Holmes - Cellular Automata for Emergent Dungeons (youtube.com)](https://www.youtube.com/watch?v=b2VkgcC1xRc)
		- [Noise Smoothing](https://www.youtube.com/watch?v=slTEz6555Ts)
		- [Ian Holmes - Cellular Automata for Emergent Dungeons (youtube.com)](https://www.youtube.com/watch?v=b2VkgcC1xRc)
		- [Procedural Generation with Cellular Automata – Bronson Zgeb](https://bronsonzgeb.com/index.php/2022/01/30/procedural-generation-with-cellular-automata/)
		- [3D Cellular Automata - complex behavior from simple rules - YouTube](https://www.youtube.com/watch?v=63qlEpO73C4)
	- NPC movement
		- [bbertka_thesis_edit3 (tamu.edu)](https://oaktrust.library.tamu.edu/bitstream/handle/1969.1/ETD-TAMU-2010-12-8736/BERTKA-THESIS.pdf?isAllowed=y&sequence=2)
		- [Siamak-Finegrid20140612-updated (arxiv.org)](https://arxiv.org/ftp/arxiv/papers/1406/1406.3567.pdf)
		- [p01Conf96_a58-cd.dvi (ritsumei.ac.jp)](https://www.ice.ci.ritsumei.ac.jp/~ruck/PAP/netgames06.pdf)
		- [What are neural cellular automata? (youtube.com)](https://www.youtube.com/watch?v=3H79ZcBuw4M)
- Image Repairing
	- [Growing Neural Cellular Automata (distill.pub)](https://distill.pub/2020/growing-ca/)
- Simulation
	- Recrystalization (chemistry)
		- [Simulation of recrystallization by cellular automata - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/0956715191901832)
		- [recrystallization, simulation, grain growth, FEM, recovery, texture, microstructure, Potts, Monte Carlo, stored energy, grain boundary, crystal plasticity (dierk-raabe.com)](https://www.dierk-raabe.com/reprints/cellular-automata/)
		- [Recrystallization Simulation by Use of Cellular Automata | SpringerLink](https://link.springer.com/chapter/10.1007/978-1-4020-3286-8_113)
	- Traffic simlation (Civil engineering)
		- [Cellular Automaton Traffic Simulation (udel.edu)](https://udel.edu/~mm/traffic/ca.html)
		- [FULLTEXT01.pdf (diva-portal.org)](https://uu.diva-portal.org/smash/get/diva2:483914/FULLTEXT01.pdf)
		- [Cellular Automaton Exercise (Traffic Modelling) (youtube.com)](https://www.youtube.com/watch?v=A_a9GHu0XzQ)
	- Lattice Gas (Physics)
		- [Lattice Gas Automata implemented in Python 3.8 (youtube.com)](https://www.youtube.com/watch?v=pNPIFz8g3c0)
		- [1.0 (fas.org)](https://sgp.fas.org/othergov/doe/lanl/pubs/00285743.pdf)
		- [A Gentle Introduction to Lattice Gas Automaton for Simulation of Fluid Flow with Python. [The FHP model for Navier-Stokes Equations] | by Mohamed Gaber | Medium](https://mohamed-gaber.medium.com/a-gentle-introduction-to-lattice-gas-automaton-for-simulation-of-fluid-flow-with-python-f285884dcc09)
	- Simulating computer systems
		- [Let’s BUILD a COMPUTER in CONWAY's GAME of LIFE ⠠⠵ (youtube.com)](https://www.youtube.com/watch?v=Kk2MH9O4pXY)
		- 


## Additional Resources
- [Cellular Automata: Complexity From Simplicity](https://www.youtube.com/watch?v=t_HcBAO_Yas)
- [Cellular Automata for video games (youtube.com)](https://www.youtube.com/watch?v=JEPHf9n3Dgc)
- [Wolfram Atlas: Cellular Automata](https://atlas.wolfram.com/TOC/TOC_101.html)
- [Cellular Automata > The 256 Rules (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/cellular-automata/supplement.html)
- [John von Neumann's Cellular Automata | Embryo Project Encyclopedia (asu.edu)](https://embryo.asu.edu/pages/john-von-neumanns-cellular-automata)
- [Neural Patterns](https://neuralpatterns.io/)
- [3D Cellular Automata (youtube.com)](https://www.youtube.com/watch?v=dQJ5aEsP6Fs)
- [Go Forth and Replicate | Scientific American](https://www.scientificamerican.com/article/go-forth-and-replicate-2008-02/)
- [Cellular Automata. In the 1940s, John Von Neumann and… | by Ahmad Hamze | Medium](https://medium.com/@Ahmad_Hamze/cellular-automata-d7b0b3151f17)
- [The Incredible Story of The Game of Life (youtube.com)](https://www.youtube.com/watch?v=jvSp6VHt_Pc)
- Papers
	- [The General and Logical Theory of Automata (vordenker.de)](https://www.vordenker.de/ggphilosophy/jvn_the-general-and-logical-theory-of-automata.pdf)
	- [[2309.14364] ALIFE 2023 (arxiv.org)](https://ar5iv.labs.arxiv.org/html/2309.14364)
	- [An Implementation of von Neumann's Self-Reproducing Machine (mit.edu)](https://fab.cba.mit.edu/classes/865.18/replication/Pesavento.pdf)
- Coding train series
	- [7.1: Cellular Automata - The Nature of Code (youtube.com)](https://www.youtube.com/watch?v=DKGodqDs9sA&list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK&index=65)
	- [7.2: Wolfram Elementary Cellular Automata - The Nature of Code (youtube.com)](https://www.youtube.com/watch?v=W1zKu3fDQR8&list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK&index=65)
	- [I.0: Introduction - The Nature of Code (youtube.com)](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK)
	- [Coding Challenge 179: Elementary Cellular Automata (youtube.com)](https://www.youtube.com/watch?v=Ggxt06qSAe4)
- Talks By Stephen Wolfram
	- [Cellular Automata and Rule 30 (Stephen Wolfram) | AI Podcast Clips (youtube.com)](https://www.youtube.com/watch?v=VguG_y05Xe8)
	- [Stephen Wolfram: Cellular Automata, Computation, and Physics | Lex Fridman Podcast #89 (youtube.com)](https://www.youtube.com/watch?v=ez773teNFYA)
	- [How to Think Computationally About AI, the Universe and Everything | Stephen Wolfram | TED (youtube.com)](https://www.youtube.com/watch?v=fLMZAHyrpyo)
	- [Computing a theory of everything | Stephen Wolfram (youtube.com)](https://www.youtube.com/watch?v=60P7717-XOQ)

[^1]: [Stephen Wolfram: A New Kind of Science | Online—Table of Contents (wolframscience.com)](https://www.wolframscience.com/nks/)
[^2]: [Seashell patterns: left is real, right generated by a CA | Download Scientific Diagram (researchgate.net)](https://www.researchgate.net/figure/Seashell-patterns-left-is-real-right-generated-by-a-CA-Source-3_fig1_272359229)