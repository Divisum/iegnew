<?php 
	if(!defined("_access")) {
		die("Error: You don't have permission to access here..."); 
	}
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
       	<title><?php print $this->getTitle(); ?></title>
        <meta name="description" content="">
        <!-- <meta name="viewport" content="width=device-width"> -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="<?php print $this->themePath; ?>/css/normalize.css">
        <link rel="stylesheet" href="<?php print $this->themePath; ?>/css/fonts.css">
        <link rel="stylesheet" href="<?php print $this->themePath; ?>/css/main.css">        
<?php   
        print $this->getCSS(); 
        print $this->js("www/lib/scripts/js/modernizr/modernizr-2.6.1.min.js", NULL, NULL, TRUE);
?>
    </head>
    <body>
    	<div class="green-top-line"></div>
    	<div id="wrapper">
            <header class="main-header">
                <h1>
                    <?php print __(_("Iglesia Evangélica de la Gracia")); ?>
                </h1>

                <nav class="top-nav">
                    <ul>                    
                        <li class="flags">
                            <?php 
                                $attributes = array("alt" => "foo"); ; 
                                print img(get("webURL") . "/www/lib/images/flags/spain.gif",   $attributes); 
                                print img(get("webURL") . "/www/lib/images/flags/catalan.gif", $attributes); 
                                print img(get("webURL") . "/www/lib/images/flags/english.gif", $attributes); 
                            ?>
                        </li>
                        <li class="followus"><?php print __(_("Síguenos en:")) . ' ' . img(get("webURL") . "/www/lib/images/social/vimeo.png", "") .  ' ' . img(get("webURL") . "/www/lib/images/social/facebook.png", ""); ?></li>
                    </uL>
                </nav>    
                <nav class="main-nav">
                    <ul>
                        <li><?php print __(_("home")); ?></li>
                        <li><?php print __(_("nosotros")); ?></li>
                        <li class="main-nav-selected"><?php print __(_("sermones")); ?></li>
                        <li><?php print __(_("ministerios")); ?></li>
                        <li><?php print __(_("recursos")); ?></li>
                        <li><?php print __(_("contacto")); ?></li>
                        <li><?php print __(_("enlaces")); ?></li>
                        <li><?php print __(_("blog")); ?></li>
                    </ul>
                </nav>
            </header>