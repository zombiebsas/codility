function solution(A) {
  var right=0;
  
  for(index=1;index<A.length;index++){
  	right+=A[index];
  }
  var left=A[0];
  var min=Math.abs(left-right);
  var value=0;
  
  for(index=1;index<A.length-1;index++){
  	value=A[index];

	  right-=value;
    left+=value;
    
    if(min > Math.abs(left-right)){
    	min=Math.abs(left-right);
    }

    if(min===0) break;

  }
  
  return min;

}