var express = require('express');
var app = express();

app.use(express.static('public'));



app.get('/run_test_get', function (req, res) {

    response = {
        version: 1.0,
        message: req.query.msgID,
        requestId: req.query.reqID,
        deviceId: '21EC2020-3AEA-4069-A2DD-08002B30309D',
        status: 200,
        data: {
        uatOutStateVectorTestSubsonic: {
            addressType: 0,
            address: 1001,
            latitude: 38.9107,
            longitude: -95.1749,
            altitudeType: 0,
            nic: 0,
            agState: 0,
            horizontalVelocity: { nsK: 100, ewK: -100 },
            utc: 1,
            uplinkFeedback: 0,
            emitterType: 0,
            addressQualifier:'ADS-B ICAO(0)',
            payloadTypeCodes:'0,1,4',
            altitude:'10000 Ft',
            feedbackCode:'7(Score 32)',
            freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
		uatOutStateVectorTestGround:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'0,1,4',
			agState: 0,
			latitude: 38.9107,
            longitude: -95.1749,
			nic:'Rc<1 NM (5)',
			altitude: '100 Ft',
            altitudeType: 0,
			groundSpeed:'20 Knots',
			heading:'12.10 Deg (Magnectic Hdg)',
			latOffset:'4 m',
            lonOffset:'6 m',
			feedbackCode:'7(Score 32)',
			freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
		uatOutAUXStateVectorTest:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'0,1,4',
			altitude: '100 Ft',
			altitudeType: 0,
			freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
		uatOutModeStatusTest:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'0,1,4',
			emitterCat: 'Large (3)',
			fightID:'DL135',
			epStatus:'No Emergency (0)',
			sil:'(1)',
			silSup:'Per Sample (1)',
			nacP:'<2 NM (3)',
			nacV:'<3 m/s (2)',
			nicBaroCode:'(0)',
			uatIn:'Yes (1)',
			'1090esIn':'No (0)',
			tcas:'No (0)',
			tcasRA:'No (0)',
			ident:'Not Active (0)',
			atcServe:0,
			csid:'Call Sign(1)',
			gva:'<45 m (2)',
			ant:'diversity (0)',
			fbCode:'(0)',
			freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
		uatOutTargetStateTest:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'0,1,4',
			selectedAltType: 'MCP/FCU (0)',
			selectedAltitude: '10000 Ft',
            baroPressSetting: '950 mb',
			selecedHeading:'90.0 Degree (122)',
            mfStatus: 'Valid (1)',
			autoPilot:'Engaged (1)',
			vnav:'Engaged (1)',
			altitudeHold:'Not Engaged (0)',
            approachMode:'Engaged (1)',
			lnavMode:'Engaged (1)',
			freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
		uatOutTrajectoryChangeTest:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'5',
			tcField: 00000000000000000,
			freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
		uatOutDetailRFLinkTest:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'0,1,4',
			equipageClass:'A3',
			txPower:'-55 dB',
			powerDroop:'0.25 dB',
			frequencyA:'978.4 MHz',
        	frequencyB:'+12.1 kHz',
			deviationA:'620 kHz',
			deviationB:'99.2%',
			peakDeviationA:'705 kHz',
			peakDeviationB:'112.8%',
			messageTimming:'+0.08 usec',
			eyeOpenningVerA:'595 kHz',
			eyeOpenningVerB:'95.2%',
			eyeOpenningHorA:'0.74 usec',
			eyeOpenningHorB:'77.1%',
			gps:Sync,
			rfLinkTest:PASS
        },
		uatOutDetailSummary:{
            address: 1001,
            addressQualifier:'ADS-B ICAO(0)',
			payloadTypeCodes:'1,4',
			latitude: 38.9107,
            longitude: -95.1749,
			agState: '(1)',
			nVel:'200 Kts',
			eVel:'300 Kts',
			emitCat: '(3)',
			id:'DL13',
			emer:'(0)',
			sil:'(1)',
			silS:'(1)',
			nacP:'(3)',
			nacV:'(2)',
			nicBaro:'(0)',
			uatIn:'(1)',
			'1090esIn':'(0)',
			tcas:'(0)',
			tcasRA:'(0)',
			ident: '(0)',
			atcServ:'(0)',
			csid:'(1)',
			gva:'(2)',
			ant:'(0)',
			fbCode:'(0)',
			freq:'978.1 MHz',
            power:'-55.0 dB',
            gps:Sync,
            rfLinkTest:PASS
        },
        testParameter: {
            mode: 0,
            distance: 1
        }
      }
    }

    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/software_version_get', function (req, res) {

    response = {
        version: 1.0,
        message: req.query.msgID,
        requestId: req.query.reqID,
        deviceId: '21EC2020-3AEA-4069-A2DD-08002B30309D',
        status: 200,
        data: {
            fpga:1.0,
            hardwareVer:1.0,
            softwareLoad: 'v1.0.2.3',
            dsp: '1.2.3.4'
        },
        
    }

    console.log(response);
    res.end(JSON.stringify(response));
})

app.put('/stop_test_put', function (req, res) {

    response = {
        version: 1.0,
        message: req.query.msgID,
        requestId: req.query.reqID,
        deviceId: '21EC2020-3AEA-4069-A2DD-08002B30309D',
        status: 200,
        data: {
            testID:10002
        },
        
    }

    console.log(response);
    res.end(JSON.stringify(response));
})


app.get('/get_test_status_get', function (req, res) {

    response = {
        version: 1.0,
        message: req.query.msgID,
        requestId: req.query.reqID,
        deviceId: '21EC2020-3AEA-4069-A2DD-08002B30309D',
        status: 200,
        data: {
            testID:10002
        },

    }

    console.log(response);
    res.end(JSON.stringify(response));
})


app.put('/modify_test_put', function (req, res) {

    response = {
        version: 1.0,
        message: req.query.msgID,
        requestId: req.query.reqID,
        deviceId: '21EC2020-3AEA-4069-A2DD-08002B30309D',
        status: 200,
        data: {
                testID:10002
        },

    }

    console.log(response);
    res.end(JSON.stringify(response));
})


app.get('/get_test_params_get', function (req, res) {

    response = {
        version: 1.0,
        message: req.query.msgID,
        requestId: req.query.reqID,
        deviceId: '21EC2020-3AEA-4069-A2DD-08002B30309D',
        status: 200,
        data: {
            test:012,
            testID:10002
        },
       
    }

    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Test Set server listening at http://%s:%s", host, port)

})
