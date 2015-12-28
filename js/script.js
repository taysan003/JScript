$(function input_number(){
 var arrayOperators = ["+", "-", "*", "/"];                      // To define array of operators.
   // Run if we pushed button with operator.                                                              
  $('.operator').click(function(){
  
    var calcInput = $('.calc-input');                           // Input.
    var lastValue = calcInput.val();                            // Save input. 
    var lastChar = lastValue[lastValue.length-2];               // Take last character from input.
    
    if ($.inArray(lastChar, arrayOperators) != -1) {            // If last element of array is operator.
        lastValue = lastValue.substring(0, lastValue.length-3); // Delete last element if isn't operator, save only numbers 
    }
    // Test first element (+5, -6). 
    if (lastValue != '0'){
      calcInput.val(lastValue + ' ' + $(this).val()+' ');       //This - pushed element. Add to current element pushed button.
           
    }
   
  });
  // Run if was pushed button with number.
  $('.number').click(function(){
  
    var calcInput = $('.calc-input');                           // Input.
    var lastValue = calcInput.val();                            // Save input.
   // Test of true display input element without 0 at first (free space).
    if (lastValue == '0'){
      lastValue = '';
    }
    calcInput.val(lastValue + $(this).val());                    //This - pushed element. Add to current element pushed button.

  });
  // Push button "C".
    $('.clear').click(function(){
      $('.calc-input').val("0");  
  });
  // Push button "="
  $('.result').click(function(){
  var calcInput = $('.calc-input');                           // Input.
  var lastValue = calcInput.val();                            // Save input. 
  var lastChar = lastValue[lastValue.length-2];               // Take last character from input.
  if ($.inArray(lastChar, arrayOperators) != -1) {            // If last element of array is operator.
      lastValue = lastValue.substring(0, lastValue.length-3); // Delete last element if isn't operator, save only numbers 
          
    }
     calcInput.val(lastValue); 
     var mass = lastValue.split(' ');
     //console.log(mass);
     var result = 0;
     for(var i = 0; i < mass.length; i++ ){
     
       if ($.inArray(mass[i], arrayOperators) != -1){
        switch (mass[i]) {
          case '+':
           result = parseInt( mass[i-1]) + parseInt(mass[i+1]);
           mass[i+1] = result;
           break;
          case '-':
           result = parseInt(mass[i-1]) - parseInt(mass[i+1]);
           mass[i+1] = result;
           break;
          case '/':
           result = parseInt(mass[i-1]) / parseInt(mass[i+1]);
           mass[i+1] = result;
           break;
          case '*':
           result = parseInt(mass[i-1]) * parseInt(mass[i+1]);
           mass[i+1] = result;
           break;
          default:
            
        }
      }
    }

  calcInput.val(result); 
  
  });
});