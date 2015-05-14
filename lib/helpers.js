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

var printListing = function (listing) {
    console.log('%d. %s', listing.id, listing.address);
    console.log(listing.url);
    console.log('');
};

var removeCR = function (s) {
   return s.replace(/\n$/, '');
};

module.exports = {
	searchForListByName : searchForListByName,
	printListing : printListing,
	removeCR : removeCR
};