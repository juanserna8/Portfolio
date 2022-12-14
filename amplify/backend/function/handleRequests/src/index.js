var aws = require("aws-sdk");
var SES = new aws.SES({ region: "us-east-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    const parsedBody = JSON.parse(event.body)

    const params = {
        Destination: {
            ToAddresses: [parsedBody.email],
        },
        Message: {
            Body: {
                Text: {
                    Data: `The person ${parsedBody.name} with phone number ${parsedBody.phone} and email address ${parsedBody.email} left you the following message: ${parsedBody.message}`
                },
                // Html: {
                //     Data: ``
                // }
            },
            Subject: {
                Data: 'Your order'
            }, 
        },
        Source: "sernadominguezj@gmail.com"
    };

    try{
        const result = await SES.sendEmail(params).promise();
        console.log(result)
        return {
            statusCode: 200,
            headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({status: 200}),
        } 
    } catch (e) {
        console.error(e)
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
};
