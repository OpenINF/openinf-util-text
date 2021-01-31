<h1 align="center">@openinf/util-text</h1>

<p align="center">Essential cross-platform terminal-friendly text utilities</p>

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/@openinf/util-text"><img src="https://img.shields.io/npm/v/@openinf/util-text?style=plastic" alt="view on npm" /></a>
  <img src="https://img.shields.io/github/languages/top/openinf/util-text?color=blue&style=plastic" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/openinf/openinf.github.io?color=blue&style=plastic" alt="License: MIT" /></a>
</p>

<br />

_The high-level goal of `@openinf/util-text` is to serve as a Node.js package
containing **essential cross-platform text utilities** that degrade gracefully
when used in terminals lacking feature support. As is the case with any software
project in continuous development, omissions and errors may exist, for which
contributions are welcome._

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

## Members

<dl>
<dt><a href="#__importDefault">__importDefault</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#blueify">blueify(arbitraryString)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as blue colored if ANSI escapes are supported.</p>
</dd>
<dt><a href="#curlyQuote">curlyQuote(arbitraryStr)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as curly quoted if Unicode is supported.</p>
</dd>
<dt><a href="#ellipsify">ellipsify(arbitraryStr)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as ellipsified if Unicode is supported.</p>
</dd>
<dt><a href="#italicize">italicize(arbitraryStr)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as italicized if ANSI escapes are supported.</p>
</dd>
<dt><a href="#redden">redden(arbitraryString)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as red colored if ANSI escapes are supported.</p>
</dd>
<dt><a href="#underline">underline(arbitraryStr)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as underlined if ANSI escapes are supported.</p>
</dd>
<dt><a href="#yellow">yellow(arbitraryString)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the supplied string as yellow colored if ANSI escapes are supported.</p>
</dd>
</dl>

<a name="__importDefault"></a>

## \_\_importDefault
**Kind**: global variable  
**License**: Copyright OpenINF All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://open.inf.is/license  
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

## blueify(arbitraryString) ⇒ <code>string</code>
Returns the supplied string as blue colored if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryString | <code>string</code> | 

<a name="curlyQuote"></a>

## curlyQuote(arbitraryStr) ⇒ <code>string</code>
Returns the supplied string as curly quoted if Unicode is supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryStr | <code>string</code> | 

<a name="ellipsify"></a>

## ellipsify(arbitraryStr) ⇒ <code>string</code>
Returns the supplied string as ellipsified if Unicode is supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryStr | <code>string</code> | 

<a name="italicize"></a>

## italicize(arbitraryStr) ⇒ <code>string</code>
Returns the supplied string as italicized if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryStr | <code>string</code> | 

<a name="redden"></a>

## redden(arbitraryString) ⇒ <code>string</code>
Returns the supplied string as red colored if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryString | <code>string</code> | 

<a name="underline"></a>

## underline(arbitraryStr) ⇒ <code>string</code>
Returns the supplied string as underlined if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryStr | <code>string</code> | 

<a name="yellow"></a>

## yellow(arbitraryString) ⇒ <code>string</code>
Returns the supplied string as yellow colored if ANSI escapes are supported.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arbitraryString | <code>string</code> | 


<br />

---

<br />

&copy; OpenINF
