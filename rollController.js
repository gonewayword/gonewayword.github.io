angular.module('rollApp', [])

.controller('rollCtrl', function($scope) {

	$scope.rollover = window.localStorage['rollover'];
	console.log(window.localStorage);

	$scope.resetBudget = () => {
		window.localStorage['rollover'] = 0;
		$scope.rollover = window.localStorage['rollover'];
	}

	$scope.setBudget = (amount) => {
		window.localStorage['rollover'] = amount;
		$scope.rollover = window.localStorage['rollover'];
		$scope.budgetValue = '';
	};

	$scope.subtract = (spent) => {
		window.localStorage['rollover'] -= spent;
		$scope.rollover = window.localStorage['rollover'];
		$scope.budget.spent = '';
	}

	$scope.newBeginning = (month, day, year) => {
		const beginning = new Date(`${month}, ${day}, ${year}`);
		const today = new Date();
		window.localStorage['rollover'] = Math.ceil((today.valueOf() - beginning.valueOf())/1000/60/60/24) * 30;
		$scope.rollover = window.localStorage['rollover'];
		$scope.budget.year = '';
		$scope.budget.month = '';
		$scope.budget.day = '';
	}

	window.localStorage['dayInMils'] = 24 * 60 * 60 * 1000;
	console.log(window.localStorage['dayInMils']);

	$scope.runOncePerDay = () => {
	  var today = new Date().toLocaleDateString();

	  // if this function already ran today, do not continue.
	  if( localStorage.yourapp_today == today ) return;

	  // save today's date on the client's computer
	  localStorage.yourapp_today = today;

	  // your code below
	  window.localStorage['rollover'] = parseInt(window.localStorage['rollover']) + 30;
	  $scope.rollover = window.localStorage['rollover'];
	}

	$scope.runOncePerDay();

	// window.localStorage['rollover'] = $scope.rollover;
})
