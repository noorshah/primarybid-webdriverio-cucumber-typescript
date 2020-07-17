# webdriverio-typescript-primarybid

This is a test framwork that is testing the website of Primary Bid.

It is based on typescript, cucumberJS, webdriverIO.

To insall the node packages do the following.

``npm install``

To run the tests do 

`` USER=${username} PASSWORD=${password} URL=${password} npm run test``

In the above command the username, password or url could be for your local or pre prod environment.

Once the test suite has run you can generate an html report as well by running the command

`` npm run report``

The project consists of a features/ folder which has all the cucumber .feature files.

The step-definitions/ folder has corresponding step definitions for each feature file.

The page-objects/ folder has page object class for each page of the application that the framework is testing/

There is also a support folder which  has environment configuration. This configuration takes the ENVIRONMENT VARIABLES and passes them to the tests.

There is a screenshots/ folder where upon a failure screenhots are saved named after the scenario that failed.

There is a jsonFolder/ folder which stores the cucumber .json reports that are generated after the test suite finished running.

This project is using the Matcher options that come with WebdriverIO for better logging when tests fail. Also the pages are being exported to the step definitions via constants. Although some consider it good practice to encapsulate all webdriver related functionality in page objects wherever the browser intercation was self explanatory I have executed most interactions within the step definitions 

All the node modules are stored in the node_modules folder 


If any questions while running the tests or any blocks please let me know through the comments section

