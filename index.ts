/**
 * @license
 * Copyright OpenINF All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://open.inf.is/license
 */

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
 * @param {string} arbitraryString
 * @returns {string}
 */
export function blueify(arbitraryString:string):string {
  return supportsAnsi ? clc.blue(arbitraryString) : arbitraryString;
}

/**
 * Returns the supplied string as curly quoted if Unicode is supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
export function curlyQuote(arbitraryStr:string):string {
  return format(
    '%s%s%s',
    hasUnicode() ? UnicodeEscapes.leftDoubleQuotes : "\"",
    arbitraryStr,
    hasUnicode() ? UnicodeEscapes.rightDoubleQuotes : "\"",
  );
}

/**
 * Returns the supplied string as ellipsified if Unicode is supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
export function ellipsify(arbitraryStr:string):string {
  return format('%s%s', arbitraryStr,
    hasUnicode() ? UnicodeEscapes.ellipsis : '...');
}

/**
 * Returns the supplied string as italicized if ANSI escapes are supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
export function italicize(arbitraryStr:string):string {
  return supportsAnsi ? clc.italic(arbitraryStr) : arbitraryStr;
}

/**
 * Processes the supplied string by transforming any Markdown backtick code
 * spans (begining and ending with a single backtack) into HTML code elements.
 * @param {string} arbitraryStr
 * @returns {string}
 */
export function mdCodeSpans2html(arbitraryStr:string):string {
  const codeSpanRegex = new RegExp(/(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/ig);

  let span = codeSpanRegex.exec(arbitraryStr)![2];
  span = span.replace(/^[ ]*/, ''); // leading whitespace
  span = span.replace(/[ ]*$/, ''); // trailing whitespace

  return arbitraryStr.replace(codeSpanRegex, `<code>${ span }</code>`);
}

/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
export function redden(arbitraryString:string):string {
  return supportsAnsi ? clc.red(arbitraryString) : arbitraryString;
}

/**
 * Returns the supplied string as underlined if ANSI escapes are supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
export function underline(arbitraryStr:string):string {
  return supportsAnsi ? clc.underline(arbitraryStr) : arbitraryStr;
}

/**
 * Returns the supplied string as yellow colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
export function yellow(arbitraryString:string):string {
  return supportsAnsi ? clc.yellow(arbitraryString) : arbitraryString;
}
