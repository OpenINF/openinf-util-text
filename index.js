"use strict";
/**
 * @license
 * Copyright OpenINF All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://open.inf.is/license
 */
exports.__esModule = true;
exports.underline = exports.redden = exports.italicize = exports.ellipsify = exports.curlyQuote = exports.blueify = exports.UnicodeEscapes = void 0;
// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------
var util_1 = require("util");
var cli_color_1 = require("cli-color");
var has_unicode_1 = require("has-unicode");
var supports_ansi_1 = require("supports-ansi");
/** @enum {string} */
exports.UnicodeEscapes = {
    infoSymbol: '\u24D8',
    midlineEllipsis: '\u22EF',
    ellipsis: '\u2026',
    errorSymbol: '\u24E7',
    leftDoubleQuotes: '\u201c',
    rightDoubleQuotes: '\u201d',
    warningSymbol: '\u26A0'
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
    return supports_ansi_1["default"] ? cli_color_1["default"].blue(arbitraryString) : arbitraryString;
}
exports.blueify = blueify;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter curly quoted if Unicode is supported.
 */
function curlyQuote(arbitraryStr) {
    return util_1.format('%s%s%s', has_unicode_1["default"]() ? exports.UnicodeEscapes.leftDoubleQuotes : "\"", arbitraryStr, has_unicode_1["default"]() ? exports.UnicodeEscapes.rightDoubleQuotes : "\"");
}
exports.curlyQuote = curlyQuote;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter ellipsified if Unicode is supported.
 */
function ellipsify(arbitraryStr) {
    return util_1.format('%s%s', arbitraryStr, has_unicode_1["default"]() ? exports.UnicodeEscapes.ellipsis : '...');
}
exports.ellipsify = ellipsify;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter italicized if ANSI escapes are supported.
 */
function italicize(arbitraryStr) {
    return supports_ansi_1["default"] ? cli_color_1["default"].italic(arbitraryStr) : arbitraryStr;
}
exports.italicize = italicize;
/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
function redden(arbitraryString) {
    return supports_ansi_1["default"] ? cli_color_1["default"].red(arbitraryString) : arbitraryString;
}
exports.redden = redden;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter underlined if ANSI escapes are supported.
 */
function underline(arbitraryStr) {
    return supports_ansi_1["default"] ? cli_color_1["default"].underline(arbitraryStr) : arbitraryStr;
}
exports.underline = underline;
