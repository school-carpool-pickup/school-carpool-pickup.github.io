import rehypeMermaid from "rehype-mermaid";

export default {
  rehypePlugins: (plugins) => [[rehypeMermaid, { strategy: "inline-svg" }], ...plugins],
};
