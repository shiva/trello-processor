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

module.exports = {
    searchForListByName : searchForListByName,
    removeCR : removeCR,
    createListing : createListing,
    isCardInList : isCardInList,
    parseAddressFromUrl : parseAddressFromUrl
};
