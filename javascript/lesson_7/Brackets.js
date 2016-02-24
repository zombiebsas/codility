function solution(S){
	var brackets=[];
	var result=1;  
  var character;
  var last;
  
  
  for(var index=0; index<S.length && result === 1; index++){
  	character=S.substring(index,index+1);
    if(character === '(' || character === '[' || character === '{' ){
    	brackets.push(character);
    }else if(character === ')'){
    	last = brackets.pop();
      if(last!=='('){
      	result=0;
      }
    }else if(character === ']'){
    	last = brackets.pop();
      if(last!=='['){
      	result=0;
      }
    }else if(character === '}'){
    	last = brackets.pop();
      if(last!=='{'){
      	result=0;
      }
		}
  }


	if(result === 1 && brackets.length>0){
    	result=0;
  }

	return result;

}