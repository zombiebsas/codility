function solution(A, B, K) {
	var resto = A % K;
  var inicio = (resto === 0) ? A : A+K-resto;
  return (inicio>B) ? 0 : Math.trunc((B-inicio)/K)+1;
}