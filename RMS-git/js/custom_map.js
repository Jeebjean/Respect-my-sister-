(function ($) {
    "use strict";
    var center = [45.772323, -122.214897];
    $('#map')
        .gmap3({
            zoom: 10,
            center: center,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        })
        .styledmaptype(
            "shadeOfGrey",
            [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 0
                    }, {
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "visibility": "off"
                    }, {
                        "lightness": 16
                    }]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }, {
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#e0dfe0"
                    }, {
                        "lightness": 20
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#e0dfe0"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e0dfe0"
                    }, {
                        "lightness": 20
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#a8a9a8"
                    }, {
                        "lightness": 21
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#595958"
                    }, {
                        "lightness": 17
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#5b5b5a"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#5b5b5a"
                    }, {
                        "lightness": 18
                    }, {
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#5b5b5a"
                    }, {
                        "lightness": 16
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }
            ], {
                name: "Shades of Grey"
            }
        )
        .marker({
            position: center,
            icon: 'https://maps.google.com/mapfiles/marker_green.png'
        });
}(jQuery));