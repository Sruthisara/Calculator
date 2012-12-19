 function clearc () {
 //	$('#Input').empty();
 document.getElementById('ipd').value = "";
 };
 function calculate()
  {
 // 	var n=calculator.ip.value;
  	//calculator.ip.value);
  	calculator.ip.value=eval(calculator.ip.value);
  };

  function calc(arg){
  	console.log(arg);

  	//$('ip').append(arg);
  	calculator.ip.value += arg;
  };
