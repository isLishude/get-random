'use strict'
var random = require('../dist/main')
var chai = require('chai')

var assert = chai.assert

describe('get a random str or num', function () {
    it('get a random str', function () {
        assert.typeOf(random.getStr(), 'string')
        assert.lengthOf(random.getStr(), 6)
        assert.lengthOf(random.getStr(2), 2)
    })

    it('get a random num of given range', function () {
        assert.typeOf(random.getNum(1, 1), 'number')
        assert.equal(random.getNum(1, 1), 1)
    })
})