angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('whatService', [ '$http',  function($http){
    function getMap(words, onSuccess, onError) {
        $http.get( 'https://api.what3words.com/v2/forward?addr=' + words + '&display=full&format=json&key=F2IAE51Q' )
              .then(function (response) {
                  onSuccess(response);
              })
              .catch(function (data, status, headers, config) {
                  onError(data, status, headers,config);
                  console.log("Service error: " + data + status + headers + config);
              });
      }

      function getWord(lng, lat, onSuccess, onError) {
        $http.get('https://api.what3words.com/v2/reverse?coords=' + lng + ', ' + lat + '&display=full&format=json&key=F2IAE51Q')
              .then(function (response) {
                  onSuccess(response);
              })
              .catch(function (data, status, headers, config) {
                  onError(data, status, headers,config);
                  console.log("Service error: " + data + status + headers + config);
              });
      }

      return {
        getMap: getMap,
        getWord: getWord
    };
}])

.service('mapService', [ function() {

    

    function initMap(locations) {


                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 13,
                  center: {lat: 47.9115959, lng: 106.9082479}
                });
        
                // Create an array of alphabetical characters used to label the markers.
                var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
                // Add some markers to the map.
                // Note: The code uses the JavaScript Array.prototype.map() method to
                // create an array of markers based on a given "locations" array.
                // The map() method here has nothing to do with the Google Maps API.
                var markers = locations.map(function(location, i) {
                  return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                  });
                });
        
                // Add a marker clusterer to manage the markers.
                var markerCluster = new MarkerClusterer(map, markers,
                    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
              }
              

              return {
                initMap: initMap
            };
}])

.service('signupService', [ '$http', function($http){

	function register(user) {
        
        var APIurl = 'http://localhost:3001/api/users';
         var apiData = {
         	role_id: 1,
            e_mail: user.email,
            username : user.name,
            password: user.password
        }
     
 		 $http.post( APIurl, apiData )
        .then(function (response) {
            console.log(response);
            if( response.status == 200){
                    window.location.href = '#/page1/home.html';
            }
            else{
                alert("Username or password is exist, please try another name!");
            }
        });
      }
      return {
        register: register
    };

}])

.service('loginService', [ '$http', function($http){

	function check(user) {
		console.log(user);
        var APIdata = '{%22e_mail%22:%22' + user.email + '%22, %22password%22:%22' + user.password + '%22}}'; 
        alert(APIdata); 
        var APIurl = "http://localhost:3001/api/users?filter={%22where%22:" + APIdata;
        
        $http.get( APIurl )
            .then(function (response) {
                alert("Success");
                // alert(JSON.stringify(response.data[0].password));
                console.log(response);
                if( response.status == 200){
                    window.location.href = '#/page1/home.html';
                }
                else{
                    alert("Username or password is not correct!");
                }
            })
            .catch(function (data, status, headers, config) {
                alert("Error");
            });
      }
    return {
        check: check
    };

}])
;
