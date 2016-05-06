var gameOn = angular.module('gameOn', []);
gameOn.factory('mulApp1Data', function(){
	var mulApp1Data={} ;
    var MIN=1;
    var MAX=3;
    
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
        console.log('randomizing answers' + [mulApp1Data.ranAns1, mulApp1Data.ranAns2, mulApp1Data.num2]);
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
    
    console.log('After Randomization: ' + mulApp1Data.oldArr);
	
	mulApp1Data.getData = function(){
		var mulApp_1Data={} ;
	    mulApp_1Data.oldArr = [];
		mulApp_1Data.num1 = getRandomIntInclusive(MIN,MAX);
		mulApp_1Data.num2 = getRandomIntInclusive(MIN,MAX);
		mulApp_1Data.mulVal1 = mulApp_1Data.num1  * mulApp_1Data.num2 ;
		
		// Generate the random answers
		mulApp_1Data.ranAns1 = mulApp_1Data.num2 + getRandomIntInclusive(1,2);
		mulApp_1Data.ranAns2 = mulApp_1Data.num2 - getRandomIntInclusive(1,2);
        
        
        //Make sure that the random answers that are generated are different from each other and are greater than zero
        while(! ((mulApp_1Data.ranAns1 > 0) && 
            (mulApp_1Data.ranAns2 > 0) && 
            (mulApp_1Data.ranAns1 != mulApp_1Data.ranAns2)) )
        {
            //Create an array with the answers
            mulApp_1Data.ranAns1 = mulApp_1Data.num2 + getRandomIntInclusive(1,2);
            if(mulApp_1Data.num2==1) {
                mulApp_1Data.ranAns2 = mulApp_1Data.num2 + getRandomIntInclusive(4,5);
            } else {
                mulApp_1Data.ranAns2 = mulApp_1Data.num2 - getRandomIntInclusive(1,2);
            }
            console.log('randomizing answers' + [mulApp_1Data.ranAns1, mulApp_1Data.ranAns2, mulApp_1Data.num2]);
        }
        mulApp_1Data.oldArr = [mulApp_1Data.ranAns1, mulApp_1Data.ranAns2, mulApp_1Data.num2];

		mulApp_1Data.currentIndex = mulApp_1Data.oldArr.length; 
		mulApp_1Data.randomIndex = 0;
		mulApp_1Data.temporaryValue = 0;
        
         console.log('Before Randomization 1 : ' + mulApp_1Data.oldArr);
				
		//Randomize the array
		while(0 !== mulApp_1Data.currentIndex){
			mulApp_1Data.randomIndex = Math.floor(Math.random() * mulApp_1Data.currentIndex);
			mulApp_1Data.currentIndex -= 1;
			mulApp_1Data.temporaryValue = mulApp_1Data.oldArr[mulApp_1Data.currentIndex];
			mulApp_1Data.oldArr[mulApp_1Data.currentIndex] =  mulApp_1Data.oldArr[mulApp_1Data.randomIndex];
			mulApp_1Data.oldArr[mulApp_1Data.randomIndex] = mulApp_1Data.temporaryValue ;
		}
        
        console.log('After Randomization 1 : ' + mulApp_1Data.oldArr);
					
		return mulApp_1Data;
	}
	return mulApp1Data;	
}); //mulApp1Data

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/******************************************************************************************/
/**************************Controller for the app******************************************/
/******************************************************************************************/

