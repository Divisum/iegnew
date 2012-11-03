        </div>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
<?php
        print $this->js("www/lib/scripts/js/plugins/plugins.js", NULL, NULL, TRUE);
        print $this->js("www/lib/scripts/js/fittext/jquery.fittext.js", NULL, NULL, TRUE);        
        //print $this->js("www/lib/scripts/js/main/main.js", NULL, NULL, TRUE);
?>        
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>

            jQuery(document).ready(function($){

                /* prepend menu icon */
                $('#main-nav-wrap').prepend('<div id="menu-icon">Menu</div>');
                
                /* toggle nav */
                $("#menu-icon").on("click", function(){
                    $("#main-nav").slideToggle();
                    $(this).toggleClass("active");
                });

            });

            $("#fittext3").fitText(0.8, { minFontSize: 10, maxFontSize: '36px' });

            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>