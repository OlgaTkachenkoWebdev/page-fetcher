const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const siteInfo = body;
  fs.writeFile(path, siteInfo, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${siteInfo} bytes to ${path}`)
  });
});


