import personDetail from '../../components/person-details';
import routePlan from '../../components/route-plan';
import conformationDetails from '../../components/conformation-details';

const MODULE_NAME = 'Traveller.register';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .component('personDetail', personDetail)
    .component('routePlan', routePlan)
    .component('conformationDetails', conformationDetails);