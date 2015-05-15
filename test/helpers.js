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

	it('should create listing', function(done) {
		var listing = helpers.createListing("a", "b", "c", "d");
		assert(listing.id === "a");
		assert(listing.url === "b");
		assert(listing.address === "c");
		assert(listing.name === "d");

		done();
	});

	it('should find card in list', function(done) {
		var card = {};
		card.closed = false;
		card.idList = "001";

		assert(helpers.isCardInList(card, "001"));
		done();
	});

	it('should not find closed card', function(done) {
		var card = {};
		card.closed = true;
		card.idList = "001";

		assert(!helpers.isCardInList(card, "001"));
		done();
	});
});
