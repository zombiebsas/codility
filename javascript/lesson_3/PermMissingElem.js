function solution(A) {
	var sum=0;
  
  for(index=0;index<A.length;index++){
  	sum+=A[index];
  }
	
  var total=((A.length+1)*(A.length+2))/2
  return total-sum;
}