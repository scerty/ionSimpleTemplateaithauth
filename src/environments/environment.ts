// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
 // api:'http://192.168.1.231/:8000/api' //wifi network
  api:'http://127.0.0.1:8000/api',// localhost,
  stripe_key:'pk_test_51H6eY2IqF7uTTyi6tHpJFUGg1Fb1Z7X11a6rwpgD1j3QHXu5tGEyuJLVVVdonPAIXvU9DIJHZ9ytWDsYVpCIKk5Q00lV9KgbzQ'
  //
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
