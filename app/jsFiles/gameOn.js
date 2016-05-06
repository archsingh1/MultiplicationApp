var gameOn = angular.module('gameOn', ['multiplyFactory']);

/******************************************************************************************/
/**************************Controller for the app******************************************/
/******************************************************************************************/

gameOn.controller("gameOnCtrl", function($scope, $ionicPopup, multiplyFunctions){
	$scope.mul1 = {};
	$scope.mul1 = mulApp1DataFunction();
    
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
	    $scope.mul1 = mulApp1DataFunction();
		
        //Set timeout for retry    
        $scope.onRetry = setTimeout($scope.retry, 10000);
        
        //cancel the first setTimeout
        clearTimeout($scope.onloadRetry);
   
        //set the buttons back to blue
        $scope.mul_factory_obj.rightClass();
        
        //Start the progress bar
        $scope.mul_factory_obj.progPlay();
        
        $scope.wrongBtnClick = 0 ; //Reset the value of wrongBtnClick 
        
        return $scope.mul1;
	}//End newRandom
	
	//Define the functions for the button clicks
	$scope.oldArray = function(oldArrval, ind){
                
        //if the value of count is less than 20 continue with the game
        if($scope.count < $scope.totalCount){
            if(oldArrval == $scope.mul1.num2){
                //increase the counter for the correct answer
                $scope.count++ ;
                               
               //cancel timeout for retry when the answer is correct
                clearTimeout($scope.onRetry);
                
                //generate a new question
                $scope.newRandom();
            }//End if
            //If the answer is wrong
            else if(oldArrval != $scope.mul1.num2){
                //increase the count for wrong button click
                $scope.wrongBtnClick ++ ;
                                
                //change the button color for the wrong answer
                $scope.mul_factory_obj.errorClass(ind);
                
                //if the number of wrong clicks is 2 then show the retry button
                if($scope.wrongBtnClick == 2){
                    //cancel the settimeout for retry and set another timeout for shorter duration
                    clearTimeout($scope.onRetry);
                    $scope.retry();
                     
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
   
    /*******************Function for generating random numbers************************/
    function mulApp1DataFunction(){
        var mulApp1Data={} ;
        var MIN=1;
        var MAX=10;

        mulApp1Data.oldArr = [] ;
        mulApp1Data.num1 = getRandomIntInclusive(MIN,MAX);
        mulApp1Data.num2 = getRandomIntInclusive(MIN,MAX);
        mulApp1Data.mulVal1 = mulApp1Data.num1  * mulApp1Data.num2 ;

        // Generate the random answers
        mulApp1Data.ranAns1 = mulApp1Data.num2 + getRandomIntInclusive(1,2);
        mulApp1Data.ranAns2 = mulApp1Data.num2 - getRandomIntInclusive(1,2);

         //Make sure that the random answers that are generated are different from each other and are greater than zero
        while(! ((mulApp1Data.ranAns1 > 0) && 
            (mulApp1Data.ranAns2 > 0) && 
            (mulApp1Data.ranAns1 != mulApp1Data.ranAns2)) )
        {
            //Create an array with the answers
            mulApp1Data.ranAns1 = mulApp1Data.num2 + getRandomIntInclusive(1,2);
            if(mulApp1Data.num2==1) {
                mulApp1Data.ranAns2 = mulApp1Data.num2 + getRandomIntInclusive(4,5);
            } else {
                mulApp1Data.ranAns2 = mulApp1Data.num2 - getRandomIntInclusive(1,2);
            }
        }
        mulApp1Data.oldArr = [mulApp1Data.ranAns1, mulApp1Data.ranAns2, mulApp1Data.num2];
        
        mulApp1Data.currentIndex = mulApp1Data.oldArr.length; 
        mulApp1Data.randomIndex = 0;
        mulApp1Data.temporaryValue = 0;

        //Randomize the array
        while(0 !== mulApp1Data.currentIndex){
            mulApp1Data.randomIndex = Math.floor(Math.random() * mulApp1Data.currentIndex);
            mulApp1Data.currentIndex -= 1;
            mulApp1Data.temporaryValue = mulApp1Data.oldArr[mulApp1Data.currentIndex];
            mulApp1Data.oldArr[mulApp1Data.currentIndex] =  mulApp1Data.oldArr[mulApp1Data.randomIndex];
            mulApp1Data.oldArr[mulApp1Data.randomIndex] = mulApp1Data.temporaryValue ;
        }
      
        function getRandomIntInclusive(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        return mulApp1Data;	
    } //End mulApp1DataFuntion

}); //End gameOnCtrl Controller


