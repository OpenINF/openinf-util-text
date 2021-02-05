"use strict";
/**
 * @license
 * Copyright OpenINF All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://open.inf.is/license
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yellow = exports.underline = exports.redden = exports.mdCodeSpans2html = exports.italicize = exports.ellipsify = exports.curlyQuote = exports.blueify = exports.UnicodeEscapes = void 0;
// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------
const util_1 = require("util");
const cli_color_1 = __importDefault(require("cli-color"));
const has_unicode_1 = __importDefault(require("has-unicode"));
const supports_ansi_1 = __importDefault(require("supports-ansi"));
/** @enum {string} */
exports.UnicodeEscapes = {
    infoSymbol: '\u24D8',
    midlineEllipsis: '\u22EF',
    ellipsis: '\u2026',
    errorSymbol: '\u24E7',
    leftDoubleQuotes: '\u201c',
    rightDoubleQuotes: '\u201d',
    warningSymbol: '\u26A0',
};
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
/**
 * Returns the supplied string as blue colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
function blueify(arbitraryString) {
    return supports_ansi_1.default ? cli_color_1.default.blue(arbitraryString) : arbitraryString;
}
exports.blueify = blueify;
/**
 * Returns the supplied string as curly quoted if Unicode is supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
function curlyQuote(arbitraryStr) {
    return util_1.format('%s%s%s', has_unicode_1.default() ? exports.UnicodeEscapes.leftDoubleQuotes : "\"", arbitraryStr, has_unicode_1.default() ? exports.UnicodeEscapes.rightDoubleQuotes : "\"");
}
exports.curlyQuote = curlyQuote;
/**
 * Returns the supplied string as ellipsified if Unicode is supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
function ellipsify(arbitraryStr) {
    return util_1.format('%s%s', arbitraryStr, has_unicode_1.default() ? exports.UnicodeEscapes.ellipsis : '...');
}
exports.ellipsify = ellipsify;
/**
 * Returns the supplied string as italicized if ANSI escapes are supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
function italicize(arbitraryStr) {
    return supports_ansi_1.default ? cli_color_1.default.italic(arbitraryStr) : arbitraryStr;
}
exports.italicize = italicize;
/**
 * Processes the supplied string by transforming any Markdown backtick code
 * spans (begining and ending with a single backtack) into HTML code elements.
 * @param {string} arbitraryStr
 * @returns {string}
 */
function mdCodeSpans2html(arbitraryStr) {
    const codeSpanRegex = new RegExp(/(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/ig);
    let span = codeSpanRegex.exec(arbitraryStr)[2];
    span = span.replace(/^[ ]*/, ''); // leading whitespace
    span = span.replace(/[ ]*$/, ''); // trailing whitespace
    return arbitraryStr.replace(codeSpanRegex, `<code>${span}</code>`);
}
exports.mdCodeSpans2html = mdCodeSpans2html;
/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
function redden(arbitraryString) {
    return supports_ansi_1.default ? cli_color_1.default.red(arbitraryString) : arbitraryString;
}
exports.redden = redden;
/**
 * Returns the supplied string as underlined if ANSI escapes are supported.
 * @param {string} arbitraryStr
 * @returns {string}
 */
function underline(arbitraryStr) {
    return supports_ansi_1.default ? cli_color_1.default.underline(arbitraryStr) : arbitraryStr;
}
exports.underline = underline;
/**
 * Returns the supplied string as yellow colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
function yellow(arbitraryString) {
    return supports_ansi_1.default ? cli_color_1.default.yellow(arbitraryString) : arbitraryString;
}
exports.yellow = yellow;
