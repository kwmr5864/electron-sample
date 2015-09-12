angular.module('app', []).controller('MainCtrl', function() {
    initStorageMessages();
    this.message = '';
    this.messages = getStorageMessages();
    this.messagesIndex = getStorageMessagesIndex();
    this.add = function() {
        if (this.message) {
            var message = {
                id: this.messagesIndex,
                value: this.message,
                created_at: +new Date(),
                editable: false
            };
            this.messages.unshift(message);
            this.messagesIndex++;
            saveStorageMessages(this.messages, this.messagesIndex);
            this.message = '';
        }
    };
    this.edit = function(id) {
        for (var i in this.messages) {
            if (this.messages[i].id === id) {
                this.messages[i].editable = true;
                this.messages[i].input = this.messages[i].value;
                break;
            }
        }
    };
    this.save = function(id) {
        for (var i in this.messages) {
            if (this.messages[i].id === id) {
                if (this.messages[i].input.length < 1) {
                    break;
                }
                this.messages[i].editable = false;
                if (this.messages[i].input !== this.messages[i].value) {
                    this.messages[i].value = this.messages[i].input;
                    this.messages[i].updated_at = +new Date();
                    saveStorageMessages(this.messages, this.messagesIndex);
                }
                break;
            }
        }
    };
    this.del = function(id) {
        for (var i in this.messages) {
            if (this.messages[i].id === id) {
                this.messages.splice(i, 1);
                break;
            }
        }
        saveStorageMessages(this.messages, this.messagesIndex);
    };
    this.clear = function() {
        this.messages = [];
        this.messagesIndex = 0;
        saveStorageMessages(this.messages, this.messagesIndex)
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
