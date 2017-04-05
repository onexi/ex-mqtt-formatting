var mqtt = require('mqtt');
var client = {};
var exercise = {};

exercise.yourMessage = "";
exercise.yourObject = "";

exercise.ConnectToServer = function(address){
    client  = mqtt.connect(address, 1883);
};

exercise.SubscribeToChannel = function(channel){
 
    client.subscribe(channel);
 
};

exercise.SendAsJSON = function(channel,obj){

    client.publish(channel, JSON.stringify(obj));

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

    client.on('message', function(topic, message){
        var messageStr = message.toString();
        //console.log(messageStr);
        //console.log(topic);
        exercise.yourObject = JSON.parse(messageStr);
    });
};

exercise.Disconnect = function() {

    client.end();
};

module.exports = exercise;