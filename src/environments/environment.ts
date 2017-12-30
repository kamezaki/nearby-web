// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBhgaNlzX40fNwU-lhAPRLgpaERYduqGek',
    authDomain: 'nearby-web.firebaseapp.com',
    databaseURL: 'https://nearby-web.firebaseio.com',
    projectId: 'nearby-web',
    storageBucket: 'nearby-web.appspot.com',
    messagingSenderId: '99280737852'
  }
};
