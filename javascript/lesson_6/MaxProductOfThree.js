function solution(A) {
	var max=0;
  var avg=0;
  if(A.length>2){
		A.sort(function(a,b){return b-a});
  
  	max=A[0]*A[1]*A[2];
    
    avg=A[0]*A[A.length-2]*A[A.length-1];
    
    if(max<avg){
    	max=avg;
    }
    
    avg=A[A.length-3]*A[A.length-2]*A[A.length-1];
    
    if(max<avg){
    	max=avg;
    }
}

return max;
}