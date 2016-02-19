function solution(A) {
	var count=0;
  
  if(A.length>2){
  
  	A.sort(function(a,b){return b-a});
    
    for(var index=0;index<A.length-2 && count===0;index++){
    	if(
      		(A[index]+A[index+1]>A[index+2])
          && (A[index+1]+A[index+2]>A[index])
          && (A[index+2]+A[index]>A[index+1])
      ){
      	count=1;
      }
    }
  }
  
  return count;
}