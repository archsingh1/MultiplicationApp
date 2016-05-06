var subtractionApp2 = angular.module('subtractionApp2', []);

subtractionApp2.factory('subApp2Data', function(){
	var subApp2Data={} ;
	
	subApp2Data.num_1 = 10 + Math.floor(Math.random()*90);
	subApp2Data.num_2 = 10 + Math.floor(Math.random()*90) ;
	
	if(subApp2Data.num_1 > subApp2Data.num_2){
		subApp2Data.num1 = subApp2Data.num_1;
		subApp2Data.num2 = subApp2Data.num_2;
	}
	else{
	 subApp2Data.num1 = subApp2Data.num_2 ;
	 subApp2Data.num2 = subApp2Data.num_1 ;
	}
	
		
	subApp2Data.subVal2 = subApp2Data.num1  - subApp2Data.num2 ;
	
	console.log(subApp2Data.num1);
	
	// Generate the random answers

	if (subApp2Data.subVal2 == 0) {
		subApp2Data.ranAns1 = 1;
		subApp2Data.ranAns2 = subApp2Data.subVal2 + Math.floor(Math.random() * 3) + 2 ;
	} else if(subApp2Data.subVal2 == 1) {
		subApp2Data.ranAns1 = 0;
		subApp2Data.ranAns2 = subApp2Data.subVal2 + Math.floor(Math.random() * 3) + 1 ;
	} else if(subApp2Data.subVal2 == 2) {
		subApp2Data.ranAns1 = subApp2Data.subVal2 - Math.floor(Math.random() * 2) - 1 ;
		subApp2Data.ranAns2 = subApp2Data.subVal2 + Math.floor(Math.random() * 2) + 1 ;
	} else {
		subApp2Data.ranAns1 = subApp2Data.subVal2 - Math.floor(Math.random() * 3) - 1 ;
		subApp2Data.ranAns2 = subApp2Data.subVal2 + Math.floor(Math.random() * 3) + 1 ;		
	}

	//Create an array with the answers
	subApp2Data.oldArr = [subApp2Data.ranAns1, subApp2Data.ranAns2, subApp2Data.subVal2];
	subApp2Data.currentIndex = subApp2Data.oldArr.length; 
	subApp2Data.randomIndex = 0;
	subApp2Data.temporaryValue = 0;
	
	console.log(subApp2Data.oldArr);
	
	//Randomize the array
	while(0 !== subApp2Data.currentIndex){
		subApp2Data.randomIndex = Math.floor(Math.random() * subApp2Data.currentIndex);
		subApp2Data.currentIndex -= 1;
		subApp2Data.temporaryValue = subApp2Data.oldArr[subApp2Data.currentIndex];
		subApp2Data.oldArr[subApp2Data.currentIndex] =  subApp2Data.oldArr[subApp2Data.randomIndex];
		subApp2Data.oldArr[subApp2Data.randomIndex] = subApp2Data.temporaryValue ;
	}
	
	console.log(subApp2Data.oldArr);
	
	//Generate new random numbers when the buttons are clicked and pass them to the scope
	subApp2Data.getData = function(){
		var subApp_2Data={} ;
	
		subApp_2Data.num_1 = 10 + Math.floor(Math.random()*90);
		subApp_2Data.num_2 = 10 + Math.floor(Math.random()*90) ;
		
		if(subApp_2Data.num_1 > subApp_2Data.num_2){
			subApp_2Data.num1 = subApp_2Data.num_1;
			subApp_2Data.num2 = subApp_2Data.num_2;
		}
		else{
		 subApp_2Data.num1 = subApp_2Data.num_2 ;
		 subApp_2Data.num2 = subApp_2Data.num_1 ;
		}
		
		subApp_2Data.subVal2 = subApp_2Data.num1  - subApp_2Data.num2 ;
		
		console.log(subApp_2Data.num1);
		// Generate the random answers
	
		if (subApp_2Data.subVal2 == 0) {
			subApp_2Data.ranAns1 = 1;
			subApp_2Data.ranAns2 = subApp_2Data.subVal2 + Math.floor(Math.random() * 3) + 2 ;
		} else if(subApp_2Data.subVal2 == 1) {
			subApp_2Data.ranAns1 = 0;
			subApp_2Data.ranAns2 = subApp_2Data.subVal2 + Math.floor(Math.random() * 3) + 1 ;
		} else if(subApp_2Data.subVal2 == 2) {
			subApp_2Data.ranAns1 = subApp_2Data.subVal2 - Math.floor(Math.random() * 2) - 1 ;
			subApp_2Data.ranAns2 = subApp_2Data.subVal2 + Math.floor(Math.random() * 2) + 1 ;
		} else {
			subApp_2Data.ranAns1 = subApp_2Data.subVal2 - Math.floor(Math.random() * 3) - 1 ;
			subApp_2Data.ranAns2 = subApp_2Data.subVal2 + Math.floor(Math.random() * 3) + 1 ;		
		}

		//Create an array with the answers
		subApp_2Data.oldArr = [subApp_2Data.ranAns1, subApp_2Data.ranAns2, subApp_2Data.subVal2];
		subApp_2Data.currentIndex = subApp_2Data.oldArr.length; 
		subApp_2Data.randomIndex = 0;
		subApp_2Data.temporaryValue = 0;
		
		console.log(subApp_2Data.oldArr);
		
		//Randomize the array
		while(0 !== subApp_2Data.currentIndex){
			subApp_2Data.randomIndex = Math.floor(Math.random() * subApp_2Data.currentIndex);
			subApp_2Data.currentIndex -= 1;
			subApp_2Data.temporaryValue = subApp_2Data.oldArr[subApp_2Data.currentIndex];
			subApp_2Data.oldArr[subApp_2Data.currentIndex] =  subApp_2Data.oldArr[subApp_2Data.randomIndex];
			subApp_2Data.oldArr[subApp_2Data.randomIndex] = subApp_2Data.temporaryValue ;
		}
		
		console.log(subApp_2Data.oldArr);
	
		return subApp_2Data;
	}
	
	return subApp2Data;
	
	
}); //subApp2Data

