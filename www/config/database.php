<?php
/* ex: set tabstop=2 noexpandtab: */
/**
 * Access from index.php:
 */
if(!defined("_access")) {
	die("Error: You don't have permission to access here...");
}

/**
 *	SQL Databases
 */
$ZP["db"]["dbPDO"] 	  = TRUE;
$ZP["db"]["dbDriver"] = "mysqli";

/*
 *	SQL Localhost 
*/
$ZP["db"]["dbHost"]   = "localhost";
$ZP["db"]["dbUser"]   = "root";
$ZP["db"]["dbPwd"] 	  = "root";
$ZP["db"]["dbName"]   = "porgracia"; 

$ZP["db"]["dbPort"]   = 3306;
$ZP["db"]["dbPfx"] 	  = "porgracia_";
$ZP["db"]["dbSocket"] = NULL;


/**
 *	SQLite Databases
 */
$ZP["db"]["dbFilename"] = "mydatabase.db";
$ZP["db"]["dbMode"]	    = 0666;
	
/**
 *	NoSQL Databases
 */
$ZP["db"]["dbNoSQLHost"]  	 = "localhost";
$ZP["db"]["dbNoSQLPort"] 	 = 27017;
$ZP["db"]["dbNoSQLUser"] 	 = ""; 
$ZP["db"]["dbNoSQLPwd"]  	 = "";
$ZP["db"]["dbNoSQLDatabase"] = "";