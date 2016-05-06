var additionAppMixed = angular.module('additionAppMixed', []);

additionAppMixed.factory('addMixedData', function(){
	var addMixedData={} ;
	
	addMixedData.num1 = 10 + Math.floor(Math.random()*90);
	addMixedData.num2 = 1 + Math.floor(Math.random()*9) ;
	addMixedData.addValMixed = addMixedData.num1  + addMixedData.num2 ;
	
	console.log(addMixedData.num1);
	// Generate the random answers
	addMixedData.ranAns1 = addMixedData.addValMixed + Math.floor(Math.random() * 3) + 1;
	addMixedData.ranAns2 = addMixedData.addValMixed - Math.floor(Math.random() * 3) - 1;
	
	//Create an array with the answers
	addMixedData.oldArr = [addMixedData.ranAns1, addMixedData.ranAns2, addMixedData.addValMixed];
	addMixedData.currentIndex = addMixedData.oldArr.length; 
	addMixedData.randomIndex = 0;
	addMixedData.temporaryValue = 0;
	
	console.log(addMixedData.oldArr);
	
	//Randomize the array
	while(0 !== addMixedData.currentIndex){
		addMixedData.randomIndex = Math.floor(Math.random() * addMixedData.currentIndex);
		addMixedData.currentIndex -= 1;
		addMixedData.temporaryValue = addMixedData.oldArr[addMixedData.currentIndex];
		addMixedData.oldArr[addMixedData.currentIndex] =  addMixedData.oldArr[addMixedData.randomIndex];
		addMixedData.oldArr[addMixedData.randomIndex] = addMixedData.temporaryValue ;
	}
	
	console.log(addMixedData.oldArr);
	
	addMixedData.getData = function(){
		var add_MixedData={} ;
	
		add_MixedData.num1 = 10 + Math.floor(Math.random()*90);
		add_MixedData.num2 = 1 + Math.floor(Math.random()*9) ;
		add_MixedData.addValMixed = add_MixedData.num1  + add_MixedData.num2 ;
		
		console.log(add_MixedData.num1);
		// Generate the random answers
		add_MixedData.ranAns1 = add_MixedData.addValMixed + Math.floor(Math.random() * 3) + 1;
		add_MixedData.ranAns2 = add_MixedData.addValMixed - Math.floor(Math.random() * 3) - 1;
		
		//Create an array with the answers
		add_MixedData.oldArr = [add_MixedData.ranAns1, add_MixedData.ranAns2, add_MixedData.addValMixed];
		add_MixedData.currentIndex = add_MixedData.oldArr.length; 
		add_MixedData.randomIndex = 0;
		add_MixedData.temporaryValue = 0;
		
		console.log(add_MixedData.oldArr);
		
		//Randomize the array
		while(0 !== add_MixedData.currentIndex){
			add_MixedData.randomIndex = Math.floor(Math.random() * add_MixedData.currentIndex);
			add_MixedData.currentIndex -= 1;
			add_MixedData.temporaryValue = add_MixedData.oldArr[add_MixedData.currentIndex];
			add_MixedData.oldArr[add_MixedData.currentIndex] =  add_MixedData.oldArr[add_MixedData.randomIndex];
			add_MixedData.oldArr[add_MixedData.randomIndex] = add_MixedData.temporaryValue ;
		}
		
		console.log(add_MixedData.oldArr);
	
		return add_MixedData;
	}
	
	return addMixedData;
	
}); //addMixedData

additionAppMixed.controller("addMixedCtrl", function($scope, $ionicPopup, addMixedData){
	$scope.addMixed = {};
	$scope.addMixed.num1 = addMixedData.num1;
	$scope.addMixed.num2 =  addMixedData.num2;
	$scope.addMixed.addValMixed = addMixedData.addValMixed;
	$scope.addMixed.oldArr = addMixedData.oldArr;
	
	$scope.newRandom = function(){
		$scope.add_MixedData = addMixedData.getData();
		$scope.addMixed.num1 = $scope.add_MixedData.num1;
		$scope.addMixed.num2 =  $scope.add_MixedData.num2;
		$scope.addMixed.addValMixed = $scope.add_MixedData.addValMixed;
		$scope.addMixed.oldArr = $scope.add_MixedData.oldArr;
		
		return $scope.addMixed;
	}//End newRandom
	
	//Define the functions for the individual button clicks
	$scope.oldArr0 = function(){
		if($scope.addMixed.oldArr[0] == $scope.addMixed.addValMixed){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					   console.log($scope.addMixed);
					}
				  }
				] //End buttons
			});
		}//End if
		else{
			var elsePopup = $ionicPopup.show({
				buttons: [
				   {
					text: '<b>Answer</b>',
					scope: $scope,
					type: 'button-balanced',
					onTap: function(e) {
					   $ionicPopup.show({
						title:"The answer is : ",
						template:'<div class="popupTemp">'+$scope.addMixed.addValMixed+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.addMixed);
								}
							}
						]//End button
					   });//End onTap
					}
				  }, //End Answer
				  {
					text: '<b>Try Again!</b>',
					type: 'button-assertive',
					onTap: function(e) {
					   elsePopup.close();
					}
				  }//End Try Again
				] //End buttons
			});
		}//End else
	
	}//End $scope.oldArr[0]
	
	$scope.oldArr1 = function(){
		if($scope.addMixed.oldArr[1] == $scope.addMixed.addValMixed){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					    $scope.newRandom();
					    console.log($scope.addMixed);
					}
				  }
				] //End buttons
			});
		}//End if
		else{
			var elsePopup = $ionicPopup.show({
				buttons: [
				   {
					text: '<b>Answer</b>',
					scope: $scope,
					type: 'button-balanced',
					onTap: function(e) {
					   $ionicPopup.show({
						title:"The answer is : ",
						template:'<div class="popupTemp">'+$scope.addMixed.addValMixed+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.addMixed);
								}
							}
						]//End button
					   });//End onTap
					}
				  }, //End Answer
				  {
					text: '<b>Try Again!</b>',
					type: 'button-assertive',
					onTap: function(e) {
					   elsePopup.close();
					}
				  }//End Try Again
				] //End buttons
			});
		}//End else
	
	}//End $scope.oldArr[1]
	
	$scope.oldArr2 = function(){
		if($scope.addMixed.oldArr[2] == $scope.addMixed.addValMixed){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					    console.log($scope.addMixed);
					}
				  }
				] //End buttons
			});
		}//End if
		else{
			var elsePopup = $ionicPopup.show({
				buttons: [
				   {
					text: '<b>Answer</b>',
					scope: $scope,
					type: 'button-balanced',
					onTap: function(e) {
					   $ionicPopup.show({
						title:"The answer is : ",
						template:'<div class="popupTemp">'+$scope.addMixed.addValMixed+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.addMixed);
								}
							}
						]//End button
					   });//End onTap
					}
				  }, //End Answer
				  {
					text: '<b>Try Again!</b>',
					type: 'button-assertive',
					onTap: function(e) {
					   elsePopup.close();
					}
				  }//End Try Again
				] //End buttons
			});
		}//End else
	
	}//End $scope.oldArr[2]
	
	
}); //End addDigit1Ctrl Controller