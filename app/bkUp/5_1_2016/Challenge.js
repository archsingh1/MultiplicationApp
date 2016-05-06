var Challenge = angular.module('Challenge', ['multiplyFactory']);
Challenge.factory('chalData', function(){
	var chalData={} ;
    var MIN=1;
    var MAX=10;
    
	chalData.oldArr = [] ;
	chalData.num1 = getRandomIntInclusive(MIN,MAX);
	chalData.num2 = getRandomIntInclusive(MIN,MAX);
	chalData.mulVal1 = chalData.num1  * chalData.num2 ;
	
	// Generate the random answers
	chalData.ranAns1 = chalData.mulVal1 + getRandomIntInclusive(1,2);
	chalData.ranAns2 = chalData.mulVal1 - getRandomIntInclusive(1,2);
  
     //Make sure that the random answers that are generated are different from each other and are greater than zero
    while(! ((chalData.ranAns1 > 0) && 
        (chalData.ranAns2 > 0) && 
        (chalData.ranAns1 != chalData.ranAns2)) )
    {
        //Create an array with the answers
        chalData.ranAns1 = chalData.mulVal1 + getRandomIntInclusive(1,2);
        if(chalData.mulVal1==1) {
            chalData.ranAns2 = chalData.mulVal1 + getRandomIntInclusive(4,5);
        } else {
            chalData.ranAns2 = chalData.mulVal1 - getRandomIntInclusive(1,2);
        }
        //console.log('randomizing answers' + [chalData.ranAns1, chalData.ranAns2, chalData.mulVal1]);
    }
    chalData.oldArr = [chalData.ranAns1, chalData.ranAns2, chalData.mulVal1];
    
	//chalData.oldArr = [chalData.ranAns1, chalData.ranAns2, chalData.num2];
    chalData.currentIndex = chalData.oldArr.length; 
	chalData.randomIndex = 0;
	chalData.temporaryValue = 0;
    	
	//Randomize the array
	while(0 !== chalData.currentIndex){
		chalData.randomIndex = Math.floor(Math.random() * chalData.currentIndex);
		chalData.currentIndex -= 1;
		chalData.temporaryValue = chalData.oldArr[chalData.currentIndex];
		chalData.oldArr[chalData.currentIndex] =  chalData.oldArr[chalData.randomIndex];
		chalData.oldArr[chalData.randomIndex] = chalData.temporaryValue ;
	}
    
   // console.log('After Randomization: ' + chalData.oldArr);
	
	chalData.getData = function(){
		var chal_Data={} ;
	    chal_Data.oldArr = [];
		chal_Data.num1 = getRandomIntInclusive(MIN,MAX);
		chal_Data.num2 = getRandomIntInclusive(MIN,MAX);
		chal_Data.mulVal1 = chal_Data.num1  * chal_Data.num2 ;
		
		// Generate the random answers
		chal_Data.ranAns1 = chal_Data.mulVal1 + getRandomIntInclusive(1,2);
		chal_Data.ranAns2 = chal_Data.mulVal1 - getRandomIntInclusive(1,2);
        
        
        //Make sure that the random answers that are generated are different from each other and are greater than zero
        while(! ((chal_Data.ranAns1 > 0) && 
            (chal_Data.ranAns2 > 0) && 
            (chal_Data.ranAns1 != chal_Data.ranAns2)) )
        {
            //Create an array with the answers
            chal_Data.ranAns1 = chal_Data.mulVal1 + getRandomIntInclusive(1,2);
            if(chal_Data.mulVal1==1) {
                chal_Data.ranAns2 = chal_Data.mulVal1 + getRandomIntInclusive(4,5);
            } else {
                chal_Data.ranAns2 = chal_Data.mulVal1 - getRandomIntInclusive(1,2);
            }
            //console.log('randomizing answers' + [chal_Data.ranAns1, chal_Data.ranAns2, chal_Data.mulVal1]);
        }
        chal_Data.oldArr = [chal_Data.ranAns1, chal_Data.ranAns2, chal_Data.mulVal1];

		chal_Data.currentIndex = chal_Data.oldArr.length; 
		chal_Data.randomIndex = 0;
		chal_Data.temporaryValue = 0;
        
         //console.log('Before Randomization 1 : ' + chal_Data.oldArr);
				
		//Randomize the array
		while(0 !== chal_Data.currentIndex){
			chal_Data.randomIndex = Math.floor(Math.random() * chal_Data.currentIndex);
			chal_Data.currentIndex -= 1;
			chal_Data.temporaryValue = chal_Data.oldArr[chal_Data.currentIndex];
			chal_Data.oldArr[chal_Data.currentIndex] =  chal_Data.oldArr[chal_Data.randomIndex];
			chal_Data.oldArr[chal_Data.randomIndex] = chal_Data.temporaryValue ;
		}
        
        //console.log('After Randomization 1 : ' + chal_Data.oldArr);
					
		return chal_Data;
	}
	return chalData;	
}); //chalData

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/******************************************************************************************/
/**************************Controller for the app******************************************/
/******************************************************************************************/

