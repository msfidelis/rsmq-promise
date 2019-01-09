# rsmq-promise - Promise interface for RSMQ 

[![npm version](https://badge.fury.io/js/rsmq-promise.svg)](https://badge.fury.io/js/rsmq-promise)

A lightweight message queue for Node.js that requires no dedicated queue server. Just a Redis server.

![RSMQ: Redis Simple Message Queue for Node.js](https://img.webmart.de/rsmq_wide.png)

## Usage

* After creating a queue you can send messages to that queue.
* The messages will be handled in a **FIFO** (first in first out) manner unless specified with a delay.
* Every message has a unique `id` that you can use to delete the message. 
* The `sendMessage` method will return the `id` for a sent message.
* The `receiveMessage` method will return an `id` along with the message and some stats.
* Should you not delete the message it will be eligible to be received again after the visibility timeout is reached.
* Please have a look at the `createQueue` and `receiveMessage` methods described below for optional parameters like **visibility timeout** and **delay**.

## Install

```bash
npm install --save rsmq-promise
```

## Quickstart

```javascript
const RSMQPromise = require('rsmq-promise');

const rsmq = new RSMQPromise({
    host: "127.0.0.1", 
    port: 6379
});
```

Parameters for RedisSMQ via an *options* object:

* `host` (String): *optional (Default: "127.0.0.1")* The Redis server
* `port` (Number): *optional (Default: 6379)* The Redis port
* `options` (Object): *optional (Default: {})* The [Redis options](https://github.com/NodeRedis/node_redis#options-object-properties) object. 
* `client` (RedisClient): *optional* A existing redis client instance. `host` and `server` will be ignored.
* `ns` (String): *optional (Default: "rsmq")* The namespace prefix used for all keys created by RSMQ
* `realtime` (Boolean): *optional (Default: false)* Enable realtime PUBLISH of new messages (see the [Realtime section](#realtime))

## Create a Queue

```javascript
rsmq.createQueue({qname: 'myqueue'})
    .then(done => console.log('Queue created!'))
    .catch(err => console.log(err));
```

## Send Messages

```javascript
rsmq.sendMessage({ qname: 'myqueue', message: 'my message!' })
    .then(result => console.log("Message sent. ID:", result))
    .catch(err => console.log(err));
```

## Receive a message

```javascript
rsmq.receiveMessage({qname: 'myqueue'})
    .then(message => console.log(message))
    .catch(err => console.log(err))
```

## Delete a message

```javascript
rsmq.deleteMessage({ qname: 'myqueue', id: 'dhoiwpiirm15ce77305a5c3a3b0f230c6e20f09b55'})
    .then(result => console.log("Message deleted."))
    .catch(err => console.log("Message not found."));
```

## List Queues

```javascript
rsmq.listQueues()
    .then(queues => console.log(queues))
    .catch(err => console.log(err));
```

## Quit Connection

```javascript
rsmq.quit()
    .then(success => console.log(success))
    .catch(err => console.log(err));
```


Thanks for: [Patrick Liess](https://github.com/smrchy)

More info: https://github.com/smrchy/rsmq
