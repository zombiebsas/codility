function solution(A) {
	A.sort(function(a,b){return a-b});
  var count=(A.length===0)?0:1;
  var equals=false;
  
  for(var index=0;index<A.length-1 && !equals;index++){
  	if(A[index]!==A[index+1]){
    	count++;
    }
  	equals=(A[index+1]===A[A.length-1]);  
  }
  
  return count;
}