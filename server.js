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
            emitterType: 0
        },
        testParameter: {
            mode: 0,
            distance: 1
        }
    }

    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})