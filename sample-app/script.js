angular.module('app', []).controller('appCtrl', function($scope) {
    $scope.message = '';
    $scope.formUrl = 'partials/form.html';
    $scope.messages = [];
    $scope.add = function() {
        $scope.messages.push(this.message);
    };
});
