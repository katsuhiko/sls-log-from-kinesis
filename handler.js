'use strict';

module.exports.todosConsumer = (event, context, callback) => {
  console.log('Event:', JSON.stringify(event));

  event.Records.forEach(function(record) {
    const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
    console.log('Decoded payload:', payload);
  });

  callback(null, "message");
};
