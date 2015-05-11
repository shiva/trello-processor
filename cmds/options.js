module.exports = function (program) {
  'use strict';
  
  program
    .option('-i, --input [file]', 'input json file exported from trello')
    .option('-o, --output [file]', 'output file to write to')
    ;

};