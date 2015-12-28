$(function input_number(){

   // Run if we pushed button with operator.                                                              
  $('.operator').click(function(){
  
    var calcInput = $('.calc-input');                           // Input.
    var lastValue = calcInput.val();                            // Save input. 
    var lastChar = lastValue[lastValue.length-1];               // Take last character from input.
    var arrayOperators = ["+", "-", "*", "/"];                  // To define array of operators.
    if ($.inArray(lastChar, arrayOperators) != -1) {            // If last element of array is operator.
        lastValue = lastValue.substring(0, lastValue.length-1); // Delete last element if isn't operator, save only numbers 
    }
    // Test first element (+5, -6). 
    if (lastValue != '0'){
      calcInput.val(lastValue + $(this).val());                 //This - pushed element. Add to current element pushed button.
           
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
  // Push button "=".
  $('.result').click(function)(){
  
  
  
  });
  
});