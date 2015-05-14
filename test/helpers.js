'use strict';

var assert = require("assert");
var exec = require('child_process').exec;
var path = require('path');

var helpers = require('../lib/helpers.js');

describe('helpers', function(){

	it('should return list object given the name', function(done) {
		var lists = [];
		
		for (var i = 0; i < 10; i++) {
			var list = { name : "list" + i, value : i};
			lists.push(list);
		}
		
		var found = helpers.searchForListByName(lists, "list3");
		assert(found.name === "list3");
		assert(found.value === 3);
		done();
	});

	it('should remove carriage returns', function(done) {
		var actual = helpers.removeCR("abcefg\n");
		assert(actual === "abcefg");
		actual = helpers.removeCR("abc\nefg\n");
		assert(actual === "abcefg");
		actual = helpers.removeCR("\nabcefg\n");
		assert(actual === "abcefg");
		actual = helpers.removeCR("ab\nce\nfg\n");
		assert(actual === "abcefg");
		
		var actual = helpers.removeCR("abcefg\r");
		assert(actual === "abcefg");
		actual = helpers.removeCR("abc\nefg\r\n");
		assert(actual === "abcefg");
		actual = helpers.removeCR("\nabc\refg\n");
		assert(actual === "abcefg");
		actual = helpers.removeCR("ab\rce\rfg\n");
		assert(actual === "abcefg");
		
		done();
	});
});
