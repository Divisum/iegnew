<?php 
	if(!defined("_access")) {
		die("Error: You don't have permission to access here..."); 
	}	
	$this->load(isset($view) ? $view : NULL, TRUE);
?>