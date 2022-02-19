// #################### 5 - PROBLEM ####################
const request = require('request');
function getGoogleHomePage(finalCallBack) {
    request('http://www.google.com', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        finalCallBack(error);
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        finalCallBack(null, body);
    });
};
console.log(getGoogleHomePage((result) => {
    console.log("RESULT==>", result);
}));

// #################### SOLUTION ####################

    var request = require('request');
    let url = "http://www.google.com";
    
    let getResponse = (url) => {
      return new Promise(
        (resolve, reject) => {
          request.get(url, function(error, response, data){
            if (error) reject(error);
              
    let content = JSON.parse(data);
            let fact = content.value;
            resolve(fact);
          })
       }
     );
    };
    
    getResponse(url).then(
       fact => console.log(fact) 
    ).catch(
       error => console.log(error)
    );