<template>
    <div id="mainDiv">

        <div id="title"> Documentation </div>

        <Sidebar />

        <div id="doctitle">
            Functional Docs
        </div>

        <div id="docsubtitile">
            Add-Cron
        </div>


        <div id="doccontent">
            You can register your cron on this page, there is a simple form where you have to enter a little details about the cron and the people that you want us to notify at the point when your cron was not executed at the time it was supposed to.
            <p> Most of the form fields are simple to fill, just the cron statement which is a bit tricky. </p>
            <p>  
                For this you can write cron statement to make your cron run in two ways:
                    <ul>
                    <li> Rate Expressions </li>
                    <li> Cloudwatch cron expression </li>
                    </ul>
            </p>
        </div>
        
        <div id="docsubsubtitile">
            Rate Expressions
        </div>

        <div id="doccontent">
            Syntax: rate(value unit)

            <p> value: A positive number. </p>

            <p> Unit: The unit of time. Different units are required for values of 1, such as minute, and values over 1, such as minutes. </p>

            <p> Valid values: minute | minutes | hour | hours | day | days </p>

            <p> Examples: rate(1 day), rate(3 days) </p>

    
        </div>


        <div id="docsubsubtitile">
            Cloudwatch cron expression
        </div>

        <div id="doccontent">
            Cron expressions have six required fields, which are separated by white space.
            <p>    Syntax: cron(Feilds)  </p>
    
        </div>
        <div id="doccontent">
            Please go through the below link, to get the complete idea about how you can write your cron statement.

            <p><b-link target="_blank" href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html"> docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html </b-link> </p>

            And just to make sure this doesn’t check the cron before the cron has executed, make sure you add a 5-10 minutes lag here.

            <p> <strong> Adding the the cron just does not ensure that your cron is being monitored, you must tap on StartWatching link from the dashboard to start monitoring it. </strong></p>
    
        </div>

        <div id="separator"> ... </div>
        <div id="docsubtitile">
            Hit Your Cron
        </div>

        <div id="doccontent">
            After you have successfully registered your cron, We will share you a url and you have to make a put request to that particular url whenever your cron is executed with a body, format is shared below, and that way we will record your cron as executed.
        </div>

        <div id="separator"> ... </div>
        <div id="docsubtitile">
            Dashboard
        </div>

        <div id="doccontent">
            Suppose you have a registered cron, then you can see your dashboard containing the info about your cron, and other things like the recipients and the previous timestamp of your cron.
If you need to update and know your stuff, It’s the page you want to check.

        </div>

                <!-- <div id="docsubtitile">
            Add-Cron
        </div>

        <div id="doccontent">
            content
        </div> -->

        <div id="separator"> ... </div>
        <div id="doctitle">
            Technical Docs
        </div>

        <div id="docsubtitile">
            Technology Stack
        </div>

        <div id="doccontent">
            <ul>
            <li>For front end: Nuxt Js (SSR framework for VueJs). </li>
            <li>For Back end: Node Js (Express)</li>
            <li>For Deployment: Serverless deployment on AWS cloud (AWS lambda- for both FE and BE) </li>
            <li>For Other Microservices: AWS lambda and Cloudwatch Events </li>
            <li>Frameworks: serverless, nuxtJs, express, node-aws-sdk</li>
            </ul>
        </div>

        <div id="separator"> ... </div>
        <div id="docsubtitile">
            Flow of the application
        </div>

        <div id="doccontent">
            Suppose the cron is registered using the add-cron link from the webapp.
            <ul>
                <li> First this cron’s info would be stored in DB.</li>
                <li> SNS Group and LastHit record would also be created and saved in DB.</li>
            </ul>
            <p> Now users can view their dashboard and make changes if they want to update something.
At this point, we have the user’s info in our DB, but still to monitor it the user must tap on Start watching link on the cron’s dashboard. </p>
            <p> When user hits startwatching, then a cloud watch event rule would be created and mapped to a lambda function which will check if the cron has been executed in last 10 minutes and update the db, if cron is executed then it will do nothing, if not executed, it will alert the recipient in the SNS group telling that their cron has not been executed at this particular time. </p>
            <p> After you have started monitoring the lambda, so after the put request, we will update the timestamp in DB and that’s how we will check whether the cron has been executed or not.  </p>
            <p> <strong> This whole thing has been implemented completely serverless and under the free tier in AWS.  </strong></p> 
        </div>

        <div id="separator"> ... </div>
        <div id="docsubtitile">
            Using Lambda
        </div>

        <div id="doccontent">
            I have privileged AWS lambda functions for a lot of things

            <ul>
                <li> For the backend and frontend</li>
                <li> Invoking another lambda function</li>
                <li> Creating and removing Cloudwatch Event Rules</li>
                <li> Adding permission in lambda so as it can be triggered by cloudwatch events</li>
            </ul>
        </div>

        <div id="separator"> ... </div>
<!-- 
                <div id="docsubtitile">
            docsubtitle
        </div>

        <div id="doccontent">
            content
        </div> -->
    </div>
</template>

<style scoped>

    #separator{
        letter-spacing: 1vw;
        text-align: center;
        font-size: 4vw;
        font-weight: 300;
        padding-top: 1%;
    }

    #title{
        font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 5vw;
    color: #35495e;
    letter-spacing: 1px;
    text-align: center;
    }

    #mainDiv{
        min-height: 87vh;
        margin: 8%;
        margin-top: 4%;
        max-width: 100vw;
    }

    #doctitle{
        font-size: 4vw;
        font-weight: 400;
        color: #35495e;
        padding-bottom: 3%;
        padding-top: 3%;
    }


    #docsubtitile{
        font-size: 3vw;
        font-weight: 350;
        color: #35495e;
        padding-bottom: 1%;
        padding-top: 1%;
    }


    #docsubsubtitile{
        font-size: 2.5vw;
        font-weight: 320;
        color: #35495e;
        padding-bottom: 1%;
        padding-top: 1%;
    }

    p{
        margin-top: 0.5%;
    }


    #doccontent{
        font-size: 2vw;
        color: #476585;
    }
</style>