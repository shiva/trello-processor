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

});
