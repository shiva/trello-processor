/* export-cards commander component
 * To use add require('../cmds/export-cards.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

var fs = require('fs');
var file = __dirname + '/../etc/kgNOzO2Y.json';
var helpers = require('../lib/helpers.js');

var printListing = function (listing) {
    console.log('%d. %s', listing.id, listing.address);
    console.log(listing.url);
    console.log('');
};

module.exports = function(program) {

	program
		.command('export-cards <listname>')
		.version('0.0.1')
		.description('export-cards from trello json file')
		.action(function(listname) {

            if (program.input) {
                file = program.input;
            }
            
            fs.readFile(file, 'utf8', function (err, data) {
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

              var i = 1;
              data.cards.forEach(function(card) {
                  // for active cards in list, create listing object, and print
                  if ((!card.closed) && (card.idList === doingList.id)) {
                      var listing = {};
                      listing.id = i;
                      listing.url = card.desc;
                      listing.address = helpers.removeCR(card.name);

                      printListing(listing);
                      
                      i++;
                  }
              });
            });
		});
};