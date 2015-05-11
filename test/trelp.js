'use strict';

var assert = require("assert");
var exec = require('child_process').exec;
var path = require('path');

describe('trelp bin', function(){
	var cmd = 'node '+path.join(__dirname, '../bin/trelp')+' ';
	console.log(cmd);

	it('--help should run without errors', function(done) {
		exec(cmd+'--help', function (error, stdout, stderr) {
			assert(!error);
			done();
		});
	});

	it('--version should run without errors', function(done) {
		exec(cmd+'--version', function (error, stdout, stderr) {
			assert(!error);
			done();
		});
	});

	it('should return error on missing command', function(done) {
        this.timeout(4000);

		exec(cmd, function (error, stdout, stderr) {
			assert(error);
			assert.equal(error.code,1);
			done();
		});

	});

	it('should return error on unknown command', function(done) {
        this.timeout(4000);

		exec(cmd+'junkcmd', function (error, stdout, stderr) {
			assert(error);
			assert.equal(error.code,1);
			done();
		});
	});
});

describe('export-cards', function() {
	var cmd = 'node '+path.join(__dirname, '../bin/trelp')+' ';
	console.log(cmd);
	
	before(function () {
		exec('mkdir tmp');
		exec(cmd+' --input etc/test1.json export-cards "Doing" > tmp/output.txt');
	});
    it('should match expected output for test1.json', function(done) {
		
		exec('diff etc/test1.expected tmp/output.txt', 
			function (error, stdout, stderr) {
				assert(error);
				assert.equal(error.code,1);
				done();
			});
    });
	
	after(function () {
		exec('rm -rf tmp/');
	});
	
});
