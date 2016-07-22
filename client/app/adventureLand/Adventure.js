angular.module('sqrtl.adventure', ["ngTouch"])

.controller('AdventureController', function($scope, $location, Adventures, $window) {
  // var businessName;
  // var distance;
  // var reviewCount;
  // var ratings;
  // var ratingsImage;
  // var businessImage;
  // var description;
  var getDistance = function(){
    var long1 = window.localStorage.getItem('longitude'),
        lat1 = window.localStorage.getItem('latitude'),
        long2 = window.localStorage.getItem('data');
        // lat2 = window.localStorage.getItem('data').location.latitude
    console.log(long1, lat1, long2, lat2);
  }

  $scope.data = JSON.parse(window.localStorage.getItem('data'))[0];

  $scope.distance = getDistance();

  console.log($scope.data);

  $scope.getNew = function(){
    Adventures.dataShift();
    $scope.data = JSON.parse(window.localStorage.getItem('data'))[0];
  };

  $scope.getUber = function(location){
    console.log("location coords ", location);
    window.localStorage.setItem('latitude', location.latitude.toString());
    window.localStorage.setItem('longitude', location.longitude.toString());
    Adventures.getUber()
    .then(function(response){
      console.log("redirect URL ", response);
      $window.location.href = response;
    });
  };

  $scope.address = {
    long: $scope.data.location.coordinate.longitude,
    lat: $scope.data.location.coordinate.latitude,
    templateUrl: 'http://maps.google.com/maps?q=' + $scope.data.location.coordinate.latitude + ',' + $scope.data.location.coordinate.longitude
  };

  $scope.googleRedirect = function(){
    console.log($scope.address.templateUrl);
    $window.location.href = $scope.address.templateUrl;
  };
  //http://maps.google.com/maps?q=24.197611,120.780512






});



