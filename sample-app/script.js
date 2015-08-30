angular.module('app', []).controller('appCtrl', function($scope) {
    $scope.message = '';
    $scope.hello = function() {
        alert(this.message);
    };
});
