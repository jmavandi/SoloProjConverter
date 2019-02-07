const request = require('request');
const apiRequest = {};


//going to put the 2 currencies on res.locals.


apiRequest.makeRequest = (req,res,next) => {

    // console.log(req.body.fval, req.body.tval);
    let { fval, tval} = req.body;
    // let dataReq;
    request('http://data.fixer.io/api/latest?access_key=097859f97aaefe7fc2ce84bf99431725&format=1', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    res.status(200).json(body);
    const parsed = JSON.parse(body);
    // console.log(parsed);
    res.locals.fval = fval;
    res.locals.tval = tval;
    res.locals.from = parsed.rates[fval]/parsed.rates[tval];
    res.locals.to = parsed.rates[tval]/parsed.rates[fval];
    console.log(res.locals);
    next();
});
}
module.exports = apiRequest;