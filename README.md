# cron-checker
## Technical Docs
### Technology Stack

* For front end: Nuxt Js (SSR framework for VueJs).
* For Back end: Node Js (Express)
* For Deployment: Serverless deployment on AWS cloud (AWS lambda- for both FE and BE)
* For Other Microservices: AWS lambda and Cloudwatch Events
* Frameworks: serverless, nuxtJs, express, node-aws-sdk

### Flow of the application

Suppose the cron is registered using the add-cron link from the webapp.
* First this cron’s info would be stored in DB.
* SNS Group and LastHit record would also be created and saved in DB.
Now users can view their dashboard and make changes if they want to update something. At this point, we have the user’s info in our DB, but still to monitor it the user must tap on Start watching link on the cron’s dashboard.

When user hits startwatching, then a cloud watch event rule would be created and mapped to a lambda function which will check if the cron has been executed in last 10 minutes and update the db, if cron is executed then it will do nothing, if not executed, it will alert the recipient in the SNS group telling that their cron has not been executed at this particular time.

After you have started monitoring the lambda, so after the put request, we will update the timestamp in DB and that’s how we will check whether the cron has been executed or not.

This whole thing has been implemented completely serverless and under the free tier in AWS.

### Using Lambda

* I have privileged AWS lambda functions for a lot of things
* For the backend and frontend
* Invoking another lambda function
* Creating and removing Cloudwatch Event Rules
* Adding permission in lambda so as it can be triggered by cloudwatch events


## Functional Docs

### Add-Cron

You can register your cron on this page, there is a simple form where you have to enter a little details about the cron and the people that you want us to notify at the point when your cron was not executed at the time it was supposed to.
Most of the form fields are simple to fill, just the cron statement which is a bit tricky.

For this you can write cron statement to make your cron run in two ways:
* Rate Expressions
* Cloudwatch cron expression

#### Rate Expressions

Syntax: rate(value unit)
value: A positive number.

Unit: The unit of time. Different units are required for values of 1, such as minute, and values over 1, such as minutes.

Valid values: minute | minutes | hour | hours | day | days

Examples: rate(1 day), rate(3 days)

#### Cloudwatch cron expression

Cron expressions have six required fields, which are separated by white space.
Syntax: cron(Feilds)

Please go through the below link, to get the complete idea about how you can write your cron statement.
docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html

And just to make sure this doesn’t check the cron before the cron has executed, make sure you add a 5-10 minutes lag here.
Adding the the cron just does not ensure that your cron is being monitored, you must tap on StartWatching link from the dashboard to start monitoring it.

### Hit Your Cron

After you have successfully registered your cron, We will share you a url and you have to make a put request to that particular url whenever your cron is executed with a body, format is shared below, and that way we will record your cron as executed.

* url: https://api.iamonlambda.xyz/api/hit
* {
	"cron_id": "id communicated to you",
	"testing": boolean  // true if you want to just test your cron and false when you monitor your cron.
  }

### Dashboard

Suppose you have a registered cron, then you can see your dashboard containing the info about your cron, and other things like the recipients and the previous timestamp of your cron. If you need to update and know your stuff, It’s the page you want to check.