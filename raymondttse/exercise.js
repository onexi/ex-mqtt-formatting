var mqtt = require('mqtt')
var client = {}
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    client = mqtt.connect(address, 1883);
};

exercise.SubscribeToChannel = function(channel){
    client.subscribe(channel);
};

exercise.SendAsJSON = function(channel,obj){
    client.publish(channel, JSON.stringify(obj));
    // Publish an object to a channel
    // as a JSON string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
};

exercise.ConvertBufferToString = function(buffer) {
    return buffer.toString();
    // Convert a buffer used in some MQTT
    // broker messages to a string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
};

exercise.ProcessAsJSON = function() {
    client.on('message', function(topic, message){
        exercise.yourMessage = message.toString();
        exercise.yourObject = JSON.parse(exercise.yourMessage);
        console.log(exercise.yourMessage);
        console.log(topic);
    });
    // Process an incoming message. as
    // a JSON string.
    // Set exercise.yourMessage to be
    // the incoming message string, and
    // set exercise.yourObject to be
    // the parsed object.
    // Also log the incoming message
    // to console.
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
};

exercise.Disconnect = function() {
    client.end();
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
};

module.exports = exercise;