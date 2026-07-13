/**
 * @packageDocumentation
 *
 * Leafdata is yet another human-readable data format similar to JSON or TOML.
 *
 * I was tired of not being able to represent big integers and binary data.
 *
 * Why would you want binary data in a human-readable text format, you ask?
 *
 * It just comes up sometimes. Like wanting to store cryptographic public keys
 * along-side other configuration data. Or if you are wanting to debug a format
 * that can have binary data in it, such as MessagePack.
 *
 * # Example
 *
 * ```sh
 * # This is Leaf Data!
 *
 * # Wouldn't this be nice : )
 * bugCount = 0
 *
 * # Big Integer? No Biggie.
 * huge = n@"9876543210000000000000000"
 *
 * # What about those public key bytes?
 * pubKey = B@"68KJMg9WmuadUM3dUVdiaXW7898qanhIuvtftFxCPXw="
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
 * import { leafdataParse, leafdataRender } from '@leaf/leafdata`;
 *
 * const js = leafdataParse(exampleString);
 *
 * // - the value of 'js':
 * //
 * // {
 * //   bugCount: 0,
 * //   huge: 9876543210000000000000000n,
 * //   pubKey: < ArrayBuffer >,
 * //   tab: { fruit1: "apple", fruit2: "grape" },
 * //   fruit: [ "apple", "grape" ],
 * // }
 *
 * // Then, turn it back into a string:
 *
 * const output = leafdataRender(js);
 * ```
 *
 * # Specification
 *
 * The Antlr4 Lexer and Parser g4 files in this repo are the specification:
 *
 * - [leafdataLexer.g4](leafdataLexer.g4)
 * - [leafdataParser.g4](leafdataParser.g4);
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
