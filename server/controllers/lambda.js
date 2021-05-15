let AWS = require(`aws-sdk`);
const lambda = new AWS.Lambda({ region: `us-east-1`});

const invoke = async (req, res) => {
    const {event, lambdaName} = req.body;
    console.log(`event ${JSON.stringify(event)}, lambdaName ${lambdaName}`);
    let params = {
        FunctionName: lambdaName, 
        InvocationType: "RequestResponse", 
        Payload: JSON.stringify(event), 
        // Qualifier: "1"
       };
    let lambdaRes = await lambda.invoke(params).promise();
    console.log(lambdaRes);
    res.status(lambdaRes.StatusCode).send(lambdaRes.Payload)
}

module.exports = {invoke}