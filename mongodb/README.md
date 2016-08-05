# Day 2 - MongoDB
Next, we looked at [MongoDB](http://www.mongodb.com)! Follow along in [our tutorial](https://developer.ibm.com/clouddataservices/2016/08/05/7-databases-7-days-mongodb/).

## Setup and Configuration
Start by creating a MongoDB instance at [Compose](https://compose.com/). There is some more information about connecting to MongoDB on Compose [here](https://www.compose.com/articles/connecting-to-the-new-mongodb-at-compose/).

Alternativley, you could also [download](https://www.mongodb.com/download-center) and run it locally if you wish.

This time around we're using PHP, so you will need that installed on your machine. You will also need the [MongoDB PHP Extension](https://docs.mongodb.com/ecosystem/drivers/php/).

You should also grab the [MongoDB PHP Driver](http://mongodb.github.io/mongo-php-library/).

We have provided a `connect.php` file that contains all of the connection information - you will need to modify this to include the username, password, hostname and port supplied on the Compose dashboard.

### Secure Connection
We used a [Compose hosted MongoDB](http://www.compose.com/mongodb) to build our samples, so this means we were required to use SSL. If you are doing the same, make sure that you download your SSL certificate from the Compose dashboard for use later on.

If you name your certificate file `cert` and drop it into the `/mongodb` directory, then it should work as is.

If you are not using Compose or SSH, then you will need to modify the examples in the blog to remove reference to this certificate.

## Running the samples

There are a number of files that you should be aware of, they should all be accessed via your browser. It will all make sense if you follow along with our [blog post](https://developer.ibm.com/clouddataservices/2016/08/05/7-databases-7-days-mongodb/), but for your pece of mind here is a quick description of what each file does!

### connect.php
This file is required by all subsequent files, and contains all of the configuration needed to connect to your MongoDB instance.

### add_post.php
This will allow you to complete a form to add a post to your MongoDB instance.

### index.php
This will list all of the current posts.

### post.php
This will display an individual post.
