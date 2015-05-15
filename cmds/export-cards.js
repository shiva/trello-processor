/* export-cards commander component
* To use add require('../cmds/export-cards.js')(program) to your commander.js based node executable before program.parse
*/
'use strict';

var fs = require('fs');
var helpers = require('../lib/helpers.js');

module.exports = function(program) {

    program
    .command('export-cards <listname>')
    .version('0.0.1')
    .description('export-cards from trello json file')
    .action(function(listname) {

        fs.readFile(program.input, 'utf8', function (err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            data = JSON.parse(data);

            // filter and print
            var doingList = helpers.searchForListByName(data.lists, listname);
            if (!doingList) {
                console.error('Cannot find list : ', listname);
                process.exit(1);
            }

            helpers.walkCards(data.cards, doingList.id);
        });
    });
};
