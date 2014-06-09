$(document).ready(function() {

    var val = JSON.parse(sessionStorage.getItem('searchPath'));

    if (val) {
        var current = null;
        var previous = null;
        var next = null;
        var showSearchPath = false;
        var pageid = $('body div').data('pageid');
        var searchPathelement = $('#searchPath');
        $.each(val, function (key, value) {

            if (value == pageid) {
                current = value;
            }
            else if (current != null && previous != null && next == null) {
                // we found the value for 'next'
                next = value;

            }

            if (current == null) {
                // because previous is the one /before/ current, we always set this one, until current is found
                previous = value;
            }

        });

        // If previous is found we want to show it, and also show the #searchPath element.
        if (previous) {
            searchPathelement.find('.prev').attr('href', previous);
            searchPathelement.find('.prev').show();
            showSearchPath = true;
        }

        // If next is found we want to show it, and also the #searchPath element
        if (next) {
            searchPathelement.find('.next').attr('href', next);
            searchPathelement.find('.next').show();
            showSearchPath = true;
        }

        // So if we have prev or next links, we want to show the block
        if (showSearchPath) {
            searchPathelement.show();
        }
        // Debug:
        // console.log('current == ' + current + ', previous == ' + previous + ',next == ' + next);
    }
});