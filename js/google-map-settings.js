
/* Custom Google Map Settings */

jQuery(function($) { 'use strict';


$(document).ready(function() {
        
        
        // Google Map

        function initMap() {

        var location = new google.maps.LatLng(40.741895, -73.989308); // Replace the location (Latitude, Longitude). It will get from here 'http://www.gps-coordinates.net/'.

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 5,  // Up to 22 
            panControl: false,
            scrollwheel: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP  
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: 'images/googlemap/marker.png', // Custom Marker
        });

        var contentString = '<div class="info-window text-left">' +
                '<h5 class="small">Name</h5>' + // Content Header
                '<div class="info-content">' +
                '<p class="small">Address</p>' + // Content
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
            return false;
        });

        
          var styles = [
            {
                "stylers": [
                    {
                        "hue": "#ff1a00"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 33
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2D333C"
                    }
                ]
            }
        ] 

        // Get more custom Google Map background design in here 'https://snazzymaps.com/'.

        map.set('styles', styles);

        }

        google.maps.event.addDomListener(window, 'load', initMap);
    });

});


//////////////////////////////////////////////////////////////////////
