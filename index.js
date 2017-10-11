'use strict';

const RedisSMQ = require('rsmq');
const Promise = require('bluebird');

class RedisSMQPromise {

    constructor(options) {
        this.rsmq = new RedisSMQ(options);
    }

    get listQueues() {
        return Promise.promisify(this.rsmq.listQueues);
    }

    get createQueue() {
        return Promise.promisify(this.rsmq.createQueue);
    }

    get setQueueAttributes() {
        return Promise.promisify(this.rsmq.setQueueAttributes);
    }

    get deleteQueue() {
        return Promise.promisify(this.rsmq.deleteQueue);
    }

    get sendMessage() {
        return Promise.promisify(this.rsmq.sendMessage);
    };

    get receiveMessage() {
        return Promise.promisify(this.rsmq.receiveMessage);
    };

    get deleteMessage() {
        return Promise.promisify(this.rsmq.deleteMessage);
    };
}


module.exports = RedisSMQPromise;