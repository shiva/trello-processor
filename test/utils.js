'use strict';

var assert = require("assert");
var exec = require('child_process').exec;
var path = require('path');

var utils = require('../lib/utils.js');

describe('utils', function(){

	it('should return list object given the name', function(done) {
		var lists = [];

		for (var i = 0; i < 10; i++) {
			var list = { name : "list" + i, value : i};
			lists.push(list);
		}

		var found = utils.searchForListByName(lists, "list3");
		assert(found.name === "list3");
		assert(found.value === 3);
		done();
	});

	it('should remove carriage returns', function(done) {
		var actual = utils.removeCR("abcefg\n");
		assert(actual === "abcefg");
		actual = utils.removeCR("abc\nefg\n");
		assert(actual === "abcefg");
		actual = utils.removeCR("\nabcefg\n");
		assert(actual === "abcefg");
		actual = utils.removeCR("ab\nce\nfg\n");
		assert(actual === "abcefg");

		var actual = utils.removeCR("abcefg\r");
		assert(actual === "abcefg");
		actual = utils.removeCR("abc\nefg\r\n");
		assert(actual === "abcefg");
		actual = utils.removeCR("\nabc\refg\n");
		assert(actual === "abcefg");
		actual = utils.removeCR("ab\rce\rfg\n");
		assert(actual === "abcefg");

		done();
	});

	it('should create listing', function(done) {
		var listing = utils.createListing("a", "b", "c", "d");
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

		assert(utils.isCardInList(card, "001"));
		done();
	});

	it('should not find closed card', function(done) {
		var card = {};
		card.closed = true;
		card.idList = "001";

		assert(!utils.isCardInList(card, "001"));
		done();
	});

	it('should parse address from url', function(done) {
		var url = "http://www.rew.ca/properties/V1122665/206-1035-auckland-street-new-westminster?utm_campaign=propertyalert&utm_medium=email&utm_source=propertyalert";
		var exp_address = "206-1035-auckland-street-new-westminster";
		var address = utils.parseAddressFromUrl(url);

		assert(exp_address === address);
		done();
	});


	it('should fail parsing address from url', function(done) {
		var url = "http://www.rew.rties/V1122665/206-1035-auckland-street-new-westminster?utm_campaign=propertyalert&utm_medium=email&utm_source=propertyalert";
		var exp_address = "206-1035-auckland-street-new-westminster";
		var address = utils.parseAddressFromUrl(url);

		assert(exp_address !== address);
		done();
	});
});
