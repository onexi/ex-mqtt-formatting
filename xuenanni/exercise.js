var mqtt = require('mqtt');
var client = {};
var exercise = {};

exercise.yourMessage = ' ';
exercise.yourObject = ' ';

exercise.ConnectToServer = function(address){
    client = mqtt.connect(address,1833);
    //connect
};

exercise.SubscribeToChannel = function(channel){
    client.subscribe(channel);
    // Subscribe to a channel
    
};

exercise.SendAsJSON = function(channel,obj){
    // Publish an object to a channel
    // as a JSON string
    client.publish(channel,JSON.stringify(obj));
};

exercise.ConvertBufferToString = function(buffer) {
    // Convert a buffer used in some MQTT
    // broker messages to a string
    return buffer.toString();
};

exercise.ProcessAsJSON = function() {
    // Process an incoming message. as
    // a JSON string.
    // Set exercise.yourMessage to be
    // the incoming message string, and
    // set exercise.yourObject to be
    // the parsed object.
    // Also log the incoming message
    // to console.
    client.on('message',function(topic,message){
        var messageStr = message.toString();
        console.log(messageStr);
        console.log(topic);
        exercise.yourObject = JSON.parse(messageStr);
    });
};

//;

exercise.Disconnect = function() {
    // Disconnect the client
    client.end();
};

module.exports = exercise;