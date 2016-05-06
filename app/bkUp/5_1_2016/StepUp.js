var stepUp = angular.module('stepUp', ['multiplyFactory']);
stepUp.factory('stepUpData', function(){
	var stepUpData={} ;
    var MIN=1;
    var MAX=10;
    
	stepUpData.oldArr = [] ;
	stepUpData.num1 = getRandomIntInclusive(MIN,MAX);
	stepUpData.num2 = getRandomIntInclusive(MIN,MAX);
	stepUpData.mulVal1 = stepUpData.num1  * stepUpData.num2 ;
	
	// Generate the random answers
	stepUpData.ranAns1 = [(stepUpData.num1 + getRandomIntInclusive(1,2)), 
                          (stepUpData.num2 + getRandomIntInclusive(1,2))];
	stepUpData.ranAns2 = [(stepUpData.num1 - getRandomIntInclusive(1,2)), 
                          (stepUpData.num2 - getRandomIntInclusive(1,2))];
    
    stepUpData.correctAns =[stepUpData.num1, stepUpData.num2];
    
     //Make sure that the random answers that are generated are different from each other and are greater than zero
    while(! (((stepUpData.ranAns1[0] > 0) && (stepUpData.ranAns1[1] > 0)) && 
        ((stepUpData.ranAns2[0] > 0) && (stepUpData.ranAns2[1] > 0)) && 
        (stepUpData.ranAns1 != stepUpData.ranAns2)) )
    {
        //Create an array with the answers
        stepUpData.ranAns1 = [(stepUpData.num1 + getRandomIntInclusive(1,2)), 
                                (stepUpData.num2 + getRandomIntInclusive(1,2))];
        if((stepUpData.num1==1)  || (stepUpData.num2==1)) {
           stepUpData.ranAns2 = [(stepUpData.num1 + getRandomIntInclusive(4,5)), 
                                    (stepUpData.num2 + getRandomIntInclusive(4,5))];
        } else {
            stepUpData.ranAns2 = [(stepUpData.num1 - getRandomIntInclusive(1,2)), 
                                    (stepUpData.num2 - getRandomIntInclusive(1,2))];
        }
       // console.log('randomizing answers' + [stepUpData.ranAns1, stepUpData.ranAns2, stepUpData.num2]);
    }
    
    stepUpData.oldArr = [stepUpData.ranAns1, stepUpData.ranAns2, stepUpData.correctAns];
   
    //console.log('Before Randomization: ' + stepUpData.oldArr);
    
	stepUpData.currentIndex = stepUpData.oldArr.length; 
	stepUpData.randomIndex = 0;
	stepUpData.temporaryValue = 0;
    	
	//Randomize the array
	while(0 !== stepUpData.currentIndex){
		stepUpData.randomIndex = Math.floor(Math.random() * stepUpData.currentIndex);
		stepUpData.currentIndex -= 1;
		stepUpData.temporaryValue = stepUpData.oldArr[stepUpData.currentIndex];
		stepUpData.oldArr[stepUpData.currentIndex] =  stepUpData.oldArr[stepUpData.randomIndex];
		stepUpData.oldArr[stepUpData.randomIndex] = stepUpData.temporaryValue ;
	}
    
    //console.log('After Randomization: ' + stepUpData.oldArr);
	
	stepUpData.getData = function(){
		var stepUp_Data={} ;
	    stepUp_Data.oldArr = [];
		stepUp_Data.num1 = getRandomIntInclusive(MIN,MAX);
		stepUp_Data.num2 = getRandomIntInclusive(MIN,MAX);
		stepUp_Data.mulVal1 = stepUp_Data.num1  * stepUp_Data.num2 ;
        
		// Generate the random answers
	    stepUp_Data.ranAns1 = [(stepUp_Data.num1 + getRandomIntInclusive(1,2)), 
                                (stepUp_Data.num2 + getRandomIntInclusive(1,2))];
        stepUp_Data.ranAns2 = [(stepUp_Data.num1 - getRandomIntInclusive(1,2)), 
                                (stepUp_Data.num2 - getRandomIntInclusive(1,2))];
        stepUp_Data.correctAns =[stepUp_Data.num1, stepUp_Data.num2];
            
        //Make sure that the random answers that are generated are different from each other and are greater than zero
        while(! (((stepUp_Data.ranAns1[0] > 0) && (stepUp_Data.ranAns1[1] > 0)) && 
        ((stepUp_Data.ranAns2[0] > 0) && (stepUp_Data.ranAns2[1] > 0)) && 
        (stepUp_Data.ranAns1 != stepUp_Data.ranAns2)) )
        {
            //Create an array with the answers
            stepUp_Data.ranAns1 = [(stepUp_Data.num1 + getRandomIntInclusive(1,2)), 
                                (stepUp_Data.num2 + getRandomIntInclusive(1,2))];
            if((stepUp_Data.num1==1)  || (stepUp_Data.num2==1)) {
                stepUp_Data.ranAns2 = [(stepUp_Data.num1 + getRandomIntInclusive(4,5)), 
                                    (stepUp_Data.num2 + getRandomIntInclusive(4,5))];
            } else {
                stepUp_Data.ranAns2 = [(stepUp_Data.num1 - getRandomIntInclusive(1,2)), 
                                    (stepUp_Data.num2 - getRandomIntInclusive(1,2))];
            }
        }
       
        stepUp_Data.oldArr = [stepUp_Data.ranAns1, stepUp_Data.ranAns2, stepUp_Data.correctAns];
        //console.log('Before Randomization: ' + stepUp_Data.oldArr);
        
        stepUp_Data.currentIndex = stepUp_Data.oldArr.length; 
		stepUp_Data.randomIndex = 0;
		stepUp_Data.temporaryValue = 0;
      
		//Randomize the array
		while(0 !== stepUp_Data.currentIndex){
			stepUp_Data.randomIndex = Math.floor(Math.random() * stepUp_Data.currentIndex);
			stepUp_Data.currentIndex -= 1;
			stepUp_Data.temporaryValue = stepUp_Data.oldArr[stepUp_Data.currentIndex];
			stepUp_Data.oldArr[stepUp_Data.currentIndex] =  stepUp_Data.oldArr[stepUp_Data.randomIndex];
			stepUp_Data.oldArr[stepUp_Data.randomIndex] = stepUp_Data.temporaryValue ;
		}
        
        //console.log('After Randomization: ' + stepUp_Data.oldArr);
					
		return stepUp_Data;
	}
	return stepUpData;	
}); //stepUpData

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/******************************************************************************************/
/**************************Controller for the app******************************************/
/******************************************************************************************/

