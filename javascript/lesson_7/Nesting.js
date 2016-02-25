function solution(S) {

	var result=1;
  var brackets=[];
  var char;
  
  for(var index=0;index<S.length && result===1;index++){
  	char=S.substring(index,index+1);
    
    if(char==='('){
    	brackets.push(char);
    }else if(char===')'){
    	if(brackets.pop()===undefined){
      	result=0;
      }
    }else{
    	result=0;
    }
  }

	if(result===1 && brackets.length!==0){
  	result=0;
  }
  
  return result;
}