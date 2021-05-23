# cron-checker
## Technical Docs
### Technology Stack

* For front end: Nuxt Js (SSR framework for VueJs).
* For Back end: Node Js (Express)
For Deployment: Serverless deployment on AWS cloud (AWS lambda- for both FE and BE)
For Other Microservices: AWS lambda and Cloudwatch Events
Frameworks: serverless, nuxtJs, express, node-aws-sdk

### Flow of the application

Suppose the cron is registered using the add-cron link from the webapp.
First this cron’s info would be stored in DB.
SNS Group and LastHit record would also be created and saved in DB.
Now users can view their dashboard and make changes if they want to update something. At this point, we have the user’s info in our DB, but still to monitor it the user must tap on Start watching link on the cron’s dashboard.

When user hits startwatching, then a cloud watch event rule would be created and mapped to a lambda function which will check if the cron has been executed in last 10 minutes and update the db, if cron is executed then it will do nothing, if not executed, it will alert the recipient in the SNS group telling that their cron has not been executed at this particular time.

After you have started monitoring the lambda, so after the put request, we will update the timestamp in DB and that’s how we will check whether the cron has been executed or not.

This whole thing has been implemented completely serverless and under the free tier in AWS.

### Using Lambda

I have privileged AWS lambda functions for a lot of things
For the backend and frontend
Invoking another lambda function
Creating and removing Cloudwatch Event Rules
Adding permission in lambda so as it can be triggered by cloudwatch events