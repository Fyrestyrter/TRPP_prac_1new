jQuery(document).ready(function(){
    jQuery('li a[href^="#"]').click( function(){
        var scroll_el = jQuery(this).attr('href');
        var destination = jQuery(scroll_el).offset().top;
        if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate( { scrollTop: destination }, 600 );
        }
        return false;
    });
})