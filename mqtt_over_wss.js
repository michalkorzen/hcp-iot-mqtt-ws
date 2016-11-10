// ========================================================================
// Sample bi-directional MQTT over WebSocket Client to HCP IoT Services
// Michal Korzen, SAP  
// ========================================================================
// CONFIGURATION
// ========================================================================
my_account_id='pXXXXXXX'
my_device_id='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
my_oauth_token='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
// ========================================================================
var mqtt    = require('mqtt');

var endpoint = 'wss://iotmms'+my_account_id+'trial.hanatrial.ondemand.com:443/com.sap.iotservices.mms/v1/api/ws/mqtt';
var options = {
	keepalive: 60,
	username: my_device_id,
	password: my_oauth_token,
	connectTimeout: 5 * 1000,
	clientId: my_device_id,
	protocolId: 'MQIsdp',
	protocolVersion: 3,
	clean: true,
	will: null
};

var client  = mqtt.connect(endpoint, options);

client.on('connect', function () {
	console.log('connected!');
	client.subscribe('iot/log/'+my_device_id);
	client.subscribe('iot/ack/'+my_device_id);
	client.subscribe('iot/push/'+my_device_id);
});

client.on('error', function () {
	console.log('error!');
});

client.on('offline', function () {
	console.log('offline!');
});

client.on('close', function () {
	console.log('close!');
});

client.on('message', function (topic, message) {
	console.log('\nMessage received: ', message);
});

// client.publish('iot/data/'+my_device_id, '{"mode":"async","messageType":"m0t0y0p0e1","messages":[{"sensor":"sensor1","value":"20","timestamp":1413191650}]}');