function ageCalculator() {  
    var userinput = document.getElementById("birthday").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      alert("Please enter your birthday");   
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    return document.getElementById("age").innerHTML =    
            age;  
    }  
}  