var mqtt = require('mqtt')
var client = {}
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    // Connect to the MQTT broker
    client = mqtt.connect(address, 1883);
   // pass in the address and the port at the address 1883 
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
};

exercise.SubscribeToChannel = function(channel){
    client.subscribe(channel);
    // Subscribe to a channel
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
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
        var messageStr = message.toString();
        console.log(message);
        console.log(messageStr);
        console.log(topic);
        exercise.yourObject = JSON.parse(messageStr);
    })
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

;

exercise.Disconnect = function() {
    client.end();
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
};

module.exports = exercise;