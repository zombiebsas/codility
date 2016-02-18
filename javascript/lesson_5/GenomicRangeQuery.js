function solution(S, P, Q) {
  var result=[];
 	var subS;
  
  for(index=0; index<P.length; index++){
 		subS=S.substring(P[index],Q[index]+1);
 		if(subS.indexOf('A')>-1){
    	result[index]=1;
    }else if(subS.indexOf('C')>-1){
			result[index]=2;
    }else if(subS.indexOf('G')>-1){
    	result[index]=3;
    }else{
    	result[index]=4;
    }
  }
  return result;
}