function solution(N, A) {
  var counters=[];

	for(var index=0;index<N;index++){
		counters[index]=0;
  }
  
 	var max=0;
	var lastMax=max;
  
	for(var index=0;index<A.length;index++){
  	if(A[index]>N){
    	if(max!==lastMax){
        counters.fill(max);
      	lastMax=max;  
      }
    }else{
       if(max<++counters[A[index]-1]){
      	max=counters[A[index]-1];
      }
    }
  }
  
	return counters;
}