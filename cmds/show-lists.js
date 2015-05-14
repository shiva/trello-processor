/* show-lists commander component
* To use add require('../cmds/show-lists.js')(program) to your commander.js based node executable before program.parse
*/
'use strict';

var fs = require('fs');

module.exports = function(program) {

	program
	.command('show-lists')
	.version('0.0.1')
	.description('Display available lists.')
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
			});
		});
	});

};
