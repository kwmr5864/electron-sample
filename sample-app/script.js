angular.module('app', []).controller('appCtrl', function($scope) {
    $scope.message = '';
    $scope.formUrl = 'partials/form.html';
    $scope.messages = [];
    $scope.index = 0;
    $scope.add = function() {
        $scope.messages.push({
            id: $scope.index,
            value: this.message,
            created_at: +new Date()
        });
        $scope.index++;
    };
    $scope.del = function(id) {
        for (var i in $scope.messages) {
            if ($scope.messages[i].id === id) {
                $scope.messages.splice(i, 1);
                break;
            }
        }
    };
});
