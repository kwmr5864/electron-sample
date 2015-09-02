angular.module('app', []).controller('appCtrl', function($scope) {
    initStorageMessages();
    $scope.message = '';
    $scope.formUrl = 'partials/form.html';
    $scope.messages = getStorageMessages();
    $scope.index = localStorage.messagesIndex;
    $scope.add = function() {
        var message = {
            id: $scope.index,
            value: this.message,
            created_at: +new Date()
        };
        $scope.messages.push(message);
        $scope.index++;
        saveStorageMessages($scope.messages, $scope.index);
    };
    $scope.del = function(id) {
        for (var i in $scope.messages) {
            if ($scope.messages[i].id === id) {
                $scope.messages.splice(i, 1);
                break;
            }
        }
        saveStorageMessages($scope.messages, $scope.index);
    };
});

function initStorageMessages() {
    if (!localStorage.messages) {
        localStorage.messages = [];
        localStorage.messagesIndex = 0;
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

function saveStorageMessages(messages, messagesIndex) {
    localStorage.messages = JSON.stringify(messages);
    localStorage.messagesIndex = messagesIndex;
}
