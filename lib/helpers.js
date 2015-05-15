'use strict';

var searchForListByName = function(lists, name) {
    var ret;

    lists.forEach(function(list) {
        if (list.name === name) {
            ret = list;
        }
    });
    return ret;
};

var removeCR = function (s) {
    return s.replace(/[\n\r]+/g, '');
};

var printListing = function (listing, prefix) {
    prefix = prefix || "";

    console.log('%s%d. %s', prefix, listing.id, listing.name);
    console.log(prefix, listing.address);
    console.log(prefix, listing.url);
    console.log('');
};

var createListing = function (id, url, address, name) {
    return {id : id, url : url,  address : address, name : name};

}

var isCardInList = function (card, listname) {
    return ((!card.closed) && (card.idList === listname));
}

var walkCards = function (cards, listid, prefix) {
    var i = 1;
    cards.forEach(function(card) {
        if (isCardInList(card, listid)) {
            var url = card.desc;
            var part1 = url.split('/')[5];
            var address = part1.split('?')[0];

            printListing(
                createListing(
                    i, url, address, removeCR(card.name)), prefix);

            i++;
        }
    });
}

module.exports = {
    searchForListByName : searchForListByName,
    removeCR : removeCR,
    printListing : printListing,
    createListing : createListing,
    isCardInList : isCardInList,
    walkCards : walkCards
};
