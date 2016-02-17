def solution(a, k)
  unless a.empty? || k.nil? || k == 0
    k = k % a.length if k >= a.length
    first = a.slice(a.length-k, a.length)
    last = a.slice(0, a.length-k)
    (first.nil? ? [] : first) + (last.nil? ? [] : last)
  else
    a
  end
end