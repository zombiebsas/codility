function solution(A) {
  var result=0;
  
  A.sort(function(a,b){return a-b});
  
  if(A.length === 1){
  	result = (A[0]===1) ? 2 : 1;
  }else if(A[0]>1){
  	result = 1;
  }else{
    for(index=1;index<A.length && result === 0;index++){
			if(A[index]>1 && A[index-1]+1<A[index]){
        result = (A[index-1]<=0) ? 1 : A[index-1]+1;
      }
    }
    
  }
  
  
  if(result === 0){
  	result = (A[A.length-1]<0) ? 1 : A[A.length-1]+1;
  }
  
	return result;
}