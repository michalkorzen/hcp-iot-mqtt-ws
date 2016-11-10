# Sample MQTT over WebSocket Client to HCP IoT Services
Bi-directional MQTT over WebSocket Client to HCP IoT Services based on node.js

Installation
------------
In order to use the client, import all required modules with:
```sh
npm install
```
or 
```sh
npm install mqtt --save
```

Configuration
------------
Initialize configuration variables with your user ID (identical to your SCN user), device ID and OAuth autentication key obtained from HCP *Internet of Things Services Cockpit*
```javascript
my_account_id='pXXXXXXX'
my_device_id='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
my_oauth_token='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

Run
------------
Run the client with
```sh
node mqtt_over_wss.js
```

License
------------
ISC
