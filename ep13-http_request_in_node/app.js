const https = require("https");
const axios = require('axios');

const req = https.request({
    hostname: "api.covid19api.com",
    // port: 80,
    path: "/summary",
    method: "GET",
    // method: "POST",
    headers: {
        "Content-Type": "application/json",
        // "Content-Length": Buffer.byteLength(postData),
        Accept: "application/json",
    },
}, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");

    let data = "";

    res.on("data", (chunk) => {
        // console.log(`BODY: ${chunk}`);
        data += chunk;
    });
    res.on("end", () => {
        const result = JSON.parse(data);
        // console.log(result);
    });
});

req.on("error", (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
// req.write(postData);
req.end();

// default https api is shit
// use axios or node-fetch -- simpler
// node-fetch is similar to fetch() in browser

axios.default.request({
    url: "https://api.covid19api.com/summary",
    method: 'get',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
    },
    // data: {}, // only needed when need to pass body to request

}).then((res) => {

    console.log(res.data);
    console.log('axios');

}).catch(console.error);
