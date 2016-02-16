def solution(n)
  bin_array = n.to_s(2).scan(/0+(?=1)/).flatten
  bin_array.nil? || bin_array.max.nil? ? 0 : bin_array.max.length
end