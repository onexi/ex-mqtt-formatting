//check run.js

var mqtt = require('mqtt');
var client = {};
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    // Connect to the MQTT broker
    client = mqtt.connect(address, 1883);
};

exercise.SubscribeToChannel = function(channel){
    // Subscribe to a channel
    client.subscribe(channel);
};

exercise.SendAsJSON = function(channel,obj){
    // Publish an object to a channel
    client.publish(channel, JSON.stringify(obj));
};

exercise.ConvertBufferToString = function(buffer) {
    // Convert a buffer used in some MQTT
    buffer.toString();
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
    client.on('message', function(topic, message){
        var msgStr = message.toString();
        console.log(msgStr);
        console.log(topic);
        exercise.yourObject = JSON.parse(msgStr);
    });
};



exercise.Disconnect = function() {
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
};

module.exports = exercise;