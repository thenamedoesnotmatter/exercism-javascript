// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // Set default value to 0 as well, if the list is empty
  return birdsPerDay.reduce((a, b) => a + b, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const sliceStart = (week * 7) - 7; // All days will be tracked;
  return totalBirdCount((birdsPerDay.slice(sliceStart, sliceStart + 7)));
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // Can't use Array.prototype.map since we have to return
  // the same array, not a new one
  birdsPerDay.forEach((value, index) => {
    if (index === 0 || (index % 2) === 0) {
      birdsPerDay[index] += 1;
    }
  });

  return birdsPerDay;
}
