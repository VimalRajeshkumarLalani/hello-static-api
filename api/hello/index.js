module.exports = async function (context, req) {
    const requestOrigin = req.headers.get("origin");
	const origin = allowedOrigins.includes(requestOrigin) ? requestOrigin : "*";
    context.res = {
         headers: {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        // status: 200, /* Defaults to 200 */
        body: { "data" : "Hello World from Azure Static Web Apps API!" }
    };
};
