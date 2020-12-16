const cors = (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Methods", 
        "GET,PUT,POST,DELETE,OPTIONS"
    );

    response.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );

    if(request.method == "OPTIONS") {
        response.status(200).end();
    } else {
        next();
    }
}

module.exports = { cors }
