

Steps:
1. Lexer/Tokenizer: Break up code into smallest meaningful pieces. For python the code 
   `def myfunc(x):\n\tprint(x)`
   might be broken up into a list of:
   `[def, myfunc, (, x, ), :, \t, print, (, x, ) ]`
2. Parser: Take the tokens and turn them into something logical. For example with our `def myfunc(x):\n\tprint(x)` we might have a parser that generates a tree that looks like this (JSON format):
```json
{function:
       {
           label:myfunc,
           args:[x],
           body:[
               callFunction:{
                   label:print,
                   args:[x]
               }
          ]
      }
}
```

3. Code Generator: 

*It's important to note this approach is common, but not complete. There are many steps other compilers will take in addition to these steps.*




## Lexer/Tokenizer

We define our language syntax, we could think of this as a map of some text to a meaningful token. Something like:

```
"def" -> Start of Function
""
```


An approach 



## References
- [A Compiler From Scratch (destroyallsoftware.com)](https://www.destroyallsoftware.com/screencasts/catalog/a-compiler-from-scratch)