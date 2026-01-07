function twoSum(numbers: number[], target: number): [number, number] {
  // Time Complexity: O(n) because each number is processed once.
  // Space Complexity: O(n) for the index map storage.
  const indexByValue = new Map<number, number>();

  for (let index = 0; index < numbers.length; index += 1) {
    const value = numbers[index];
    const needed = target - value;

    if (indexByValue.has(needed)) {
      return [indexByValue.get(needed) as number, index];
    }

    indexByValue.set(value, index);
  }

  return [-1, -1];
}

export { twoSum };
