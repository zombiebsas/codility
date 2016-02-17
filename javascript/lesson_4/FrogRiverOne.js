function solution(X, A) {
	var result=-1;
  var sum=0;
  var check=(X*(X+1))/2;
  var leaves = [];
  var leave=0;
  
  for(index=0;index<A.length && result===-1;index++){
  		leave=A[index];
      if(leave<=X){
      	if(!leaves[leave]){
        	leaves[leave]=true;
          sum+=leave;
          if(sum === check){
          	result=index;
          }
        }
      }
  }
  
  return result;
}