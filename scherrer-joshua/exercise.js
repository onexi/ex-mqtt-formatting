var mqtt = require('mqtt')
var client = {};
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    client = mqtt.connect(address, 1883);
    // Connect to the MQTT broker
};

exercise.SubscribeToChannel = function(channel){
    client.subscribe(channel);
    // Subscribe to a channel
};

exercise.SendAsJSON = function(channel,obj){
    client.publish(channel,JSON.stringify(obj));
    // Publish an object to a channel
    // as a JSON string
};

exercise.ConvertBufferToString = function(buffer) {
    return buffer.toString();
    // Convert a buffer used in some MQTT
    // broker messages to a string
};

exercise.ProcessAsJSON = function() {
    client.on('message', function(topic,message){
        var messageStr = message.toString();
        console.log(messageStr);
        console.log(topic);
        exercise.yourObject = JSON.parse(messageStr);
    });
    // Process an incoming message. as
    // a JSON string.
    // Set exercise.yourMessage to be
    // the incoming message string, and
    // set exercise.yourObject to be
    // the parsed object.
    // Also log the incoming message
    // to console.
};

;

exercise.Disconnect = function() {
    client.end();
    // Disconnect the client
};

module.exports = exercise;