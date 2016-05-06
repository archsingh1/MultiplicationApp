var subtractionAppMixed = angular.module('subtractionAppMixed', []);

subtractionAppMixed.factory('subMixedData', function(){
	var subMixedData={} ;
	
	subMixedData.num1 = 10 + Math.round(Math.random()*90) + 2;
	subMixedData.num2 = 1 + Math.round(Math.random()*9) ;
	
	subMixedData.subValMixed = subMixedData.num1  - subMixedData.num2 ;
	
	console.log(subMixedData.num1);
	
	// Generate the random answers
	subMixedData.ranAns1 = subMixedData.subValMixed + Math.floor(Math.random() * 3) + 1;
	subMixedData.ranAns2 = subMixedData.subValMixed - Math.round(Math.random() * 3) - 1;
	
	//Create an array with the answers
	subMixedData.oldArr = [subMixedData.ranAns1, subMixedData.ranAns2, subMixedData.subValMixed];
	subMixedData.currentIndex = subMixedData.oldArr.length; 
	subMixedData.randomIndex = 0;
	subMixedData.temporaryValue = 0;
	
	console.log(subMixedData.oldArr);
	
	//Randomize the array
	while(0 !== subMixedData.currentIndex){
		subMixedData.randomIndex = Math.floor(Math.random() * subMixedData.currentIndex);
		subMixedData.currentIndex -= 1;
		subMixedData.temporaryValue = subMixedData.oldArr[subMixedData.currentIndex];
		subMixedData.oldArr[subMixedData.currentIndex] =  subMixedData.oldArr[subMixedData.randomIndex];
		subMixedData.oldArr[subMixedData.randomIndex] = subMixedData.temporaryValue ;
	}
	
	console.log(subMixedData.oldArr);
	
	subMixedData.getData = function(){
		var sub_MixedData={} ;
		sub_MixedData.num1 = 10 + Math.round(Math.random()*90) + 2;
		sub_MixedData.num2 = 1 + Math.round(Math.random()*9) ;
		
		sub_MixedData.subValMixed = sub_MixedData.num1  - sub_MixedData.num2 ;
		
		// Generate the random answers
		sub_MixedData.ranAns1 = sub_MixedData.subValMixed + Math.floor(Math.random() * 3) + 1;
		sub_MixedData.ranAns2 = sub_MixedData.subValMixed - Math.round(Math.random() * 3) - 1;
		
		//Create an array with the answers
		sub_MixedData.oldArr = [sub_MixedData.ranAns1, sub_MixedData.ranAns2, sub_MixedData.subValMixed];
		sub_MixedData.currentIndex = sub_MixedData.oldArr.length; 
		sub_MixedData.randomIndex = 0;
		sub_MixedData.temporaryValue = 0;
		
		console.log(sub_MixedData.oldArr);
		
		//Randomize the array
		while(0 !== sub_MixedData.currentIndex){
			sub_MixedData.randomIndex = Math.floor(Math.random() * sub_MixedData.currentIndex);
			sub_MixedData.currentIndex -= 1;
			sub_MixedData.temporaryValue = sub_MixedData.oldArr[sub_MixedData.currentIndex];
			sub_MixedData.oldArr[sub_MixedData.currentIndex] =  sub_MixedData.oldArr[sub_MixedData.randomIndex];
			sub_MixedData.oldArr[sub_MixedData.randomIndex] = sub_MixedData.temporaryValue ;
		}
		console.log(sub_MixedData.oldArr);
		return sub_MixedData;
	}
	
	return subMixedData;
}); //subMixedData

subtractionAppMixed.controller("subMixedCtrl", function($scope, $ionicPopup, subMixedData){
	$scope.subMixed = {};
	$scope.subMixed.num1 = subMixedData.num1;
	$scope.subMixed.num2 =  subMixedData.num2;
	$scope.subMixed.subValMixed = subMixedData.subValMixed;
	$scope.subMixed.oldArr = subMixedData.oldArr;
	
	$scope.newRandom = function(){
		$scope.sub_MixedData = subMixedData.getData();
		$scope.subMixed.num1 = $scope.sub_MixedData.num1;
		$scope.subMixed.num2 =  $scope.sub_MixedData.num2;
		$scope.subMixed.subValMixed = $scope.sub_MixedData.subValMixed;
		$scope.subMixed.oldArr = $scope.sub_MixedData.oldArr;
		
		return $scope.subMixed;
	}//End newRandom
	
	//Define the functions for the individual button clicks
	$scope.oldArr0 = function(){
		if($scope.subMixed.oldArr[0] == $scope.subMixed.subValMixed){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					   console.log($scope.subMixed);
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
						template:'<div class="popupTemp">'+$scope.subMixed.subValMixed+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.subMixed);
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
		if($scope.subMixed.oldArr[1] == $scope.subMixed.subValMixed){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					    $scope.newRandom();
					    console.log($scope.subMixed);
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
						template:'<div class="popupTemp">'+$scope.subMixed.subValMixed+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.subMixed);
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
		if($scope.subMixed.oldArr[2] == $scope.subMixed.subValMixed){
			var myPopup = $ionicPopup.show({
				title:"Good Job!",
				buttons: [
				   {
					text: '<b>Next</b>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
					    console.log($scope.subMixed);
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
						template:'<div class="popupTemp">'+$scope.subMixed.subValMixed+'<div>',
						buttons:[
							{
								text: '<b>OK</b>',
								type: 'button-positive',
								onTap: function(e) {
									$scope.newRandom();
									console.log($scope.subMixed);
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
	
	
}); //End subMixedCtrl Controller