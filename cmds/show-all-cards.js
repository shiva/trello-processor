/* show-all-cards commander component
 * To use add require('../cmds/show-all-cards.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

var fs = require('fs');
var helpers = require('../lib/helpers.js');

module.exports = function(program) {

	program
		.command('show-all-cards')
		.version('0.0.1')
		.description('Display all cards in all lists')
		.action(function(/* Args here */){

	    fs.readFile(program.input, 'utf8', function (err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            data = JSON.parse(data);

			var i = 1;
			data.lists.forEach(function(list) {
				console.log('%d. %s', i, list.name);
				i++;
				helpers.walkCards(data.cards, list.id, "  ");
			});
		});
	});
}
