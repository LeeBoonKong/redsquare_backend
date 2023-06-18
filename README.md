# RedsquareBackend
Solution for Redsquare Backend Assignment

Run

    npm start

To start local host at localhost:5000

Run loadTest.html to test the api at load.

(Endpoint 1)/generateHash will return a response of a random hash when called.
(Endpoint 2)/checkHash will return 200 when the requirement is met, else, 400 will be returned.

Answer for optional question:

To improve the performance of this RHM backend, it should be considered that Endpoint 1(generateHash),
is also part of the API server, it should be considered to be moved to be called
as an internal javascript function instead of being called through http, as http's handshake process will introduce an 
overhead that will slow the down the response speed of Endpoint 2(checkHash).