Challenge.controller("ChallengeCtrl", function($scope, $ionicPopup, chalData, multiplyFunctions){
	$scope.challenge = {};
	$scope.challenge.num1 = chalData.num1;
	$scope.challenge.num2 =  chalData.num2;
	$scope.challenge.mulVal1 = chalData.mulVal1;
	$scope.challenge.oldArr = chalData.oldArr;
    
    //Define an object on the scope to store the functions from the multiplyFunctions factory
    $scope.mul_factory_obj = {} ;
    $scope.mul_factory_obj = multiplyFunctions ;
    
    //Clear the settimeouts when the page navigates to other sections
    $scope.$on('$locationChangeStart', function(event) {
        clearTimeout($scope.onloadRetry);
        clearTimeout($scope.onRetry);
    });

    //Increase the counter if the answer is correct
    $scope.count = 0;
    //Total number of questions to be displayed
    $scope.totalCount = 20 ; //Change this to 20 in the final version
    
    //Counter for wrong answer button clicks
    $scope.wrongBtnClick = 0 ;
  
	$scope.newRandom = function(){
		$scope.chal_Data = chalData.getData();
		$scope.challenge.num1 = $scope.chal_Data.num1;
		$scope.challenge.num2 =  $scope.chal_Data.num2;
		$scope.challenge.mulVal1 = $scope.chal_Data.mulVal1;
		$scope.challenge.oldArr = $scope.chal_Data.oldArr;
		
        //Set timeout for retry    
        $scope.onRetry = setTimeout($scope.retry, 10000);
        
        //cancel the first setTimeout
        clearTimeout($scope.onloadRetry);
  
        //set the buttons back to blue
        $scope.mul_factory_obj.rightClass();
        
        //Start the progress bar
        $scope.mul_factory_obj.progPlay();
        
        $scope.wrongBtnClick = 0 ; //Reset the value of wrongBtnClick 
        
        return $scope.challenge;
	}//End newRandom
	
	//Define the functions for the button clicks
	$scope.oldArray = function(oldArrval, ind){
        //console.log('oldArrval ' + oldArrval) ;
        
        //if the value of count is less than 20 continue with the game
        if($scope.count < $scope.totalCount){
            if(oldArrval == $scope.challenge.mulVal1){
                //increase the counter for the correct answer
                $scope.count++ ;
                               
               //cancel timeout for retry when the answer is correct
                clearTimeout($scope.onRetry);
                
                //generate a new question
                $scope.newRandom();
            }//End if
            //If the answer is wrong
            else if(oldArrval != $scope.challenge.mulVal1){
                //increase the count for wrong button click
                $scope.wrongBtnClick ++ ;
                
                //change the button color for the wrong answer
                $scope.mul_factory_obj.errorClass(ind);
                
                //if the number of wrong clicks is 2 then show the retry button
                if($scope.wrongBtnClick == 2){
                    //cancel the settimeout for retry and set another timeout for shorter duration
                    clearTimeout($scope.onRetry);
                    $scope.retry();
                    //$scope.wrongBtnClick = 0 ; //Reset the value of wrongBtnClick 
                }
     
            }//End else
       } //End outer if
        
        //Call the perfectScore function to end the game
        if($scope.count == $scope.totalCount){
            $scope.mul_factory_obj.perfectScore();
        }//End the game if the count is the same at totalCount
      
    }//End $scope.oldArray
    
    
    //Funtion to call for trying again in setTimeOut
    $scope.retry = function(){
		var myPopup = $ionicPopup.show({
           buttons: [
				   {
					text: '<strong>Retry</strong>&nbsp;&nbsp;<span class="ion-refresh"></span>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
                    }//onTap
				  }
				] //End buttons
        });
    }//End retry function
  
    //Call retry function after 10 seconds when the app is opened
    $scope.onloadRetry = setTimeout($scope.retry, 10000);
	
}); //End ChallengeCtrl Controller







