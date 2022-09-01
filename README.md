<div align="center">

# @openinf/util-text

Essential cross-platform terminal-friendly text utilities

<br />

[!['View on npm'][npm-badge--shields]][npm-badge-url]
[!['GitHub Language'][github-language--shields]][github-language-url]
[!['License: MIT'][license-badge--shields]][license-badge-url]
[!['DeepScan grade'][deepscan-badge]][deepscan-url]

</div>

<br />

_The high-level goal of `@openinf/util-text` is to serve as a Node.js package
containing **essential cross-platform text utilities** that degrade gracefully
when used in terminals lacking feature support. As is the case with any software
project in continuous development, omissions and errors may exist, for which
contributions are welcome._

<br />

<div align="center">

[![Code Style: Prettier][prettier-badge]][prettier-url]
[![Commit Style: Conventional Commits][conventional-commits-badge]][conventional-commits-url]
[![Active Issues: DeepSource][deepsource-badge]][deepsource-url]
[![Chat on Matrix][matrix-badge--shields]][matrix-url]

</div>

<br />

---

<br />

## Installation

`@openinf/util-text` runs on Node.js and is available via `npm`.

```shell
npm install @openinf/util-text
```

## Usage

To get started using the text utils provided by `@openinf/util-text`, all
that needs to be done is either import/require (depending on the module format)
the default export of the module or destructure the individual named helper
functions exported.

```ts
import { blueify, ellipsify } from '@openinf/util-text';

console.log(blueify(ellipsify('Deserializing database tables')));
```

<br />

---

<br />

## Functions

<dl>
<dt><a href="#blueify">blueify(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as blue colored if ANSI escapes are supported.</p>
</dd>
<dt><a href="#curlyQuote">curlyQuote(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as curly quoted if Unicode is supported.</p>
</dd>
<dt><a href="#ellipsify">ellipsify(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as ellipsified if Unicode is supported.</p>
</dd>
<dt><a href="#italicize">italicize(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as italicized if ANSI escapes are supported.</p>
</dd>
<dt><a href="#mdCodeSpans2html">mdCodeSpans2html(text)</a> ⇒ <code>string</code></dt>
<dd><p>Processes the supplied string by transforming any Markdown backtick code
spans (begining and ending with a single backtack) into HTML code elements.</p>
</dd>
<dt><a href="#redden">redden(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as red colored if ANSI escapes are supported.</p>
</dd>
<dt><a href="#underline">underline(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as underlined if ANSI escapes are supported.</p>
</dd>
<dt><a href="#yellow">yellow(text)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as yellow colored if ANSI escapes are supported.</p>
</dd>
</dl>

<a name="UnicodeEscapes"></a>

## UnicodeEscapes : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| infoSymbol | <code>string</code> | <code>&quot;ⓘ&quot;</code> | 
| midlineEllipsis | <code>string</code> | <code>&quot;⋯&quot;</code> | 
| ellipsis | <code>string</code> | <code>&quot;…&quot;</code> | 
| errorSymbol | <code>string</code> | <code>&quot;ⓧ&quot;</code> | 
| leftDoubleQuotes | <code>string</code> | <code>&quot;“&quot;</code> | 
| rightDoubleQuotes | <code>string</code> | <code>&quot;”&quot;</code> | 
| warningSymbol | <code>string</code> | <code>&quot;⚠&quot;</code> | 

<a name="blueify"></a>

## blueify(text) ⇒ <code>string</code>
Returns the supplied string as blue colored if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="curlyQuote"></a>

## curlyQuote(text) ⇒ <code>string</code>
Returns the supplied string as curly quoted if Unicode is supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="ellipsify"></a>

## ellipsify(text) ⇒ <code>string</code>
Returns the supplied string as ellipsified if Unicode is supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="italicize"></a>

## italicize(text) ⇒ <code>string</code>
Returns the supplied string as italicized if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="mdCodeSpans2html"></a>

## mdCodeSpans2html(text) ⇒ <code>string</code>
Processes the supplied string by transforming any Markdown backtick code
spans (begining and ending with a single backtack) into HTML code elements.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="redden"></a>

## redden(text) ⇒ <code>string</code>
Returns the supplied string as red colored if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="underline"></a>

## underline(text) ⇒ <code>string</code>
Returns the supplied string as underlined if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="yellow"></a>

## yellow(text) ⇒ <code>string</code>
Returns the supplied string as yellow colored if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<br />

---

<br />

<p align="center">&copy; The OpenINF Authors</center></p>
<p align="center"><img height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg" /></p>

<br />

<!-- prettier-ignore-start -->
<!-- PRESERVE LINK DEFINITION LABEL CASE - START -->

[deepscan-badge]: https://deepscan.io/api/teams/18447/projects/21801/branches/634012/badge/grade.svg
[deepscan-url]: https://deepscan.io/dashboard#view=project&tid=18447&pid=21801&bid=634012
[deepsource-badge]: https://deepsource.io/gh/openinf/util-text.svg/?label=active+issues&show_trend=true&token=mqWR7codCZlrSDoAw8zKJZCF
[deepsource-url]: https://deepsource.io/gh/openinf/util-text/?ref=repository-badge 'Active Issues: DeepSource'
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[github-language-url]: https://github.com/openinf/util-text
[github-language--shields]: https://img.shields.io/github/languages/top/openinf/util-text?color=blue&logo=github
[license-badge-url]: https://spdx.org/licenses/MIT.html 'License: MIT'
[license-badge--shields]: https://img.shields.io/github/license/openinf/util-text?color=blue 'License: MIT'
[matrix-badge--badgen]: https://badgen.net/matrix/members/openinf/matrix.org 'Chat on Matrix'
[matrix-badge--shields]: https://img.shields.io/badge/matrix-join%20chat-%2346BC99?logo=matrix 'Chat on Matrix'
[npm-badge--shields]: https://img.shields.io/npm/v/@openinf/util-text/latest.svg?logo=npm 'View on npm'
[npm-badge-url]: https://www.npmjs.com/package/@openinf/util-text#top 'View on npm'
[matrix-url]: https://matrix.to/#/#openinf:matrix.org 'You&apos;re invited to talk on Matrix'
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier 'Code Style: Prettier'
[prettier-url]: https://prettier.io/playground 'Code Style: Prettier'

<!-- PRESERVE LINK DEFINITION LABEL CASE - END -->
<!-- prettier-ignore-end -->