stepUp.controller("stepUpCtrl", function($scope, $ionicPopup, stepUpData, multiplyFunctions){
	$scope.stepupObj = {};
	$scope.stepupObj.num1 = stepUpData.num1;
	$scope.stepupObj.num2 =  stepUpData.num2;
	$scope.stepupObj.mulVal1 = stepUpData.mulVal1;
	$scope.stepupObj.oldArr = stepUpData.oldArr;
    $scope.stepupObj.correctAns = stepUpData.correctAns ;
   
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
		$scope.stepUp_Data = stepUpData.getData();
		$scope.stepupObj.num1 = $scope.stepUp_Data.num1;
		$scope.stepupObj.num2 =  $scope.stepUp_Data.num2;
		$scope.stepupObj.mulVal1 = $scope.stepUp_Data.mulVal1;
		$scope.stepupObj.oldArr = $scope.stepUp_Data.oldArr;
        $scope.stepupObj.correctAns = $scope.stepUp_Data.correctAns ;
        //console.log("$scope.stepupObj.correctAns " + $scope.stepupObj.correctAns);
      
        //Set timeout for retry    
        $scope.onRetry = setTimeout($scope.retry, 10000);
        
        //cancel the first setTimeout
        clearTimeout($scope.onloadRetry);
     
        //set the buttons back to blue
        $scope.mul_factory_obj.rightClass();
        
        //Start the progress bar
        $scope.mul_factory_obj.progPlay();
        
        $scope.wrongBtnClick = 0 ; //Reset the value of wrongBtnClick 
        
        return $scope.stepupObj;
	}//End newRandom
	
	//Define the functions for the button clicks
	$scope.oldArray = function(oldArrval1, oldArrval2, ind){
        //console.log('oldArrval1 and oldArrval2 : ' + oldArrval1 + oldArrval2) ;
        
        //if the value of count is less than 20 continue with the game
        if($scope.count < $scope.totalCount){
            if((oldArrval1 == $scope.stepupObj.correctAns[0]) && 
                (oldArrval2 == $scope.stepupObj.correctAns[1])){
                //increase the counter for the correct answer
                $scope.count++ ;
                               
               //cancel timeout for retry when the answer is correct
                clearTimeout($scope.onRetry);
                
                //generate a new question
                $scope.newRandom();
            }//End if
            //If the answer is wrong
            else if((oldArrval1 != $scope.stepupObj.correctAns[0]) && 
                (oldArrval2 != $scope.stepupObj.correctAns[1])){
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
	
}); //End stepUpCtrl Controller



