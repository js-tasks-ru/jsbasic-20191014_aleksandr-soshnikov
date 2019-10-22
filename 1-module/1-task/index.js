/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow(m, n) {
  if (parseInt(m, 10) === m && parseInt(n, 10) === n) {
    return m ** n;
  }
}

pow(5, 2);
