function solution(A, K) {
	var rotate =  (A.length >= K) ? K : K % A.length;
	var lastKElements=A.splice(A.length-rotate,rotate);
    return lastKElements.concat(A);
}