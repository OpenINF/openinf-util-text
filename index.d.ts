/**
 * @license
 * Copyright OpenINF All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://open.inf.is/license
 */
/** @enum {string} */
export declare const UnicodeEscapes: {
    infoSymbol: string;
    midlineEllipsis: string;
    ellipsis: string;
    errorSymbol: string;
    leftDoubleQuotes: string;
    rightDoubleQuotes: string;
    warningSymbol: string;
};
/**
 * Returns the supplied string as blue colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
export declare function blueify(arbitraryString: string): string;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter curly quoted if Unicode is supported.
 */
export declare function curlyQuote(arbitraryStr: string): string;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter ellipsified if Unicode is supported.
 */
export declare function ellipsify(arbitraryStr: string): string;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter italicized if ANSI escapes are supported.
 */
export declare function italicize(arbitraryStr: string): string;
/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
export declare function redden(arbitraryString: string): string;
/**
 * @param {string} arbitraryStr
 * @returns {string} The parameter underlined if ANSI escapes are supported.
 */
export declare function underline(arbitraryStr: string): string;
/**
 * Returns the supplied string as yellow colored if ANSI escapes are supported.
 * @param {string} arbitraryString
 * @returns {string}
 */
export declare function yellow(arbitraryString: string): string;
