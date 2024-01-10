# Compsci KB

![](./quartz/static/icon.png)

This repository is the source code for [https://kieranwood.ca/compsci](https://kieranwood.ca/compsci), a knowledge base for computer science information.

## Technical details

All the content is implemented with markdown and can be found in `/compsci-kb`. The editing is meant to be done using [obsidian](https://obsidian.md/), and you should import `/compsci-kb` as a new vault for it to work as intended.

By default `/_meta` is ignored, and is used in conjuntion with the templater plugin in obsidian to create new files.

To run the dev server locally use:

1. `npm i` to install dependencies, you will only need to do this once
2. `npx quartz build --serve` to show the local version on port 8080

To build the site:

1. `npm i` to install dependencies, you will only need to do this once
2. `npx quartz build` which will dump the files to `/site`


## Quartz Details

This whole site is based on [Quartz V4](https://github.com/jackyzha0/quartz)

🔗 Read the documentation and get started if you're interested: https://quartz.jzhao.xyz/
