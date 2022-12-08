export type AmplifyDependentResourcesAttributes = {
    "function": {
        "processQuotes": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "portfolio": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "contact": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}