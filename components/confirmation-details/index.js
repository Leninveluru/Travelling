import template from './template.html';

function confirmationDetailsController($scope, $http, dataService) {
  'ngInject';

  $scope.mailContent = dataService.getData();

  $scope.onSubmit = function(user){
    var mailContent = $scope.mailContent;
    $http({  
      method: 'GET',
      url: 'http://localhost:5000/postEmail?email='+mailContent[1].mail+
      '&fName='+mailContent[1].frstName+
      '&lName='+mailContent[1].lastName+
      '&startdt='+mailContent[0].departureDate+
      '&returndt='+mailContent[0].returnDate+
      '&mobile='+mailContent[1].phno+
      '&from='+mailContent[0].from+
      '&to='+mailContent[0].to
    }).then(function successCallback(response) {
      alert('eMail sent successfully!');
      console.log('response',response);
    });
  };
}

export default {
  template: template,
  controller: confirmationDetailsController
};
