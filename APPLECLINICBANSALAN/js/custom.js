// google map
var map = '';
var center;

function initialize() {
    // Villa Doneza, Bansalan coordinates
    var bansalanLocation = new google.maps.LatLng(6.7879, 125.2060);
    
    var mapOptions = {
      zoom: 16,
      center: bansalanLocation,
      scrollwheel: false,
      styles: [
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [{"weight": "2.00"}]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#9c9c9c"}]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {"saturation": -100},
                {"lightness": 45}
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {"color": "#46bcec"},
                {"visibility": "on"}
            ]
        }
      ]
    };
      
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
      position: bansalanLocation,
      map: map,
      title: 'AppleClinic Bansalan\nVilla Doneza, Bansalan'
    });

    // Add info window
    var infoWindow = new google.maps.InfoWindow({
        content: '<div style="padding: 10px; max-width: 200px;"><h3 style="margin: 0 0 5px; color: #0070B5; font-size: 16px;">AppleClinic Bansalan</h3><p style="margin: 0; font-size: 14px;">Villa Doneza, Bansalan</p><p style="margin: 5px 0 0; font-size: 14px;">Phone: 097-8865116</p></div>'
    });
    
    // Show info window when marker is clicked
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Auto-open info window
    infoWindow.open(map, marker);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmLDqyAk8tSOxQMTVEMsVTJzW8Oc8L3qs&callback=initialize';
    document.body.appendChild(script);
}

// Load map when document is ready
$(document).ready(function() {
    loadGoogleMap();
});

// Flexslider
$(function(){
  /* FlexSlider */
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  new WOW().init();

  loadGoogleMap();
});

// isotope
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) {

      var $container  = $('.iso-box-wrapper'),
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click
      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
      });

      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      });

  }

});

// Hide mobile menu after clicking on a link
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-default a, a,').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 68
            }, 1000);
            event.preventDefault();
        });
    });
