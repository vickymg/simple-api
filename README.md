Simple API
----------

A simple Node.js API created following the tutorial here:
https://www.thepolyglotdeveloper.com/2015/10/create-a-simple-restful-api-with-node-js/

To use in Postman:

GET http://localhost:3000/account?username=test

* returns user details from mock data
* missing/non matching usernames will show an error

POST http://localhost:3000/account

Include parameters  :   

    username: test

    password: 1234

    twitter : @test

* returns user details from mack data
* missing params will show an error
