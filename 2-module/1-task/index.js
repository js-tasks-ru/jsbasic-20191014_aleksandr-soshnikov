/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
let objectThis = {};
function clone(obj) {
  for (i in obj) {
    if (typeof obj[i] === 'object') {
      objectThis[i] = clone(obj[i]);
    } else {
      objectThis[i] = obj[i];
    }
  }
  return objectThis;
}

