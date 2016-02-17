function solution(A) {
  A.sort();
  
  var result = (A[0] === 1);

	for(index=1;index<A.length && result;index++){
  	result = ( (A[index-1]+1) === A[index] );
  }

	return result ? 1 : 0;
}