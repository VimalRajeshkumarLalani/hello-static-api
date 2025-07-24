module.exports = async function (context, req) {
    const requestOrigin = req.headers.get("origin");
	
    context.res = {
         headers: {
            'Access-Control-Allow-Origin': requestOrigin,
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        // status: 200, /* Defaults to 200 */
        body: { "data" : "Hello World from Azure Static Web Apps API!" }
    };
};
