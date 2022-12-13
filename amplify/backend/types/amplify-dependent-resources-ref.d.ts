export type AmplifyDependentResourcesAttributes = {
    "function": {
        "handleRequests": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "requests": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}