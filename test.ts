/// <reference path="bundle.d.ts" />

import assert = require('assert');
import is = require('type-is');

assert.equal(is.is('application/json', ['*/json']), 'application/json');
