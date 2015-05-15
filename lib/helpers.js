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

    console.log('%s%d. %s', prefix, listing.id, listing.address);
    console.log(prefix, listing.url);
    console.log('');
};

var createListing = function (id, url, address) {
    return {id : id, url : url,  address : address};

}

var isCardInList = function (card, listname) {
    return ((!card.closed) && (card.idList === listname));
}

var walkCards = function (cards, listid, prefix) {
    var i = 1;
    cards.forEach(function(card) {
        if (isCardInList(card, listid)) {
            printListing(
                createListing(
                    i, card.desc, removeCR(card.name)), prefix);

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
