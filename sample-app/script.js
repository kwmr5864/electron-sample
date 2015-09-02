angular.module('app', []).controller('appCtrl', function($scope) {
    initStorageMessages();
    $scope.message = '';
    $scope.formUrl = 'partials/form.html';
    $scope.messages = getStorageMessages();
    $scope.index = $scope.messages.length < 1 ? 0 : $scope.messages[$scope.messages.length - 1].id;
    $scope.add = function() {
        var message = {
            id: $scope.index,
            value: this.message,
            created_at: +new Date()
        };
        $scope.messages.push(message);
        saveStorageMessages($scope.messages);
        $scope.index++;
    };
    $scope.del = function(id) {
        for (var i in $scope.messages) {
            if ($scope.messages[i].id === id) {
                $scope.messages.splice(i, 1);
                break;
            }
        }
        saveStorageMessages($scope.messages);
    };
});

function initStorageMessages() {
    if (!localStorage.messages) {
        localStorage.messages = [];
    }
}

function getStorageMessages() {
    var messages = [];
    if (localStorage.messages) {
        storageMessages = JSON.parse(localStorage.messages);
        for (var i in storageMessages) {
            messages.push(storageMessages[i]);
        }
    }
    return messages;
}

function saveStorageMessages(messages) {
    localStorage.messages = JSON.stringify(messages);
}
