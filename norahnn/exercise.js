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
    client = mqtt.connect(address, 1883);
};

exercise.SubscribeToChannel = function(channel){
    // Subscribe to a channel
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    client.subscribe(channel);
};

exercise.SendAsJSON = function(channel,obj){
    // Publish an object to a channel
    // as a JSON string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
     client.publish(channel,JSON.stringify(obj));
};

exercise.ConvertBufferToString = function(buffer) {
    // Convert a buffer used in some MQTT
    // broker messages to a string
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
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
    client.on('message', function(topic, message){
        var messageStr = message.toString();
        console.log(messageStr);
        console.log(topic);
        exercise.yourMessage=messageStr;
        exercise.yourObject = JSON.parse(messageStr);
    });

};



exercise.Disconnect = function() {
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
    client.end();
};

module.exports = exercise;