/**
 * @packageDocumentation
 *
 * # Leafdata (@voidmerge/leafdata)
 *
 * Leafdata is a human-readable data format similar to JSON or TOML that can
 * encode bigints and byte arrays.
 *
 * - Simple, flexible format makes data obvious for human editing.
 * - Encode public keys along with other configuration data.
 * - Transcode other formats that can contain binary data, such as
 *   Message Pack for logging or debugging.
 * - Natively parses JSON objects.
 *
 * # Example
 *
 * ```bash
 * # This is leafdata!
 *
 * # Wouldn't this be nice : )
 * bugCount = 0
 *
 * # Big Integer? No Biggie.
 * huge = bigint@"9876543210000000000000000"
 *
 * # What about those public key bytes?
 * pubKey = b64@"68KJMg9WmuadUM3dUVdiaXW7898qanhIuvtftFxCPXw="
 *
 * # Or, for more human readable binary data...
 * # Leafdata will pick the smaller of b64@ or pct@ when encoding.
 * myNullSeparatedData = pct@"age%00color%0A42%00red"
 *
 * # We gotz tablez.
 * tab = {
 *   fruit1 = apple
 *   fruit2 = grape
 * }
 *
 * # Wait a sec... that'd be better as an array:
 * fruit = [
 *   apple
 *   grape
 * ]
 * ```
 *
 * ```ts
 * import { leafdataParse, leafdataRender } from '@voidmerge/leafdata`;
 *
 * // Parse
 * const js = leafdataParse(exampleString);
 * ```
 *
 * ```javascript
 * {
 *   bugCount: 0,
 *   huge: 9876543210000000000000000n,
 *   pubKey: ArrayBuffer(),
 *   myNullSeparatedData: ArrayBuffer(),
 *   tab: { fruit1: "apple", fruit2: "grape" },
 *   fruit: [ "apple", "grape" ],
 * }
 * ```
 *
 * ```ts
 * // Render
 * const output = leafdataRender(js);
 * ```
 *
 * # Specification
 *
 * The Antlr4 Lexer and Parser g4 files in this repo are the specification:
 *
 * - [leafdataLexer.g4](leafdataLexer.g4)
 * - [leafdataParser.g4](leafdataParser.g4)
 *
 * Why Antlr4 when there are faster parsers? It is a well recognized format
 * that compiles into many languages. Feel free to write a new, faster parser,
 * just make it compliant with this one.
 *
 * # API Documentation
 */

import * as types from './types.js';
import * as parse from './parse.js';
import * as render from './render.js';

/**
 * Types used by this leafdata library.
 */
export * as types from './types.js';

/**
 * Low-level parsing functions.
 */
export * as parse from './parse.js';

/**
 * Low-level rendering functions.
 */
export * as render from './render.js';

/**
 * Parse a leafdata document string into a Javascript object.
 */
export function leafdataParse(doc: string): types.JsObj {
  return parse.parseTreeToJs(parse.parseStrToTree(doc));
}

/**
 * Render a Javascript object into a leafdata document string.
 *
 * @param obj - the js object to render
 * @param indent - if omitted, the tree will be generated without pretty
 *                 printing to conserve space. If specified, the content
 *                 will be pretty printed for humans.
 */
export function leafdataRender(obj: types.JsObj, indent?: string): string {
  return render.renderTreeToStr(render.renderJsToTree(obj, indent));
}
