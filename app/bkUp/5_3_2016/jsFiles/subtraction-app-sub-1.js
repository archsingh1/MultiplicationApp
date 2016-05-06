var subtractionApp1 = angular.module('subtractionApp1', []);

subtractionApp1.factory('subApp1Data', function(){
	var subApp1Data={} ;
	
	subApp1Data.num_1 = 1 + Math.floor(Math.random()*9);
	subApp1Data.num_2 = 1 + Math.floor(Math.random()*9) ;
	
	if(subApp1Data.num_1 > subApp1Data.num_2){
		subApp1Data.num1 = subApp1Data.num_1;
		subApp1Data.num2 = subApp1Data.num_2;
	}
	else{
	 subApp1Data.num1 = subApp1Data.num_2 ;
	 subApp1Data.num2 = subApp1Data.num_1 ;
	}
		
	subApp1Data.subVal1 = subApp1Data.num1  - subApp1Data.num2 ;
	
	// Generate the random answers
	//subApp1Data.ranAns1 = subApp1Data.subVal1 + Math.floor(Math.random() * 3) + 1;
	//subApp1Data.ranAns2 = subApp1Data.subVal1 - Math.floor(Math.random() * 3) - 1;
	if(subApp1Data.subVal1 == 0) {
		subApp1Data.ranAns1 = Math.floor(Math.random() * 5) + 1;
		subApp1Data.ranAns2 = Math.floor(Math.random() * 4) + 6;
	} else if (subApp1Data.subVal1 == 1) {
		subApp1Data.ranAns1 = 0;
		subApp1Data.ranAns2 = Math.floor(Math.random() * (9 - (subApp1Data.subVal1 + 1))) 
			+ subApp1Data.subVal1 + 1;	
	} else {
		subApp1Data.ranAns1 = Math.floor(Math.random() * (subApp1Data.subVal1 - 1)) + 1;
		subApp1Data.ranAns2 = Math.floor(Math.random() * (9 - (subApp1Data.subVal1 + 1))) 
			+ subApp1Data.subVal1 + 1;
	}
	
	console.log(subApp1Data.ranAns1);
	
	if(subApp1Data.ranAns1 == subApp1Data.ranAns2){
		subApp1Data.ranAns1 = subApp1Data.ranAns1 + 1 ;
	}
	
	//Create an array with the answers
	subApp1Data.oldArr = [subApp1Data.ranAns1, subApp1Data.ranAns2, subApp1Data.subVal1];
	subApp1Data.currentIndex = subApp1Data.oldArr.length; 
	subApp1Data.randomIndex = 0;
	subApp1Data.temporaryValue = 0;
	
	console.log(subApp1Data.oldArr);
	
	//Randomize the array
	while(0 !== subApp1Data.currentIndex){
		subApp1Data.randomIndex = Math.floor(Math.random() * subApp1Data.currentIndex);
		subApp1Data.currentIndex -= 1;
		subApp1Data.temporaryValue = subApp1Data.oldArr[subApp1Data.currentIndex];
		subApp1Data.oldArr[subApp1Data.currentIndex] =  subApp1Data.oldArr[subApp1Data.randomIndex];
		subApp1Data.oldArr[subApp1Data.randomIndex] = subApp1Data.temporaryValue ;
	}
	
	console.log(subApp1Data.oldArr);
	
	subApp1Data.getData = function(){
		var subApp_1Data={} ;
	
		subApp_1Data.num_1 = 1 + Math.floor(Math.random()*9);
		subApp_1Data.num_2 = 1 + Math.floor(Math.random()*9) ;
		
		if(subApp_1Data.num_1 > subApp_1Data.num_2){
			subApp_1Data.num1 = subApp_1Data.num_1;
			subApp_1Data.num2 = subApp_1Data.num_2;
		}
		else{
		 subApp_1Data.num1 = subApp_1Data.num_2 ;
		 subApp_1Data.num2 = subApp_1Data.num_1 ;
		}
		
		subApp_1Data.subVal1 = subApp_1Data.num1  - subApp_1Data.num2 ;
		
		// Generate the random answers
		subApp_1Data.ranAns1 = subApp_1Data.subVal1 + Math.floor(Math.random() * 3) + 1;
		subApp_1Data.ranAns2 = subApp_1Data.subVal1 - Math.floor(Math.random() * 3) - 1;
		if(subApp_1Data.subVal1 == 0) {
			subApp_1Data.ranAns1 = Math.floor(Math.random() * 5) + 1;
			subApp_1Data.ranAns2 = Math.floor(Math.random() * 4) + 6;
		} else if(subApp_1Data.subVal1 == 1) {
			subApp_1Data.ranAns1 = 0;
			subApp_1Data.ranAns2 = Math.floor(Math.random() * (9 - (subApp_1Data.subVal1 + 1))) 
				+ subApp_1Data.subVal1 + 1;
		} else {
			subApp_1Data.ranAns1 = Math.floor(Math.random() * (subApp_1Data.subVal1 - 1) ) + 1;
			subApp_1Data.ranAns2 = Math.floor(Math.random() * (9 - (subApp_1Data.subVal1 + 1))) 
				+ subApp_1Data.subVal1 + 1;
		}
		//Create an array with the answers
		subApp_1Data.oldArr = [subApp_1Data.ranAns1, subApp_1Data.ranAns2, subApp_1Data.subVal1];
		subApp_1Data.currentIndex = subApp_1Data.oldArr.length; 
		subApp_1Data.randomIndex = 0;
		subApp_1Data.temporaryValue = 0;
		
		console.log(subApp_1Data.oldArr);
		
		//Randomize the array
		while(0 !== subApp_1Data.currentIndex){
			subApp_1Data.randomIndex = Math.floor(Math.random() * subApp_1Data.currentIndex);
			subApp_1Data.currentIndex -= 1;
			subApp_1Data.temporaryValue = subApp_1Data.oldArr[subApp_1Data.currentIndex];
			subApp_1Data.oldArr[subApp_1Data.currentIndex] =  subApp_1Data.oldArr[subApp_1Data.randomIndex];
			subApp_1Data.oldArr[subApp_1Data.randomIndex] = subApp_1Data.temporaryValue ;
		}
		
		console.log(subApp_1Data.oldArr);
	
		return subApp_1Data;
	}
	
	return subApp1Data;
	
}); //subApp1Data

