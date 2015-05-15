'use strict';

var utils = require('../lib/utils.js');

var printListing = function (listing, prefix) {
    prefix = prefix || "";

    console.log('%s%d. %s', prefix, listing.id, listing.name);
    console.log(prefix, listing.address);
    console.log(prefix, listing.url);
    console.log('');
};

var walkCards = function (cards, listid, prefix) {
    var i = 1;
    cards.forEach(function(card) {
        if (utils.isCardInList(card, listid)) {
            var url = card.desc;
            var address = utils.parseAddressFromUrl(url);

            printListing(
                utils.createListing(
                    i, url, address, utils.removeCR(card.name)), prefix);

            i++;
        }
    });
};

module.exports = {
    printListing : printListing,
    walkCards : walkCards,
};
