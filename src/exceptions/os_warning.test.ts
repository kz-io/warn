/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the OSWarning class and its related warning data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';
import { Exception } from '@kz/common-exceptions';

import { OSWarning, Warning } from './mod.ts';

describe('OSWarning', () => {
  const CODE = 73;
  const NAME = 'OSWarning';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new OSWarning('An error occurred.');
    it('should extend the Error, Exception, and Warning class', () => {
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'System degredation has been identified.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new OSWarning(MSG);

    it('should create a new OSWarning instance with the specified message description', () => {
      assertInstanceOf(exc, OSWarning);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });
});
