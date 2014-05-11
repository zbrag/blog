$(document).ready(function() {

    // refactoren naar een aanroepbaar bestand, we moeten de huidige pagina meegeven!
    var val = JSON.parse(sessionStorage.getItem('searchPath'));

    if (val)
    {
        console.log(val);
        var current = null;
        var previous = null;
        var next = null;
        $.each(val,function(key,value){

            if(value == "/page.php?pageId=7")
            {
                current = value;
            }
            else if(current != null && previous != null && next == null)
            {
                next = value;
            }

            if(current == null)
            {
                previous = value;
            }


        });
        // Debug:
        // console.log('current == ' + current + ', previous == ' + previous + ',next == ' + next);
    }
});