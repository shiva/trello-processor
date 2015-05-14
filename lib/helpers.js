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

module.exports = {
	searchForListByName : searchForListByName,
	removeCR : removeCR
};