subtractionApp1.controller("subDigit1Ctrl", function($scope, $ionicPopup, subApp1Data){
	$scope.sub1 = {};
	$scope.sub1.num1 = subApp1Data.num1;
	$scope.sub1.num2 =  subApp1Data.num2;
	$scope.sub1.subVal1 = subApp1Data.subVal1;
	$scope.sub1.oldArr = subApp1Data.oldArr;
	
	$scope.newRandom = function(){
		$scope.subApp_1Data = subApp1Data.getData();
		$scope.sub1.num1 = $scope.subApp_1Data.num1;
		$scope.sub1.num2 =  $scope.subApp_1Data.num2;
		$scope.sub1.subVal1 = $scope.subApp_1Data.subVal1;
		$scope.sub1.oldArr = $scope.subApp_1Data.oldArr;
		
		return $scope.sub1;
	}//End newRandom
	
	//Define the functions for the individual button clicks
	$scope.oldArr0 = function(){
		if($scope.sub1.oldArr[0] == $scope.sub1.subVal1){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					   console.log($scope.sub1);
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
						template:'<div class="popupTemp">'+$scope.sub1.subVal1+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.sub1);
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
		if($scope.sub1.oldArr[1] == $scope.sub1.subVal1){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					    $scope.newRandom();
					    console.log($scope.sub1);
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
						template:'<div class="popupTemp">'+$scope.sub1.subVal1+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.sub1);
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
		if($scope.sub1.oldArr[2] == $scope.sub1.subVal1){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					    console.log($scope.sub1);
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
						template:'<div class="popupTemp">'+$scope.sub1.subVal1+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.sub1);
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
	
	
}); //End subDigit1Ctrl Controller