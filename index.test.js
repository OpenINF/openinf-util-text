const test = require('tape');
const { mdCodeSpans2html } = require('./index.js');

// @see https://github.com/KyleGobel/MarkdownSharp-GithubCodeBlocks/blob/0ba86dc7ea58ab9ad6b0dc663c3def7558f8f17e/MarkdownSharp.cs#L1352
test('should translate multiple backtick delimiters of Markdown `code spans` ' +
  'into HTML code tags', (t) => {
    let textIn = 'Just type ``foo `bar` baz`` at the prompt.';
    let textOut = 'Just type <code>foo `bar` baz</code> at the prompt.';
    t.strictEquals(mdCodeSpans2html(textIn), textOut);
    textIn = '... type `` `bar` `` ...';
    textOut = '... type <code>`bar`</code> ...';
    t.strictEquals(mdCodeSpans2html(textIn), textOut);
    t.end();
  });

test('should translate single backtick delimiters of Markdown `code spans` ' +
  'into HTML code tags', (t) => {
    let textIn = 'Top-level `await` enables modules to act as big async functions.';
    let textOut = 'Top-level <code>await</code> enables modules to act as big async functions.';
    t.strictEquals(mdCodeSpans2html(textIn), textOut);
    t.end();
  });
