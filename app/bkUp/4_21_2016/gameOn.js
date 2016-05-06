var gameOn = angular.module('gameOn', []);
gameOn.factory('mulApp1Data', function(){
	var mulApp1Data={} ;
	
	mulApp1Data.num1 = 1 + Math.floor(Math.random()*9);
	mulApp1Data.num2 = 1 + Math.floor(Math.random()*9) ;
	mulApp1Data.mulVal1 = mulApp1Data.num1  * mulApp1Data.num2 ;
	
	// Generate the random answers
	mulApp1Data.ranAns1 = mulApp1Data.num1 + getRandomIntInclusive(1,2);
	mulApp1Data.ranAns2 = mulApp1Data.num1 - getRandomIntInclusive(1,2);
	while(mulApp1Data.ranAns1 < 0 
          || mulApp1Data.ranAns2 < 0 || (mulApp1Data.ranAns1 == mulApp1Data.ranAns2) 
         ) {
		mulApp1Data.ranAns1 = mulApp1Data.num1 + getRandomIntInclusive(1,2);
		mulApp1Data.ranAns2 = mulApp1Data.num1 - getRandomIntInclusive(1,2);
	}
	
	//Create an array with the answers
	mulApp1Data.oldArr = [mulApp1Data.ranAns1, mulApp1Data.ranAns2, mulApp1Data.num2];
	mulApp1Data.currentIndex = mulApp1Data.oldArr.length; 
	mulApp1Data.randomIndex = 0;
	mulApp1Data.temporaryValue = 0;
    
    console.log('Before Randomization: ' + mulApp1Data.oldArr);
	
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
	
		mulApp_1Data.num1 = 1 + Math.floor(Math.random()*9);
		mulApp_1Data.num2 = 1 + Math.floor(Math.random()*9) ;
		mulApp_1Data.mulVal1 = mulApp_1Data.num1  * mulApp_1Data.num2 ;
		
		// Generate the random answers
		mulApp_1Data.ranAns1 = mulApp_1Data.num2 + Math.floor(Math.random() * 3) + 1;
		mulApp_1Data.ranAns2 = mulApp_1Data.num2 - Math.floor(Math.random() * 3) - 1;
		
		//Create an array with the answers
		mulApp_1Data.oldArr = [mulApp_1Data.ranAns1, mulApp_1Data.ranAns2, mulApp_1Data.num2];
		mulApp_1Data.currentIndex = mulApp_1Data.oldArr.length; 
		mulApp_1Data.randomIndex = 0;
		mulApp_1Data.temporaryValue = 0;
				
		//Randomize the array
		while(0 !== mulApp_1Data.currentIndex){
			mulApp_1Data.randomIndex = Math.floor(Math.random() * mulApp_1Data.currentIndex);
			mulApp_1Data.currentIndex -= 1;
			mulApp_1Data.temporaryValue = mulApp_1Data.oldArr[mulApp_1Data.currentIndex];
			mulApp_1Data.oldArr[mulApp_1Data.currentIndex] =  mulApp_1Data.oldArr[mulApp_1Data.randomIndex];
			mulApp_1Data.oldArr[mulApp_1Data.randomIndex] = mulApp_1Data.temporaryValue ;
		}
					
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
    //Increase the counter is the answer is correct
    $scope.count = 0;
  
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
        
		if(oldArrval == $scope.mul1.num2){
            $scope.inc();
            $scope.rightClass();
            $scope.newRandom();
            //cancel the first setTimeout
            clearTimeout($scope.callRetry_1);
		}//End if
		else{
            
            //cancel the first setTimeout
            clearTimeout($scope.callRetry_1);
            
		    //change the button color for the wrong answer
            $scope.errorClass(ind);
            
		}//End else
	
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
    
    $scope.inc = function(){
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
					}
				  }
				] //End buttons
        });
        
        
    }//End retry function
    
    //Call retry function after 10 seconds when the app is opened
    $scope.callRetry_1 = setTimeout($scope.retry, 10000);
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
	
}); //End gameOnCtrl Controller






































