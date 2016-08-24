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
            altitude: 10000,
            feedbackCode:'7(Score 32)',
            freq: 978.1,
            power: -55.0,
            gps: 'Sync',
            rfLinkTest: 'PASS'
        },
        testParameter: {
            mode: 0,
            distance: 1
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

    console.log("Example app listening at http://%s:%s", host, port)

})