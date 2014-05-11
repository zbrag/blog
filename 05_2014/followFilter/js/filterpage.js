filterPage = {
    selectors:{
        pageLink: '.pageLink'
    },
    onReady: function()
    {
        $(filterPage.selectors.pageLink).on('click',filterPage.followFilter);
    },
    followFilter : function(e)
    {
        var selectedNode = $(this);
        var arrayOfLinks = [];
        var currentNode = false;
        $(filterPage.selectors.pageLink).each(function(){
            if($(this).parent().data('url') == selectedNode.parent().data('url')){
                currentNode = true;
            }
            else{
                currentNode = false;
            }
            arrayOfLinks.push($(this).parent().data('url'));
        });
        sessionStorage.setItem('searchPath', JSON.stringify(arrayOfLinks));
    }
};

$(document).ready(function(){filterPage.onReady()});