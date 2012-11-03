<?php
/**
 * Access from index.php:
 */
if(!defined("_access")) {
	die("Error: You don't have permission to access here...");
}

$routes = array(
	0 => array(
			"pattern"	  => "/^guest-lists/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "page",
			"params" 	  => array("guest-lists")
	),
	1 => array(
			"pattern"	  => "/^clubs/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "page",
			"params"      => array("clubs")
	),
	2 => array(
			"pattern"	  => "/^tickets/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "page",
			"params"      => array("tickets")
	),
	3 => array(
			"pattern"	  => "/^mesas-vip/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "page",
			"params"      => array("mesas-vip")
	),
	4 => array(
			"pattern"	  => "/^contacto/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "page",
			"params"      => array("contacto")
	),
	5 => array(
			"pattern"	  => "/^club/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "club",
			"params"      => array(segment(1),segment(2))
	),
	6 => array(
			"pattern"	  => "/^stepchecker/",
			"application" => "ways",
			"controller"  => "ways",
			"method"	  => "stepchecker",
			"params" 	  => array(segment(1),segment(2))
	),
	7 => array(
			"pattern"	  => "/^register/",
			"application" => "users",
			"controller"  => "users",
			"method"	  => "register",
			"params" 	  => array("register")
	),
	8 => array(
			"pattern"	  => "/^facebookfill/",
			"application" => "users",
			"controller"  => "users",
			"method"	  => "facebookfill",
			"params" 	  => array("facebookfill")
	),
	9 => array(
			"pattern"	  => "/^quienes/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "quienes",
			"params" 	  => array("quienes")
	),
	10 => array(
			"pattern"	  => "/^buscador/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "buscador",
			"params" 	  => array(segment(1))
	),
	11 => array(
			"pattern"	  => "/^organiza/",
			"application" => "pages",
			"controller"  => "pages",
			"method"	  => "organiza",
			"params" 	  => array("organiza")
	),
	12 => array(
			"pattern"	  => "/^checkuser/",
			"application" => "users",
			"controller"  => "users",
			"method"	  => "checkuser",
			"params" 	  => array("checkuser")
	),
	13 => array(
			"pattern"	  => "/^registration/",
			"application" => "users",
			"controller"  => "users",
			"method"	  => "registration",
			"params" 	  => array(segment(1),segment(2))
	),	
);