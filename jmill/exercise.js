var mqtt = require('mqtt')
var client = {}
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    // Connect to the MQTT broker
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    // JM added below:
    client = mqtt.connect(address);
};

exercise.SubscribeToChannel = function(channel){
    // Subscribe to a channel
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    // JM added below:
    client.subscribe(channel);
    // client.on('connect', function(){
    //     client.subscribe(channel);
    // });
};

exercise.SendAsJSON = function(channel,obj){
    // Publish an object to a channel
    // as a JSON string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    // JM added here:
    client.publish(channel,JSON.stringify(obj)); // sends object as JSON string to whatever channel specified
};

exercise.ConvertBufferToString = function(buffer) {
    // Convert a buffer used in some MQTT
    // broker messages to a string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    // JM added here:
    // convert bytes back into strings
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
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    // JM added here:
    client.on('message', function(topic, message){
        var messageStr = message.toString();
        console.log(messageStr);
        console.log(topic);
        exercise.yourObject = JSON.parse(messageStr);
    });
};
;

exercise.Disconnect = function() {
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
    // JM added here:
    client.end();
};

module.exports = exercise;