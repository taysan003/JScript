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
        if ($.inArray(mass[i], ['*', '/']) != -1){
            calcVal(mass, i); 
            mass.splice(i-1, 2);                              // Delete one of elements (first), don't leave free space in array. As result 
        
            
        }
    
  }
  
  
  for(var i = 0; i < mass.length; i++ ){
     
       if ($.inArray(mass[i], arrayOperators) != -1){
        calcVal(mass, i); 
    
  }
  }
  
  calcInput.val(mass[mass.length-1]); 
  
  });
  /** Calculate naibour elements of array and put it in the second position . 
   *@mas array
   * Array with number
   * @i integer
   * Index of current array element.   
   */
  function calcVal(mass, i) {
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
    
    };
  
});