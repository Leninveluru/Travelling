import controller from '../compositions/main-page/controller';
import template from '../compositions/main-page/index.html';

export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/register');

    $stateProvider
        .state('default', {
            url: '/register',
            template: template,
            controller: controller
        });
}