angular.module('app', []).controller('MainCtrl', function() {
    initStorageMessages();
    this.message = '';
    this.formUrl = 'partials/form.html';
    this.messages = getStorageMessages();
    this.index = getStorageMessagesIndex();
    this.add = function() {
        if (this.message) {
            var message = {
                id: this.index,
                value: this.message,
                created_at: +new Date()
            };
            this.messages.push(message);
            this.index++;
            saveStorageMessages(this.messages, this.index);
            this.message = '';
        }
    };
    this.del = function(id) {
        for (var i in this.messages) {
            if (this.messages[i].id === id) {
                this.messages.splice(i, 1);
                break;
            }
        }
        saveStorageMessages(this.messages, this.index);
    };
});

function initStorageMessages() {
    if (!localStorage.messages) {
        localStorage.messages = JSON.stringify([]);
        localStorage.messagesIndex = JSON.stringify(0);
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

function getStorageMessagesIndex() {
    var index = localStorage.messagesIndex;
    return index ? JSON.parse(index) : 0;
}

function saveStorageMessages(messages, messagesIndex) {
    localStorage.messages = JSON.stringify(messages);
    localStorage.messagesIndex = JSON.stringify(messagesIndex);
}
