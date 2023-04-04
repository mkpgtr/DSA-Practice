const merge = intervals => {
    if (intervals.length < 2) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    // ! initialize the first interval to previous
    let previous = intervals[0];
    
    for (let i = 1; i < intervals.length; i += 1) {
        // ! [[1,4],[1,5],[1,7],[2,3],[5,8]], here if [1,4] is intervals[0] i.e previous
        // ! [1,4]'s 4 will be compared against intervals[1][0] in the first iteration and if previous[1] >= intervals[1,0], they will be merged to become [1,4]
      if (previous[1] >= intervals[i][0]) {
        // ! this is where the actual merging happens
        previous = [previous[0], Math.max(previous[1], intervals[i][1])];
      } else {
        // ! else just push the previous into the results array as it is
        result.push(previous);
        // ! make the current interval, the previos interval
        previous = intervals[i];
      }
    }
    
    result.push(previous);
    
    return result;
  };

  const intervalsArray = [[1,3],[4,10],[2,6],[12,15],[1,7],[1,5]]
  console.log(merge(intervalsArray))