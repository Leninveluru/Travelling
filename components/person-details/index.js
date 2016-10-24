import template from './template.html';

function personDetailsController($scope, dataService) {
	'ngInject';

	$scope.addinfo = function(){
		dataService.setData($scope.pass)
		$scope.$parent.$parent.tabset.active = 2;
	}
}


export default {
	template: template,
	controller: personDetailsController
};