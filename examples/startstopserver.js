/**
	server start, stop, and restart
	
**/	



var lib=require('libionosenterprise')

lib.setauth('username','password') 		// <---- Your username and password

var dc_id='f355b51d-1c9c-4150-bc55-a616fe3bf437' // <----- Your data center id


var srv_id='52c64bc2-5e71-4b28-a8b6-e71d86586fb3'  // <---- Your server id


lib.startServer(dcid,srvid)

lib.restartServer(dcid,srvid)

lib.stopServer(dcid,srvid)
