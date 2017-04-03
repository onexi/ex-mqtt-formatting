var mqtt = require('mqtt')
var client = {}
var exercise = {};

exercise.yourMessage = ""
exercise.yourObject = ""

exercise.ConnectToServer = function(address){
    client = mqtt.connect(address, 1883);
    return client;
};

exercise.SubscribeToChannel = function(channel){
    client.subscribe(channel);
};

exercise.SendAsJSON = function(channel,obj){
    client.publish(channel, JSON.stringify(obj)); //sends object as json string
};

exercise.ConvertBufferToString = function(buffer) {
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
    client.on('message', function(topic, message){
        var messageStr = message.toString();
        console.log(messageStr);
        exercise.yourObject = JSON.parse(messageStr);  
    });
};

exercise.Disconnect = function() {
    // Disconnect the client
    client.end();
};

module.exports = exercise;