gameOn.controller("gameOnCtrl", function($scope, $ionicPopup, mulApp1Data){
	$scope.mul1 = {};
	$scope.mul1.num1 = mulApp1Data.num1;
	$scope.mul1.num2 =  mulApp1Data.num2;
	$scope.mul1.mulVal1 = mulApp1Data.mulVal1;
	$scope.mul1.oldArr = mulApp1Data.oldArr;
    //Increase the counter if the answer is correct
    $scope.count = 0;
    //Total number of questions to be displayed
    $scope.totalCount = 20 ; //Change this to 20 in the final version
  
	$scope.newRandom = function(){
		$scope.mulApp_1Data = mulApp1Data.getData();
		$scope.mul1.num1 = $scope.mulApp_1Data.num1;
		$scope.mul1.num2 =  $scope.mulApp_1Data.num2;
		$scope.mul1.mulVal1 = $scope.mulApp_1Data.mulVal1;
		$scope.mul1.oldArr = $scope.mulApp_1Data.oldArr;
		//Increase the count for the total questions
        return $scope.mul1;
	}//End newRandom
	
	//Define the functions for the button clicks
	$scope.oldArray = function(oldArrval, ind){
        //console.log('oldArrval ' + oldArrval) ;
        
        //if the value of count is less than 20 continue with the game
        if($scope.count < $scope.totalCount){
            if(oldArrval == $scope.mul1.num2){
                //increase the counter for the correct answer
                $scope.incCount();
                //set the buttons back to blue
                $scope.rightClass();
                //generate a new question
                $scope.newRandom();
            }//End if
            else{
                 //cancel timeout for retry
                //clearTimeout($scope.onRetry);
                
                //change the button color for the wrong answer
                $scope.errorClass(ind);
            }//End else
            
                            
             //cancel timeout for retry
             clearTimeout($scope.onRetry);
            
        } //End outer if
        
        //Call the perfectScore function to end the game
        if($scope.count == $scope.totalCount){
            $scope.perfectScore();
        }//End the game if the count is the same at totalCount
        
        
        //cancel the first setTimeout
        clearTimeout($scope.onloadRetry);
   
    }//End $scope.oldArray
	
    //Change buttoncolor if the answer is wrong
    //This code is from:http://onetarek.com/javascript-and-jquery/how-to-add-or-remove-a-class-using-raw-javascript-and-jquery/
    $scope.errorClass = function(ind){
        var removeClass = " button-positive" ;
        var addClass = " button-assertive";
        var docBtn = document.getElementsByClassName("colorChangeClass")[ind]; 
        docBtn.className = docBtn.className.replace(removeClass, addClass) ;
        docBtn.className += " shakeBtn";
 
    }; //end errorClass
    
    //Change buttoncolor back to blue when the answer is right
    $scope.rightClass = function(){
        var addClass = " button-positive";
        var removeClass = " button-assertive";
        var chngBtn = document.getElementsByClassName("colorChangeClass");
        
        for(var i=0; i<chngBtn.length; i++){
           chngBtn[i].className = chngBtn[i].className.replace(removeClass, addClass);
           chngBtn[i].className = chngBtn[i].className.replace("shakeBtn", " ");   
            
        }//End for
        
    } ;//End rightClass function
    
    $scope.incCount = function(){
        //Increase the count for the questions answered correctly
        $scope.count++;
    }; //End Inc function
    
    
    //Funtion to call for trying again in setTimeOut
    $scope.retry = function(){
		var myPopup = $ionicPopup.show({
           buttons: [
				   {
					text: '<strong>Retry</strong>&nbsp;&nbsp;<span class="ion-refresh"></span>',
					type: 'button-positive',
					onTap: function(e) {
					   $scope.newRandom();
                       //Set timeout for retry when the app first loads
                       $scope.onRetry = setTimeout($scope.retry, 1000);
					}
				  }
				] //End buttons
        });
    }//End retry function
    
    //Call retry function after 10 seconds when the app is opened
    $scope.onloadRetry = setTimeout($scope.retry, 3000);
    
    //Function to display with 20 questions have been solved
    $scope.perfectScore = function(){
		var myPopup = $ionicPopup.show({
           buttons: [
				   {
					text: '<strong>Perfect! You are awesome!</span>',
					type: 'button-positive',
					onTap: function(e) {
				        //link back to the home page
					}
				  }
				] //End buttons
        });
        
        
    }//End perfectScore function
    
    
	
}); //End gameOnCtrl Controller






































