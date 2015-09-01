angular.module('app', []).controller('appCtrl', function($scope) {
    $scope.message = '';
    $scope.formUrl = 'partials/form.html';
    $scope.hello = function() {
        alert(this.message);
    };
});
