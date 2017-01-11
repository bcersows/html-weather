<?php
/*require_once("./tools/minify/src/Minify.php");
require_once("./tools/minify/src/CSS.php");
require_once("./tools/minify/src/Exception.php");
require_once("./tools/minify/src/JS.php");
require_once './tools/path-converter/src/Converter.php';
require_once("./tools/minify/src/Exceptions/BasicException.php");
require_once("./tools/minify/src/Exceptions/FileImportException.php");
require_once("./tools/minify/src/Exceptions/IOException.php");*/
$path = './tools';
require_once $path . '/minify/src/Minify.php';
require_once $path . '/minify/src/CSS.php';
require_once $path . '/minify/src/JS.php';
require_once $path . '/minify/src/Exception.php';
require_once $path . '/path-converter/src/Converter.php';
use MatthiasMullie\Minify;

$targetFolder = './dist';
$filenames = 'html-weather';

function removeDirectory($path) {
 	$files = glob($path . '/*');
	foreach ($files as $file) {
		is_dir($file) ? removeDirectory($file) : unlink($file);
	}
	rmdir($path);
 	return;
}

removeDirectory($targetFolder);
mkdir($targetFolder);
mkdir($targetFolder."/css");
mkdir($targetFolder."/js");

$cssSourcePath = './css/'.$filenames.'.css';
$cssTargetPath = $targetFolder. '/css/'.$filenames.'.css';
$cssMinifiedPath = './dist/css/'.$filenames.'.min.css';
$jsSourcePath = 'js/'.$filenames.'.js';
$jsTargetPath = './dist/js/'.$filenames.'.js';
$jsMinifiedPath = './dist/js/'.$filenames.'.min.js';

copy($cssSourcePath, $cssTargetPath);
copy($jsSourcePath, $jsTargetPath);

$minifier = new Minify\CSS($cssSourcePath);
$minifier->minify($cssMinifiedPath);

$minifier = new Minify\JS($jsSourcePath);
$minifier->minify($jsMinifiedPath);

// or just output the content
//echo $minifier->minify();