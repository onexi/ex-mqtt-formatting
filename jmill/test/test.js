var should = require('chai').should();
var ex = require('../exercise.js');
var mosca = require('mosca');

var server;
before(function() {
    server = new mosca.Server({port: 1883});
});

after(function() {
    server.close();
});

describe('Call ConnectToServer', function() {
	it('Server registered connection', function(done) {
		server.on('clientConnected', function(client) {
			done()
		});
	    ex.ConnectToServer('mqtt://localhost')
	});
});
describe('Call SubscribeToChannel', function() {
	it('Server registered subscription', function(done) {
		server.on('subscribed', function(topic, client) {
			if(topic == 'TestChannel') done();
		});
	    ex.SubscribeToChannel('TestChannel');
		ex.SubscribeToChannel('TestChannelB'); // This really should happen in the process JSON test but timing is tricky
	});
});

describe('Call SendAsJSON', function() {
	it('Server registered JSON', function(done) {
		var sentObj = {result:'success'};
		server.on('published', function(packet, client) {
			//  console.log(JSON.stringify(packet));
		  	if(packet.topic == "TestChannel")
			{
				message =  String.fromCharCode.apply(null, new Uint16Array(packet.payload));
				messageObj = JSON.parse(message)
				messageObj.result.should.equal(sentObj.result)
				done();
			}
		});
	    ex.SendAsJSON('TestChannel',sentObj);
	});
});

describe('Call ConvertBufferToString', function() {
	it('Succesfully converted buffer to string', function(){
		result = ex.ConvertBufferToString(Buffer.from('Test String'));
		result.should.equal('Test String')
	})
});

describe('Call ProcessAsJSON', function() {
	it('Client received message JSON', function(done) {
		ex.ProcessAsJSON();
		var sentObj = {result:'success'};
		var message = {
		  topic: 'TestChannelB',
		  payload: JSON.stringify(sentObj), // or a Buffer
		  qos: 0, // 0, 1, or 2
		  retain: false // or true
		};

		server.publish(message, function() {
		});

		setTimeout(function() {
			var message = ex.yourObject;
			message.result.should.equal(sentObj.result)
			done();
		}, 1500 );
	});
});

describe('Call Disconnect', function() {
    it('Client should end connection', function (done) {
        ex.Disconnect();
        done();
    })
});
