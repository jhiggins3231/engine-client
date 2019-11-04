let APIURL = '';

switch (window.location.hostname) {
    // this is the local host name of your react app
    case 'localhost' || 'localhost:3000':
        // this is the local host name of your API
        APIURL = 'http://localhost:3000/';
        break;
    // this is the deployed react application
    case 'jh-wishlistclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://jh-wishlistserver.herokuapp.com/'
        break;
    default:
}

export default APIURL;