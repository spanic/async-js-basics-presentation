const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest(); 

xhr.open("GET", "http://time.jsontest.com/");
xhr.responseType = "json";

xhr.onload = function() {
    const responseObj = xhr.response;
    console.log(responseObj);
};

xhr.onerror = function() {
    console.error("Something went wrong");
};

xhr.send();
console.log("Request has been sent");
