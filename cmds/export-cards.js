/* export-cards commander component
 * To use add require('../cmds/export-cards.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

var fs = require('fs');
var file = __dirname + '/../etc/kgNOzO2Y.json';

function replacer(key, value) {
    //console.log("key= ", key);
    if (!key) {
        return value;
    }

    //if (["id", "desc", "idList", "name"].indexOf(key) <= -1) {
    if (["desc", "name"].indexOf(key) <= -1) {
        return undefined;
    }
    return value;
}

function getListByName(lists, name) {
    var ret;

    lists.forEach(function(list) {
        console.log("hello: ", list.name);

        if (list.name === name) {
            ret = list;
        }
    });
    return ret;
}

module.exports = function(program) {

	program
		.command('export-cards')
		.version('0.0.1')
		.description('export-cards from trello json file')
		.action(function(/* Args here */){

            fs.readFile(file, 'utf8', function (err, data) {
              if (err) {
                  console.log('Error: ' + err);
                  return;
                }
            
              data = JSON.parse(data);

              // filter and print
              var doingList = getListByName(data['lists'], "Doing");
              //console.log("List: ", doingList);
              //console.log("Cards in Doing: ", JSON.stringify(data['cards'], null, 2));
              //console.log("Cards in Doing: " );
              var i = 1;
              data['cards'].forEach(function(card) {
                  if (card.idList === doingList.id) {
                      //console.log(JSON.stringify(card, replacer, 2));
                      var listing = {};
                      listing.url = card.desc;
                      listing.address = card.name;

                      console.log("%d. %s", i, listing.address.replace(/\n$/, ''));
                      console.log(listing.url);
                      console.log("");
                      i++;

                  }
              });
            });
		});
	
};
