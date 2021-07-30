const request = require("request");
const fs = require("fs");
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(err);
    return; 
  }
  if (response.statusCode === 200) {
    fs.writeFile("./index.html", body, (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
      }
    });
 }
});