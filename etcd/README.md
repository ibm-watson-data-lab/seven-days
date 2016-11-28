# Day 5 - Etcd
Next, we looked at [Etcd](https://coreos.com/etcd/)! Follow along in [our tutorial](https://developer.ibm.com/clouddataservices/2016/10/31/7-databases-7-days-etcd/).

## Setup and Configuration
Start by creating an Etcd instance on [Bluemix](https://bluemix.com/).

Alternativley, you could also [download](https://github.com/coreos/etcd) and run it locally if you wish.

We have provided a `connect.js` file that contains all of the connection information - you will need to modify this to include the connection information supplied in the Bluemix dashboard or to reference your local installation.

### Secure Connection
These examples use a connection that requires SSL as our etcd runs in the cloud. If you are doing the same, make sure that you download your SSL certificate from the Service Credentials tab on the dashboard of your etcd service for use later on.

If you name your certificate file `cert` and drop it into the `/etcd` directory, then it should work as is.

If you are not using etcd over SSH, then you will need to modify the examples in the blog to remove reference to this certificate.

## Running the samples
All of the code samples in the `/etcd` directory are written in JavaScript to be used with Node.JS, `npm install` should get you all of the dependencies you require, then you can run the program with `node etcd.js --service [servicename]` where `[servicename]` is the service you have created and want to work with (in the tutorial example this is `api`).

Follow along with the tutorial linked at the top of this page!
