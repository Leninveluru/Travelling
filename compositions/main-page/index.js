import journeyDetails from '../../components/journey-details';
import personDetails from '../../components/person-details';
import confirmationDetails from '../../components/confirmation-details';
import dataService from '../../compositions/main-page/data-service.js'

const MODULE_NAME = 'Traveller.register';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
	.service('dataService',dataService)
    .component('journeyDetails', journeyDetails)
    .component('personDetails', personDetails)
    .component('confirmationDetails', confirmationDetails);