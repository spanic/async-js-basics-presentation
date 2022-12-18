// const any = require('promise.any');
// const Promise = require("promise-polyfill");
// require("promise-any-polyfill");

const firstPromise = new Promise(function(resolve) {
    resolve();
});

const secondPromise = new Promise(function(resolve) {
    resolve();
});

Promise.all([firstPromise, secondPromise])
.then(function() {
    console.log("At least one of the promises has been resolved");
})
.catch(function() {
    console.warn("Something went wrong");
});

