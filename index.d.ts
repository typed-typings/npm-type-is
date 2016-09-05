import { IncomingMessage } from 'http';

/**
 * Each type can be:
 *
 * - An extension name such as `json`. This name will be returned if matched.
 * - A mime type such as `application/json`.
 * - A mime type with a wildcard such as `*\/*` or `*\/json` or `application\/*`. The full mime type will be returned if matched.
 * - A suffix such as `+json`. This can be combined with a wildcard such as `*\/vnd+json` or `application/*+json`. The full mime type will be returned if matched.
 *
 * `false` will be returned if no type matches or the content type is invalid.
 *
 * `null` will be returned if the request does not have a body.
 */
declare function is (request: IncomingMessage, types: string[]): string | boolean;

declare namespace is {
  /**
   * Having a body has no relation to how large the body is (it may be 0 bytes). This is similar to how file existence works. If a body does exist, then this indicates that there is data to read from the Node.js request stream.
   */
  export function hasBody (request: IncomingMessage): boolean;

  export function is (mediaType: string, types: string[]): string;
}

export = is;
