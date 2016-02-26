function solution(A) {
	var elements={};
  var max=0;
  var result=-1;
  
  for(var index=0;index<A.length;index++){
  	if(elements[A[index]]===undefined){
    	elements[A[index]]=1;
    }else{
    	elements[A[index]]++;
    }
    if(max<elements[A[index]]){
    	max=elements[A[index]];
      if(max>(A.length/2)){
      	result=index;
      }
    }
  }
  return result;
}