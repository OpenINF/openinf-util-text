// Copyright 2021 The OpenINF Authors. All rights reserved. MIT license.

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { format } from 'util';
import clc from 'cli-color';
import hasUnicode from 'has-unicode';
import supportsAnsi from 'supports-ansi';

/** @enum {string} */
export const UnicodeEscapes = {
  infoSymbol: '\u24D8', // ⓘ
  midlineEllipsis: '\u22EF', // ⋯
  ellipsis: '\u2026', // …
  errorSymbol: '\u24E7', // ⓧ
  leftDoubleQuotes: '\u201c', // “
  rightDoubleQuotes: '\u201d', // ”
  warningSymbol: '\u26A0', // ⚠
};

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

/**
 * Returns the supplied string as blue colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export function blueify(text:string):string {
  return supportsAnsi ? clc.blue(text) : text;
}

/**
 * Returns the supplied string as curly quoted if Unicode is supported.
 * @param {string} text
 * @returns {string}
 */
export function curlyQuote(text:string):string {
  return format(
    '%s%s%s',
    hasUnicode() ? UnicodeEscapes.leftDoubleQuotes : "\"",
    text,
    hasUnicode() ? UnicodeEscapes.rightDoubleQuotes : "\"",
  );
}

/**
 * Returns the supplied string as ellipsified if Unicode is supported.
 * @param {string} text
 * @returns {string}
 */
export function ellipsify(text:string):string {
  return format('%s%s', text,
    hasUnicode() ? UnicodeEscapes.ellipsis : '...');
}

/**
 * Returns the supplied string as italicized if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export function italicize(text:string):string {
  return supportsAnsi ? clc.italic(text) : text;
}

/**
 * Processes the supplied string by transforming any Markdown backtick code
 * spans (begining and ending with a single backtack) into HTML code elements.
 * @param {string} text
 * @returns {string}
 */
export function mdCodeSpans2html(text:string):string {
  const codeSpanRegex = new RegExp(/(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/ig);

  let span = codeSpanRegex.exec(text)![2];
  span = span.replace(/^[ ]*/, ''); // leading whitespace
  span = span.replace(/[ ]*$/, ''); // trailing whitespace

  return text.replace(codeSpanRegex, `<code>${ span }</code>`);
}

/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export function redden(text:string):string {
  return supportsAnsi ? clc.red(text) : text;
}

/**
 * Returns the supplied string as underlined if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export function underline(text:string):string {
  return supportsAnsi ? clc.underline(text) : text;
}

/**
 * Returns the supplied string as yellow colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export function yellow(text:string):string {
  return supportsAnsi ? clc.yellow(text) : text;
}
