var app = angular.module('example.app', []);

app.controller('AppController', function($scope, $http) {
  $http.get("/pictures/")
  .success(function (response) {$scope.names = response;});
});



angular
    .module('app', ['angularFileUpload'])
    .controller('AppController', function($scope, FileUploader) {
        $scope.uploader = new FileUploader();
    });