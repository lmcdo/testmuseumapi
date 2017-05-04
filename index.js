/*
import 'whatwg-fetch';
var URL = 'https://community-rijksmuseum.p.mashape.com/{culture}/collection?key=K1kbfwDQ&q=Van+Gogh';
/*, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };*/

/*var url = new URL("https://community-rijksmuseum.p.mashape.com/{culture}/collection?key=&q=Van+Gogh"),
    params = {lat:35.696233, long:139.570431}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
fetch(url).then*/

/*function fetchDemo() {
  fetch(URL).then(function(response) {
    return response.json();
  }).then(function(json) {
    insertPhotos(json);
  });
}

fetchDemo();
*/
/*require('node-fetch');
 require('es6-promise').polyfill();*/
 'use strict';
 require('babel-register')({
        "presets": ["es2015"]
});
 const fetch = require  ("node-fetch");
 var url = 'https://community-rijksmuseum.p.mashape.com/{culture}/collection?key=K1kbfwDQ&q=Van+Gogh';

 fetch(url)
    .then(function(response) {
    if (response.status >= 400) {
       throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
     console.log(data);
  });