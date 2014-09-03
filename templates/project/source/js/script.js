$(document).ready(function() { 

    (function ($) { 
        $('.searh-tab ul').find('> li:eq(0)').addClass('active');
        
        $('.searh-tab ul li a').click(function (g) { 
            var tab = $(this).closest('.search-utility'),
                index = $(this).closest('li').index();
            
            tab.find('ul > li').removeClass('active');
            $(this).closest('li').addClass('active');
            
            tab.find('.searh-content').find('.tabs_item').not('.tabs_item:eq(' + index + ')').slideUp(300);
            tab.find('.searh-content').find('.tabs_item:eq(' + index + ')').slideDown(300);
            
            g.preventDefault();
        } );
    })(jQuery);

});