subtractionApp2.controller("subDigit2Ctrl", function($scope, $ionicPopup, subApp2Data){
	$scope.sub2 = {};
	$scope.sub2.num1 = subApp2Data.num1;
	$scope.sub2.num2 =  subApp2Data.num2;
	$scope.sub2.subVal2 = subApp2Data.subVal2;
	$scope.sub2.oldArr = subApp2Data.oldArr;
	
	$scope.newRandom = function(){
		$scope.subApp_2Data = subApp2Data.getData();
		$scope.sub2.num1 = $scope.subApp_2Data.num1;
		$scope.sub2.num2 =  $scope.subApp_2Data.num2;
		$scope.sub2.subVal2 = $scope.subApp_2Data.subVal2;
		$scope.sub2.oldArr = $scope.subApp_2Data.oldArr;
		
		return $scope.sub2;
	}//End newRandom
	
	//Define the functions for the individual button clicks
	$scope.oldArr0 = function(){
		if($scope.sub2.oldArr[0] == $scope.sub2.subVal2){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					   console.log($scope.sub2);
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
						template:'<div class="popupTemp">'+$scope.sub2.subVal2+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.sub2);
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
		if($scope.sub2.oldArr[1] == $scope.sub2.subVal2){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					    $scope.newRandom();
					    console.log($scope.sub2);
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
						template:'<div class="popupTemp">'+$scope.sub2.subVal2+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.sub2);
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
		if($scope.sub2.oldArr[2] == $scope.sub2.subVal2){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					    console.log($scope.sub2);
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
						template:'<div class="popupTemp">'+$scope.sub2.subVal2+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.sub2);
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
	
	
}); //End subDigit2Ctrl Controller