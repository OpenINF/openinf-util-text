"use strict";
// Copyright 2021 The OpenINF Authors. All rights reserved. MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yellow = exports.underline = exports.redden = exports.mdCodeSpans2html = exports.italicize = exports.ellipsify = exports.curlyQuote = exports.blueify = exports.UnicodeEscapes = void 0;
// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------
const util_1 = require("util");
const colorette = __importStar(require("colorette"));
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
 * @param {string} text
 * @returns {string}
 */
function blueify(text) {
    return supports_ansi_1.default ? colorette.blue(text) : text;
}
exports.blueify = blueify;
/**
 * Returns the supplied string as curly quoted if Unicode is supported.
 * @param {string} text
 * @returns {string}
 */
function curlyQuote(text) {
    return util_1.format('%s%s%s', has_unicode_1.default() ? exports.UnicodeEscapes.leftDoubleQuotes : "\"", text, has_unicode_1.default() ? exports.UnicodeEscapes.rightDoubleQuotes : "\"");
}
exports.curlyQuote = curlyQuote;
/**
 * Returns the supplied string as ellipsified if Unicode is supported.
 * @param {string} text
 * @returns {string}
 */
function ellipsify(text) {
    return util_1.format('%s%s', text, has_unicode_1.default() ? exports.UnicodeEscapes.ellipsis : '...');
}
exports.ellipsify = ellipsify;
/**
 * Returns the supplied string as italicized if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
function italicize(text) {
    return supports_ansi_1.default ? colorette.italic(text) : text;
}
exports.italicize = italicize;
/**
 * Processes the supplied string by transforming any Markdown backtick code
 * spans (begining and ending with a single backtack) into HTML code elements.
 * @param {string} text
 * @returns {string}
 */
function mdCodeSpans2html(text) {
    const codeSpanRegex = new RegExp(/(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/ig);
    let span = codeSpanRegex.exec(text)[2];
    span = span.replace(/^[ ]*/, ''); // leading whitespace
    span = span.replace(/[ ]*$/, ''); // trailing whitespace
    return text.replace(codeSpanRegex, `<code>${span}</code>`);
}
exports.mdCodeSpans2html = mdCodeSpans2html;
/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
function redden(text) {
    return supports_ansi_1.default ? colorette.red(text) : text;
}
exports.redden = redden;
/**
 * Returns the supplied string as underlined if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
function underline(text) {
    return supports_ansi_1.default ? colorette.underline(text) : text;
}
exports.underline = underline;
/**
 * Returns the supplied string as yellow colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
function yellow(text) {
    return supports_ansi_1.default ? colorette.yellow(text) : text;
}
exports.yellow = yellow;
