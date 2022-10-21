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
 * @param {string} text
 * @returns {string}
 */
export declare function blueify(text: string): string;
/**
 * Returns the supplied string as cyan colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export declare function cyanify(text: string): string;
/**
 * Returns the supplied string as curly quoted if Unicode is supported.
 * @param {string} text
 * @returns {string}
 */
export declare function curlyQuote(text: string): string;
/**
 * Returns the supplied string as ellipsified if Unicode is supported.
 * @param {string} text
 * @returns {string}
 */
export declare function ellipsify(text: string): string;
/**
 * Returns the supplied string as italicized if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export declare function italicize(text: string): string;
/**
 * Processes the supplied string by transforming any Markdown backtick code
 * spans (begining and ending with a single backtack) into HTML code elements.
 * @param {string} text
 * @returns {string}
 */
export declare function mdCodeSpans2html(text: string): string;
/**
 * Returns the supplied string as red colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export declare function redden(text: string): string;
/**
 * Returns the supplied string as underlined if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export declare function underline(text: string): string;
/**
 * Returns the supplied string as yellow colored if ANSI escapes are supported.
 * @param {string} text
 * @returns {string}
 */
export declare function yellow(text: string): string;
