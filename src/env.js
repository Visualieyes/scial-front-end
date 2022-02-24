const config = {
    API_URL:'https://scial-app-cv526.ondigitalocean.app'
}

const {
    API_URL = 'https://scial-app-cv526.ondigitalocean.app',
    ENV
} = process.env;


let local = ENV == 'local';

if (local){
    config.API_URL = 'https://scial-app-cv526.ondigitalocean.app';
} else {
    config.API_URL = API_URL;
}

export default config;