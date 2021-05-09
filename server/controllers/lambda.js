let AWS = require(`aws-sdk`);
const lambda = new AWS.Lambda({ region: `us-east-1`});

const invoke = async (req, res) => {
    const {event, lambdaName} = req.body;
    console.log(`event ${event}, lambdaName ${lambdaName}`);
    let params = {
        FunctionName: lambdaName, 
        InvocationType: "Event", 
        Payload: JSON.stringify(event), 
        Qualifier: "1"
       };
    let lambdaRes = await lambda.invoke(params).promise();
    console.log(lambdaRes);
    console.log(`payload ${res.Payload}`);
    res.send(JSON.stringify(lambdaRes))
}

module.exports = {invoke}