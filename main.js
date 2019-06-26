var anim = lottie.loadAnimation({
        container: document.getElementById('preloading'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        speed:'500ms',
        path: 'https://assets1.lottiefiles.com/packages/lf20_eplUpj.json'});
        anim.setSpeed(1.5);
        ////////////
  
// the api provider url
var apiurl = "https://courier-api.tk/api/collections/get/orders?filter[id]="

//setting up our app
var app = angular.module('mainApp', []);
app.controller('mainCtrl', function($scope, $timeout, $http){
// the main rules
  $scope.dataLoading = true;
  $scope.dataLoaded = false;
  $scope.errorInput = false;
  $scope.trueInput = true;
  $scope.trackingCard = false;
  $scope.mainContent = true;
  $scope.trackingData = false;
  $scope.trackingDataLoader = true;
  
  $scope.getData = function(isValid){
   if (isValid) {
      //if the input data true then setting the rules
      $scope.trackingCard = true;
      $scope.trackingData = true;
   $scope.mainContent = $scope.mainContent = false;
    $scope.errorInput = $scope.errorInput = false;
    $scope.trueInput = $scope.trueInput = true;
     //after that let's being getting the data
    $http.get(apiurl + $scope.tracking).then(function successCallback(response){
      $scope.apitotal = response.data.total
      $scope.apiresponse = response.status
      $scope.jsondata = response.data.entries[0];
      console.log($scope.jsondata.status.length);
    })
    }
    //if input data are false 
   else{
    $scope.errorInput = $scope.errorInput = true;
    $scope.trueInput = $scope.trueInput = false;
    
   }
   
  }
  //page preload rules
  $timeout(function(){
    $scope.dataLoading = false;
    $scope.dataloaded = true;
  }, 3000);
    

});
//our responsive nav (Pure JS)
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});