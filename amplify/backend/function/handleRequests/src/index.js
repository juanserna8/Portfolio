

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    const parsedBody = JSON.parse(event.body)

    const response = {
        statusCode: 200,
        headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Headers": "*"
        },
        // body: JSON.stringify(customer),
        
        }
        return response
        console.log(parsedBody.name, parsedBody.email, parsedBody.message)
};
