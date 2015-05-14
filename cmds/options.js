module.exports = function (program) {
    'use strict';

    var default_input = __dirname + '/../etc/kgNOzO2Y.json';

    program
        .option('-i, --input [file]',
                'input json file exported from trello [etc/kgNOzO2Y.json]',
                String, default_input)
        .option('-o, --output [file]', 'output file to write to')
        ;

};
