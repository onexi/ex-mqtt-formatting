var mqtt = require('mqtt')
var client = {}
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    // Connect to the MQTT broker
var client  = mqtt.connect(address);
};

exercise.SubscribeToChannel = function(channel){
    // Subscribe to a channel
    client.subscirbe(channel);
};

exercise.SendAsJSON = function(channel,obj){
    // Publish an object to a channel
    // as a JSON string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
};

exercise.ConvertBufferToString = function() {
    // Convert a buffer used in some MQTT
    // broker messages to a string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
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
        exercise.yourObject =??
    });
};

;

exercise.Disconnect = function() {
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
};

module.exports = exercise;