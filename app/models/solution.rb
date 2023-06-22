class Solution < ApplicationRecord
  BOUNDARY = 25

  def self.verify_guess(name, xcoord, ycoord)
    solution = Solution.find_by_name(name)
    (xcoord - solution.xcoord).abs <= BOUNDARY && (ycoord - solution.ycoord).abs <= BOUNDARY
  end
end
