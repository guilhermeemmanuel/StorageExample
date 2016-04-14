angular.module("storageExample").controller("contactCtrl", function($scope) {
	$scope.contacts = [
		{name:"Jonh", email:"jonh@emb.com", phone:"(342) 988-8923"}
	];
	$scope.addContact = function(contact) {
		$scope.contacts.push(angular.copy(contact));
		$scope.eraseContactForm();
		
	}
	$scope.eraseContactForm = function() {
		delete $scope.contact;
		$scope.contactForm.$setPristine();
	}
});