var trueFalse = angular.module('trueFalse', ['multiplyFactory']);

/******************************************************************************************/
/**************************Controller for the app******************************************/
/******************************************************************************************/

trueFalse.controller("trueFalseCtrl", function($scope, $ionicPopup,  multiplyFunctions){
    $scope.mul1 = {} ;
    $scope.mul1 = truefalseFunction() ;
       
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
  
	$scope.newRandom = function(){
		 $scope.mul1 = truefalseFunction() ;
		
        //Set timeout for retry    
        $scope.onRetry = setTimeout($scope.retry, 10000);
        
        //cancel the first setTimeout
        clearTimeout($scope.onloadRetry);
        
        //remove the shakeButton class
        $scope.removeShakeButton();
        
        //Start the progress bar
        $scope.mul_factory_obj.progPlay();
        

        return $scope.mul1;
	}//End newRandom
	
	//Define the functions for the correct button clicks
	$scope.correctAns = function(ind){
        //if the value of count is less than 20 continue with the game
        if($scope.count < $scope.totalCount){
            if($scope.mul1.mulVal1 == $scope.mul1.displayNum){
                //increase the counter for the correct answer
                $scope.count++ ;
                               
               //cancel timeout for retry when the answer is correct
                clearTimeout($scope.onRetry);
                
                //generate a new question
                $scope.newRandom();
            }//End if
            //If the answer is wrong
            else{
                clearTimeout($scope.onRetry);
                 $scope.shakeButton(ind); 
                $scope.retry();         
            }//End else
       } //End outer if
        
        //Call the perfectScore function to end the game
        if($scope.count == $scope.totalCount){
            $scope.mul_factory_obj.perfectScore();
        }//End the game if the count is the same at totalCount
  
    }//End $scope.correctAns
   
    //Define the functions for the wrong button clicks
	$scope.wrongAns = function(ind){
        //if the value of count is less than 20 continue with the game
        if($scope.count < $scope.totalCount){
            if($scope.mul1.mulVal1 != $scope.mul1.displayNum){
                //increase the counter for the correct answer
                $scope.count++ ;
                               
               //cancel timeout for retry when the answer is correct
                clearTimeout($scope.onRetry);
                
                //generate a new question
                $scope.newRandom();
            }//End if
            //If the answer is wrong
            else{
                clearTimeout($scope.onRetry);
                 $scope.shakeButton(ind); 
                $scope.retry();     
            }//End else
       } //End outer if
        
        //Call the perfectScore function to end the game
        if($scope.count == $scope.totalCount){
            $scope.mul_factory_obj.perfectScore();
        }//End the game if the count is the same at totalCount
  
    }//End $scope.wrongAns
    
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
  
    /*******************Function for generatng random numbers************************/
    function truefalseFunction(){
        var tfData={} ;
        var MIN=1;
        var MAX=10;

        tfData.oldArr = [] ;
        tfData.num1 = getRandomIntInclusive(MIN,MAX);
        tfData.num2 = getRandomIntInclusive(MIN,MAX);
        tfData.mulVal1 = tfData.num1  * tfData.num2 ;
          
        // Generate the random answers
	    tfData.ranAns1 = tfData.mulVal1 + getRandomIntInclusive(1,2);
	    tfData.ranAns2 = tfData.mulVal1 - getRandomIntInclusive(1,2);
        
        //Make sure that the random answers that are generated are different from each other and are greater than zero
        while(! ((tfData.ranAns1 > 0) && 
            (tfData.ranAns2 > 0) && 
            (tfData.ranAns1 != tfData.ranAns2)) )
        {
            //Create an array with the answers
            tfData.ranAns1 = tfData.mulVal1 + getRandomIntInclusive(1,2);
            if(tfData.mulVal1==1) {
                tfData.ranAns2 = tfData.mulVal1 + getRandomIntInclusive(4,5);
            } else {
                tfData.ranAns2 = tfData.mulVal1 - getRandomIntInclusive(1,2);
            }

        }//End while
  
        tfData.oldArr = [tfData.ranAns1, tfData.ranAns2, tfData.mulVal1];
                
        //Randomly pick and display a number for the ansArr
	    tfData.displayNum = tfData.oldArr[Math.floor(Math.random()*tfData.oldArr.length)];
                
        function getRandomIntInclusive(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        return tfData ;
    }; //end truefalseFunction
       
    //Shake the button when the answer is wrong
    $scope.shakeButton = function(ind){
        var docBtn = document.getElementsByClassName("colorChangeClass")[ind]; 
        docBtn.className += " shakeBtn";
    }; //end shakeButton

    //Remove shakeButton class from the button
    $scope.removeShakeButton = function(){
        var dontShake = document.getElementsByClassName("colorChangeClass");
        for(var i=0; i<dontShake.length; i++){
            dontShake[i].className = dontShake[i].className.replace(" shakeBtn", " ");  
         }//End for
        
    } ;//End$scope.removeShakeButton
 
}); //End trueFalseCtrl Controller

