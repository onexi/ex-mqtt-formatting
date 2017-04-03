var mqtt = require('mqtt')
var client = {}
var exercise = {};

exercise.yourMessage = "message: yourMessage";
exercise.yourObject = "message: yourObject";


exercise.ConnectToServer = function (address) {
    // Connect to the MQTT broker
    client = mqtt.connect(address, 1883);//connect to address at port 1883 (at the host's side) 
};

exercise.SubscribeToChannel = function (channel) {
    // Subscribe to a channel
    client.subscribe(channel);
};

exercise.SendAsJSON = function (channel, obj) {
    // Publish an object to a channel
    // as a JSON string
    client.publish(channel, JSON.stringify(obj)); //in this instanse the obj is a javascript object so we go through JSON.stringgify(obj) that converts it into a string.  
};

exercise.ConvertBufferToString = function (buffer) {
    // Convert a buffer used in some MQTT
    // broker messages to a string
    return buffer.toString();
};

exercise.ProcessAsJSON = function () {
    // Process an incoming message. as
    // a JSON string.
    // Set exercise.yourMessage to be
    // the incoming message string, and
    // set exercise.yourObject to be
    // the parsed object.
    // Also log the incoming message
    // to console.

    client.on('message', function (topic, message) {
        var messageStr = message.toString();
        console.log(message);
        console.log(messageStr);
        exercise.yourObject = JSON.parse(messageStr);
    });
};

;

exercise.Disconnect = function () {
    // Disconnect the client
    client.end();
};

module.exports = exercise;