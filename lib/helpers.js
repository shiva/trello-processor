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
    if (typeof s != 'string') {
        return false;
    }

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

var parseAddressFromUrl = function (url) {
    if (typeof url != 'string') {
        return ;
    }

    var part1 = url.split('/')[5];
    var address;
    if (part1) {
        address = part1.split('?')[0];
    }

    return address;
}

var walkCards = function (cards, listid, prefix) {
    var i = 1;
    cards.forEach(function(card) {
        if (isCardInList(card, listid)) {
            var url = card.desc;
            var address = parseAddressFromUrl(url);

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
    walkCards : walkCards,
    parseAddressFromUrl : parseAddressFromUrl
};
