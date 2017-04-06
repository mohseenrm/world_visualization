'use strict';

(() => {
	const get = (url) => {
		return new Promise( ( resolve, reject ) => {
			let request = new XMLHttpRequest();
			request.open( "GET", url );

			request.onload = () => {
				if( request.status == 200 ){
					request.ovverrideMimeType( "image/svg+xml" );
					resolve( request );
				}
				else
					reject( Error( request.statusText ) );
			};
			request.onerror = () => {
				reject( Error( "Network Error" ) );
			};

			request.send();
		} );
	};

	// xhr = new XMLHttpRequest();
	// xhr.open("GET", "./images/world.svg", false);
	// xhr.overrideMimeType("image/svg+xml");
	// xhr.send("");

	get('images/world.svg').then( ( request ) => {
		document.getElementById( "svgContainer" )
				.appendChild( request.responseXML.documentElement );
	}, ( error ) => {
		console.log(`Failed to get resource: ${error}`);
	} );

})();