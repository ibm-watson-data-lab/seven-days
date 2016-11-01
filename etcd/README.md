# Day 5 - Etcd
Next, we looked at [Etcd](https://coreos.com/etcd/)! Follow along in [our tutorial](https://developer.ibm.com/clouddataservices/2016/10/31/7-databases-7-days-etcd/).

## Setup and Configuration
Start by creating an Etcd instance at [Compose](https://compose.com/).

Alternativley, you could also [download](https://github.com/coreos/etcd) and run it locally if you wish.

We have provided a `connect.js` file that contains all of the connection information - you will need to modify this to include the username, password, hostname and port supplied on the Compose dashboard or to reference your local installation.

### Secure Connection
We used a [Compose hosted Etcd](http://www.compose.com/etcd) to build our samples, so this means we were required to use SSL. If you are doing the same, make sure that you download your SSL certificate from the Compose dashboard for use later on.

If you name your certificate file `cert` and drop it into the `/etcd` directory, then it should work as is.

If you are not using Compose or SSH, then you will need to modify the examples in the blog to remove reference to this certificate.

## Running the samples
All of the code samples in the `/etcd` directory are written in JavaScript to be used with Node.JS, `npm install` should get you all of the dependencies you require.

Follow along with the tutorial linked at the top of this page!