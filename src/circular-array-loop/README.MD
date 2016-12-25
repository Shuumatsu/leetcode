# fast-slow-pointer
Just think it as finding a loop in Linkedlist, except that loops with only 1 element do not count. 
Use a slow and fast pointer, slow pointer moves 1 step a time while fast pointer moves 2 steps a time.
If there is a loop (fast == slow), we return true, else if we meet element with different directions, then the search fail, we set all elements along the way to 0. 
Because 0 is fail for sure so when later search meet 0 we know the search will fail.

# zero-value-mark solution 
