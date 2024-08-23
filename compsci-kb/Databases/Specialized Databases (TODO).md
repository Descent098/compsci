
...
## Key-Value Stores (TODO)
...

## Vector Databases (TODO)
Vector databases are databases designed for modern workloads such as:

- sentiment analysis
- named entity recognition
- text classification
- machine translation
- question answering (LLM’s)
- [semantic searching](https://www.elastic.co/what-is/semantic-search)
- document similarity

It does all this by being incredibly efficient at storing vector embeddings.

### Vector Embeddings

A vector embedding is essentially a way of trying to quantify what a word means according to a set of dimensions

![[vector-embeddings-1.png]]

This diagram nicely labels the dimensions, in reality the dimensions are much more opaque, and incredibly hard to quantify in human language:

![[vector-embeddings-2.png]]
  

It's often even more complicated than the above diagram. This diagram for example was a sort of “label encoding”, because of the math used in machine learning it actually breaks a lot of things. So, often the data will be processed again after being vectorized into other forms like one-hot encoding[^1].

### How it's used

It's not all just "words" either vector embeddings will often represent words, but there are different forms[^2] as well such as:

- Sentence embeddings
- Document embeddings
- Image embeddings
- User embeddings
- Product embeddings

### What are Vector databases?

For most of these embeddings once you generate them you will store them in a vector database. A vector DB does exactly what it sounds like, it stores vectors more efficiently and performantly than traditional databases.

Examples:

- [Pinecone](https://www.pinecone.io/)
- [Chroma](https://www.trychroma.com/)
- [Weaviate](https://weaviate.io/developers/weaviate)
- [Redis](https://redis.io/docs/latest/develop/get-started/vector-database/)/[Valkey](https://valkey.io/)

### Creating embeddings

There are a slough of methods for doing embeddings and the math behind them is incredibly involved. Examples can be found here: [tensorflow repo](https://github.com/tensorflow/text/tree/master/docs/tutorials) they will explain a method for creating these embeddings. One of the most common approaches is to use an existing embedding system like [word2vec](https://www.tensorflow.org/text/tutorials/word2vec), or pre-packaged systems for what you specifically want to do, like [elastic-search.](https://www.elastic.co/what-is/vector-embedding)

## Graph Databases (TODO)

...

## Document Databases (TODO)
...

## Time-series Databases (TODO)
...

## Resources

- Vector Databases
	- [The vector database to build knowledgeable AI | Pinecone](https://www.pinecone.io/)
	- [Riding the AI Wave with Vector Databases: How they work (and why VCs love them) - LunaBrain](https://lunabrain.com/blog/riding-the-ai-wave-with-vector-databases-how-they-work-and-why-vcs-love-them/)
	- [What is Vector Database? - Analytics Vidhya](https://www.analyticsvidhya.com/blog/2023/12/top-vector-databases/)
	- [The 5 Best Vector Databases | A List With Examples | DataCamp](https://www.datacamp.com/blog/the-top-5-vector-databases)
	- [What is Semantic Search? | A Comprehensive Semantic Search Guide | Elastic](https://www.elastic.co/what-is/semantic-search)
	- [Vector Databases simply explained! (Embeddings & Indexes) (youtube.com)](https://www.youtube.com/watch?v=dN0lsF2cvm4)
	- [word2vec  |  Text  |  TensorFlow](https://www.tensorflow.org/text/tutorials/word2vec)
	- [Embeddings - OpenAI API](https://platform.openai.com/docs/guides/embeddings)
	- [Wait... What REALLY Is A Vector Database? (youtube.com)](https://www.youtube.com/watch?v=NMfArmQ27m4)
	- [What are Vector Embeddings? | A Comprehensive Vector Embeddings Guide | Elastic](https://www.elastic.co/what-is/vector-embedding)
	- https://www.linkedin.com/pulse/3-ways-vector-databases-take-your-llm-use-cases-next-level-mishra/
	- https://medium.com/@michaeldelsole/what-is-one-hot-encoding-and-how-to-do-it-f0ae272f1179
	- One-Hot Encoding
		- [One Hot Encoding Explained | Built In](https://builtin.com/articles/one-hot-encoding)
		- [Data Science in 5 Minutes: What is One Hot Encoding? (educative.io)](https://www.educative.io/blog/one-hot-encoding)
		- [What is One Hot Encoding and How to Do It | by Michael DelSole | Medium](https://medium.com/@michaeldelsole/what-is-one-hot-encoding-and-how-to-do-it-f0ae272f1179)
		- [Why One-Hot Encode Data in Machine Learning? - MachineLearningMastery.com](https://machinelearningmastery.com/why-one-hot-encode-data-in-machine-learning/)
		- [Intro to Word Embeddings and Vectors for Text Analysis. (shanelynn.ie)](https://www.shanelynn.ie/get-busy-with-word-embeddings-introduction/)
		- [Vector Embeddings for Beginners - 30 min CS Course | OpenAI (youtube.com)](https://www.youtube.com/watch?v=PR7xz5vQKGg)
		- [A Beginner's Guide to Vector Embeddings (youtube.com)](https://www.youtube.com/watch?v=NEreO2zlXDk)


[^1]: [What is One Hot Encoding and How to Do It | by Michael DelSole | Medium](https://medium.com/@michaeldelsole/what-is-one-hot-encoding-and-how-to-do-it-f0ae272f1179)
[^2]: [What are Vector Embeddings? | A Comprehensive Vector Embeddings Guide | Elastic](https://www.elastic.co/what-is/vector-embedding)