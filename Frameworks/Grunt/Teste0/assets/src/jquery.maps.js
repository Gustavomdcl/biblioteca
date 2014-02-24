// /!\ =========================== ESTILIZAR O GOOGLE MAPS =========================== /!\

function initialize() {
	//https://developers.google.com/maps/documentation/javascript/styling?hl=pt-br
	//https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br#MapTypeStyleFeatureType
	var styles = [ // ALTERAR INFORMAÇÕES http://software.stadtwerk.org/google_maps_colorizr/#
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [
			{ saturation: 0 }, // /!\ ESTILIZAR O GOOGLE MAPS /!\
		]
	}
];

var lat_total=0;
var long_total=0;

/*// /!\ =========================== CALCULA CENTRO =========================== /!\
var centro_mapa = [];
var lat_total=0;
var long_total=0;
$( ".map-place" ).each(function( i ) {
	//http://stackoverflow.com/questions/15719951/google-maps-api-v3-auto-center-map-with-multiple-markers
	//http://stackoverflow.com/questions/3520810/zoom-and-center-a-google-map-according-to-its-markers-javascript-api-v3
	centro_mapa[i]={
	  lat: $(this).data('lat'),
	  lon: $(this).data('long'),
	};
	//alert(centro_mapa[i].lat);
 });

for(i = 0; i < centro_mapa.length; i++){
	lat_total+=centro_mapa[i].lat;
	long_total+=centro_mapa[i].lon;
}

lat_total=lat_total/centro_mapa.length;
long_total=long_total/centro_mapa.length;
//CALCULA CENTRO*/

// /!\ =========================== INICIALIZAÇÃO DO GOOGLE MAPS =========================== /!\

	var firstPoint = new google.maps.LatLng($("#mark-0").data('lat'), $("#mark-0").data('long'));

  var mapOptions = {
	mapTypeControlOptions: {
		mapTypeIds: [ 'Styled']
	},
    zoom: 13,
    center: firstPoint,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeId: 'Styled',
  };

  var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions,
	  	styles);
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
  map.mapTypes.set('Styled', styledMapType);
  directionsDisplay.setMap(map);

// /!\ =========================== MARCAS NO MAPA =========================== /!\

  $( ".map-place" ).each(function( i ) { // Para cada .map-place ele cria uma marca no mapa.
		//https://developers.google.com/maps/documentation/javascript/markers#add

		//CRIA A MARCA =================================================

		var marker = [];
		marker[i]= new google.maps.Marker({
			position: new google.maps.LatLng($(this).data('lat'), $(this).data('long')),
			map: map,
			animation: google.maps.Animation.DROP,
			icon: 'assets/img/map/map-marker.png'
		});
		// To add the marker to the map, call setMap();
		marker[i].setMap(map);
		//https://developers.google.com/maps/documentation/javascript/events?hl=pt-br

		//EVENTOS DE CLICK ==============================================

		//CENTRALIZA AO CLICAR NA MARCA DENTRO DO MAPS
	  google.maps.event.addListener(marker[i], 'click', function() {
	    map.setZoom(16);
	    map.setCenter(marker[i].getPosition());
	  });

	  //CENTRALIZA AO CLICAR NA DIV FORA DO MAPS
	  var myPlace = document.getElementById('mark-'+i);
	  google.maps.event.addDomListener(myPlace, 'click', function() {
		  map.setZoom(16);
		  map.setCenter(marker[i].getPosition());
		  firstPoint = marker[i].getPosition(); //MUDA O INICIAL DA ROTA
		});

  });

// /!\ =========================== CRIAR ROTA =========================== /!\
//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
//https://developers.google.com/maps/documentation/javascript/examples/directions-simple

	var input = document.getElementById('start');
	//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // VAI PARA O TOPO DO MAPA

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var markerRoute = new google.maps.Marker({
    map: map
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
  	markerRoute.setVisible(false);

    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    markerRoute.setIcon(/** @type {google.maps.Icon} */({
      url: 'assets/img/map/map-marker.png' //ALTERA ICONE INICIAL
    }));

    markerRoute.setPosition(place.geometry.location);
    markerRoute.setVisible(true);

    var start_route = place.geometry.location;
    var end_route = firstPoint;

	  var request = {
	      origin: start_route,
	      destination: end_route,
	      travelMode: google.maps.TravelMode.DRIVING //https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes
	  };
	  directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	    }
	  });

  });
  
}

// /!\ =========================== CARREGA TODO O CÓDIGO =========================== /!\

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'libraries=places&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;