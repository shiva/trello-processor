/* update-card commander component
 * To use add require('../cmds/update-card.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('update-card')
		.version('0.0.1')
		.description('Update a card on trello by parsing the desc')
		.action(function(/* Args here */){
			// Your code goes here
		});
	
};