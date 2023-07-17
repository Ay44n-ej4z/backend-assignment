function stepsToMakePasswordStrong(password) {
    const MIN_LENGTH = 6;
    const MAX_LENGTH = 20;

    let steps = 0;  
    // Check for missing character types
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
  
    for (let i = 0; i < password.length; i++) {
      const char = password.charAt(i);
      if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      } else if (char >= '0' && char <= '9') {
        hasDigit = true;
      }
    }
   if (password.length < MIN_LENGTH) {
      steps += MIN_LENGTH - password.length;
    } else if (password.length > MAX_LENGTH) {
      steps += password.length - MAX_LENGTH;
    }else{
        if (!hasLowercase) {
      steps++;
    }
    if (!hasUppercase) {
      steps++;
    }
    if (!hasDigit) {
      steps++;
    }
    }
    
  // console.log(steps)
    // Check for repeating characters
    for (let i = 0; i < password.length - 2; i++) {
      const char1 = password.charAt(i);
      const char2 = password.charAt(i + 1);
      const char3 = password.charAt(i + 2);
  
      if (char1 === char2 && char2 === char3) {
        steps++;
        break;
      }
    }
  
    return steps;
  }
  
  // Example usage:
  const password = "a";
  // const result = stepsToMakePasswordStrong(password);
  // console.log(result); // Output: 5
  
  function minimumAbsoluteDifference(nums) {
    // Validate input
    if (!Array.isArray(nums) || nums.length % 2 !== 0) {
      throw new Error("Invalid input. The input array must have an even length.");
    }
  
    const n = nums.length / 2;
    let minDiff = Infinity;
  
    // Helper function to calculate the absolute difference between two sums
    function calculateDiff(partition1, partition2) {
      const sum1 = partition1.reduce((sum, num) => sum + num, 0);
      const sum2 = partition2.reduce((sum, num) => sum + num, 0);
      return Math.abs(sum1 - sum2);
    }
  
    // Recursive function to generate all possible partitions
    function generatePartitions(startIndex, partition1, partition2) {
      if (startIndex === nums.length) {
        minDiff = Math.min(minDiff, calculateDiff(partition1, partition2));
        return;
      }
  
      // Try placing the current element in partition1
      partition1.push(nums[startIndex]);
      generatePartitions(startIndex + 1, partition1, partition2);
      partition1.pop();
  
      // Try placing the current element in partition2
      partition2.push(nums[startIndex]);
      generatePartitions(startIndex + 1, partition1, partition2);
      partition2.pop(); // <- Add this line to remove the element from partition2
    }
  
    generatePartitions(0, [], []);
  
    return minDiff;
  }
  
  // Example usage:
  const nums1 = [3, 9, 7, 3];
  console.log(minimumAbsoluteDifference(nums1)); // Output: 2
  
  const nums2 = [-36, 36];
  console.log(minimumAbsoluteDifference(nums2)); // Output: 0
  
  const nums3 = [2, -1, 0, 4, -2, -9];
  console.log(minimumAbsoluteDifference(nums3)); // Output: 0
  
  
  
  
  