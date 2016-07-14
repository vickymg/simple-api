// passes the app variable from app.js, then exports the appRouter variable
// to be used by whatever calls it in the project
var appRouter = function(app) {
  // obvs no passwords in production
  // accept GET request on the /account endpoint, which must contain a username
  // query param - if it doesn't exist/match the one in the mock data, an error is returned
  // otherwise, the mock data object is returned
  app.get("/account", function(req, res) {
    var accountMock = {
      "username": "test",
      "password": "1234",
      "twitter": "@test"
    }
    if(!req.query.username) {
      return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
      return res.send({"status": "error", "message": "wrong username"});
    } else {
      return res.send(accountMock);
    }
  });

  // here, instead of a GET request, this endpoint is only accessed over a POST
  // request - as long as the required body parameters exist in the request,
  // this will return them again
  app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
      return res.send({"status": "error", "message": "missing a parameter"});
    } else {
      return res.send(req.body);
    }
  });
}

module.exports = appRouter;
