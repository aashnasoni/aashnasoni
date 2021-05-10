
   
        'use strict';
        jQuery(document).ready(function($){
            
            $('[data-toggle="popover"]').popover({
            container: 'section.map'
          });
            $("#showPop").popover('show');
         
            $('body').on('click', function (e) {
                $('[data-toggle="popover"]').each(function () {
                   
                    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                        $(this).popover('hide');
                
                    }
                });
            });
        
        });
