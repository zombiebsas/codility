function solution(A) {
	var result=0;
	var sum=0;
	var minAvg;
  var avg;
  
	if(A.length>1){
    for(var p=0; p<A.length-1; ){
			sum=A[p];
      avg=null;
      
      for(var q=p+1; q<A.length && (avg === null || avg>=A[q]); q++){
        sum+=A[q];
 				avg=sum/(q-p+1);
        if(minAvg === undefined || avg<minAvg){
        	minAvg=avg;
          result=p;
        }
      }
      
      q--;
      for(p++; p<q ; p++){
        sum-=A[p-1];
 				avg=sum/(q-p+1);
        if(minAvg === undefined || avg<minAvg){
        	minAvg=avg;
          result=p;
        }

      }
  		p=q;    
      
    }
	}
    return result;
}