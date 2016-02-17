def solution(a)
  result = []
  a.each{|e| result.include?(e) ? result.delete(e) : result << e}
  result.first
end