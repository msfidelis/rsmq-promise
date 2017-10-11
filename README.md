# rsmq-promise
Promise base for RSMQ - https://github.com/smrchy/rsmq 

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

## Create a Queue

```javascript
rsmq.createQueue({
    qname: 'myqueue'
}).then(done => {
    console.log('Queue created!');
}).catch(err => {
    console.log(err);
});
```

## Send Messages

```javascript
rsmq.sendMessage({
    qname: 'myqueue', message: 'my message!'
}).then(result => {
    console.log("Message sent. ID:", result);
}).catch(err => {
    console.log(err);
})
```

## Receive a message

```javascript
rsmq.receiveMessage({
    qname: 'myqueue'
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err);
})
```

## Delete a message

```javascript
rsmq.deleteMessage({
    qname: 'myqueue',
    id: 'dhoiwpiirm15ce77305a5c3a3b0f230c6e20f09b55'
}).then(result => {
    console.log("Message deleted.");	
}).catch(err => {
    console.log("Message not found.");
});
```

## List Queues

```javascript
rsmq.listQueues()
    .then(queues => {
        console.log(queues);
    })
    .catch(err => {
        console.log(err);
    })
```

Thanks for: [Patrick Liess](https://github.com/smrchy)

More info: https://github.com/smrchy/rsmq