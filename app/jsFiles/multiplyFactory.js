var multiplyFactory = angular.module('multiplyFactory', []);

multiplyFactory.factory('multiplyFunctions', function(){
    var mulFactoryObj = {};
    
    //Change buttoncolor if the answer is wrong
    //This code is from:http://onetarek.com/javascript-and-jquery/how-to-add-or-remove-a-class-using-raw-javascript-and-jquery/
    mulFactoryObj.errorClass = function(ind){
        this.removeClass = " button-positive" ;
        this.addClass = " button-assertive";
        this.docBtn = document.getElementsByClassName("colorChangeClass")[ind]; 
        this.docBtn.className = this.docBtn.className.replace(this.removeClass, this.addClass) ;
        
        this.chkerrorShadow = document.getElementsByClassName("colorChangeClass")[ind].classList.contains("errorShadow") ;
        
        this.chkShakeBtn = document.getElementsByClassName("colorChangeClass")[ind].classList.contains("shakeBtn") ;
       
        if((this.chkerrorShadow == true) && (this.chkShakeBtn == true)){ 
            document.getElementsByClassName("colorChangeClass")[ind].classList.remove("shakeBtn" ,"errorShadow") ;
        }
       
         this.docBtn.className += " shakeBtn";
         this.docBtn.className += " errorShadow";
       
   }; //end errorClass
    
    
    //Change buttoncolor back to blue when the answer is right
    mulFactoryObj.rightClass = function(){
        this.addClass = " button-positive";
        this.removeClass = " button-assertive";
        this.chngBtn = document.getElementsByClassName("colorChangeClass");
        
        for(var i=0; i<this.chngBtn.length; i++){
           this.chngBtn[i].className = this.chngBtn[i].className.replace(this.removeClass, this.addClass);
           this.chngBtn[i].className = this.chngBtn[i].className.replace("shakeBtn", " ");  
           this.chngBtn[i].className = this.chngBtn[i].className.replace("errorShadow", " ");      
            
        }//End for
        
    } ;//End rightClass function
 
    //Function to display with 20 questions have been solved
    mulFactoryObj.perfectScore = function(){
		this.myPopup = $ionicPopup.show({
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
    
    
      //Function to run the progress bar 
   mulFactoryObj.progPlay = function(){
        var progElem = document.getElementById("progClass");
       
       var chkprogBarRun = document.getElementById("progClass").classList.contains("progBarRun");
       var chkprogBarRun2 = document.getElementById("progClass").classList.contains("progBarRun2");
       
      // console.log('check1: ' + chkprogBarRun);
       //console.log('check2: ' + chkprogBarRun2);
       
      if(chkprogBarRun2 == false){
           progElem.className += "progBarRun2";
       }
       else if(chkprogBarRun2 == true){
           progElem.className= progElem.className.replace("progBarRun2", "");
       }
   
       if(chkprogBarRun == true){
           progElem.className= progElem.className.replace("progBarRun", "");
       }
       
       else if(chkprogBarRun == false){
           progElem.className += "progBarRun";
       }
        
 
    } ;//End progPlay
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
 
    
   
    return mulFactoryObj;
})