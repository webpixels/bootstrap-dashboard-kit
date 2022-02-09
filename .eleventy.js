const fs = require('fs');
const path = require('path');
const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItAnchor = require('markdown-it-anchor');
const toc = require('eleventy-plugin-toc')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require('html-minifier');
const beautify = require("js-beautify").html;

function eleventyConfig(config) {
	// Passthroughs
	config.addPassthroughCopy("src/img");
	config.addPassthroughCopy("src/svg");

	// Layout aliases
	config.addLayoutAlias("base", "layouts/base.njk");
	config.addLayoutAlias("auth", "layouts/auth.njk");

	// Get SVG contents
	var getSvgContent = function(file) {
		let relativeFilePath = `./src/svg/${file}.svg`;
		let data = fs.readFileSync(relativeFilePath, function(err, contents) {
			if (err) return err

			return contents
		});

		return data.toString('utf8');
	}

	config.addNunjucksShortcode("svg", getSvgContent);

	// Markdown
	let markdownOptions = {
		html: true,
		breaks: true,
		linkify: true
	};

	let markdownLib = markdownIt(markdownOptions)
		.use(markdownItAnchor, {
			permalink: true,
			permalinkClass: 'anchor-link',
			permalinkSymbol: '#',
			level: [2, 3, 4]
		})
		.use(markdownItEmoji);

	// Inject shortcodes with data
	config.addNunjucksTag("inject", function(nunjucksEngine) {
		return new function() {
			this.tags = ["inject"];

			this.parse = function(parser, nodes) {

				const token = parser.nextToken()
				const args = parser.parseSignature(null, true)

				parser.advanceAfterBlockEnd(token.value)

				return new nodes.CallExtensionAsync(this, 'run', args)

			}

			this.run = function(context, filePath, data, callback) {
				filePath = path.resolve('src/', filePath)

				// Allow usage without data passed to the tag
				if (callback == null) {
					callback = data
					data = null
				}

				fs.readFile(filePath, 'utf8', (err, str) => {

					if (err != null) return callback(err)

					let ret = nunjucksEngine.renderString(str, data, {
						path: filePath
					}, callback)

					ret = new nunjucksEngine.runtime.SafeString(ret);

					callback(null, ret);

				})
			};
		}();
	});

	// Minify HTML
	const isProduction = process.env.ELEVENTY_ENV === "production";
	const isDevelopment = process.env.ELEVENTY_ENV === "development";

	var htmlMinify = function(value, outputPath) {
		if (outputPath && outputPath.indexOf('.html') > -1) {
			return htmlmin.minify(value, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true
			});
		}
	}

	var htmlBeautify = function(value, outputPath) {
		if (outputPath && outputPath.indexOf('.html') > -1) {
			// const extname = path.extname(outputPath);
			// const parser = extname.replace(/^./, "");
			return beautify(value, {
				"html": {
					"allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
					"brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
					"end_with_newline": false, // End output with newline
					"indent_char": " ", // Indentation character
					"indent_handlebars": false, // e.g. {{#foo}}, {{/foo}}
					"indent_inner_html": false, // Indent <head> and <body> sections
					"indent_scripts": "normal", // [keep|separate|normal]
					"indent_size": 2, // Indentation size
					"max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
					"preserve_newlines": true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
					"unformatted": ["sub", "sup", "em", "strong", "i", "u", "strike", "big", "pre"], // List of tags that should not be reformatted
					"wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
				}
			})
		}
	}

	// html min only in production
	if (isProduction) {
		config.addTransform("htmlmin", htmlMinify);
	}

	if (isDevelopment) {
		config.addTransform("prettier", htmlBeautify);
	}

	// Syntax highlighting
	config.addPlugin(syntaxHighlight);

	// TOC
	config.addPlugin(toc);

	// Configuration
	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "includes",
			data: "data"
		},
		templateFormats: ["html", "njk", "md", "11ty.js"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		jsDataFileSuffix: ".data"
	}
}

module.exports = eleventyConfig;
