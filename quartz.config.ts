import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Computer Science Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "kieranwood.ca",
    ignorePatterns: ["private", "templates", ".obsidian", "_meta", "**.excalidraw.md", "Events", "**TODO).md", "**.excalidraw"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        "lightMode": {
            "light": "#f9f5d7",
            "lightgray": "#ebdbb2",
            "gray": "#bdae93",
            "darkgray": "#7c6f64",
            "dark": "#3c3836",
            "secondary": "#b16286",
            "tertiary": "#458588",
            "highlight": "rgba(80, 73, 69, 0.15)",
            "textHighlight": "#fabd2f88"
        },
        "darkMode": {
            "light": "#1d2021",
            "lightgray": "#3c3836",
            "gray": "#665c54",
            "darkgray": "#d5c4a1",
            "dark": "#fbf1c7",
            "secondary": "#b16286",
            "tertiary": "#83a598",
            "highlight": "rgba(168, 153, 132, 0.15)",
            "textHighlight": "#fabd2f88"
        }
      },
    },
    generateSocialImages: false,
    locale: "en-US"
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "everforest-light",
          dark: "everforest-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
