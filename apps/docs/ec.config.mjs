import { addClassName } from "astro-expressive-code/hast";

export default {
	frames: {
		showCopyToClipboardButton: false,
	},
	plugins: [
		{
			// Adds not-content className to rendered expressiveCode block
			name: "Not Content",
			hooks: {
				postprocessRenderedBlock: ({ renderData }) => {
					addClassName(renderData.blockAst, "not-content");
				},
			},
		},
	],
	themes: ["github-light", "github-dark"],
	themeCssSelector: (theme) => `[data-code-theme="${theme.name}"]`,
	useDarkModeMediaQuery: false,
};
