/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
	var get = function get(url) {
		return new Promise(function (resolve, reject) {
			var request = new XMLHttpRequest();
			request.open("GET", url);

			request.onload = function () {
				if (request.status == 200) {
					// request.overrideMimeType( "image/svg+xml" );
					resolve(request);
				} else reject(Error(request.statusText));
			};
			request.onerror = function () {
				reject(Error("Network Error"));
			};

			request.send();
		});
	};

	// xhr = new XMLHttpRequest();
	// xhr.open("GET", "./images/world.svg", false);
	// xhr.overrideMimeType("image/svg+xml");
	// xhr.send("");

	get('https://rawgit.com/mohseenrm/leet_code/master/world4.svg').then(function (request) {
		document.getElementById("svgContainer").appendChild(request.responseXML.documentElement);
	}, function (error) {
		console.log("Failed to get resource: " + error);
	});

	var $toggle = $('label.toggle'),
	    $svg = $('#svgContainer'),
	    $slider = $('.slider-box');
	$toggle.on('click', function (e) {
		// e.preventDefault();
		$svg.toggleClass('active');
		$slider.toggleClass('active');
	});
})();

/***/ })
/******/ ]);