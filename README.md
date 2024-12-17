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

## Update Guide

There are a few config changes made that are hardcoded, and need to be persisted. You will need to manually check differences in the following files:

- `quartz.config.ts`
- `quartz.layout.ts`
- `/quartz/static/icon.png`
- `/quartz/static/og-image.png`

Additionally you will need to update `/quartz/cli/args.js` to change the default `-d` flag from `content` to `compsci-kb` (or else no content will be found). Lastly update the footer to include the content license (under the quartz indicator):

```html
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://kieranwood.ca/compsci/">The Compsci KB</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://kieranwood.ca">Kieran Wood</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""/><img style="height:22px!important;margin-left:3px;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""/><img style="height:22px!important;margin-left:3px;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""/></a></p>
```
