/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

let objectThis = {};
function clone(obj) {
  for (i in obj) {
    if (obj[i] === null) {
      objectThis[i] = null;
    } 
    else if (typeof obj[i] === 'object') {
      objectThis[i] = clone(obj[i]);
    } else {
      objectThis[i] = obj[i];
    }
  }
  return objectThis;
}