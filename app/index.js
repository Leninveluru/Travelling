import routes from '../routes/routes';
import bookingPage from '../compositions/main-page/index';

angular.module('Traveller', [
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.select',
        bookingPage
    ])
    .config(routes)
    .constant('appName', 'Traveller');