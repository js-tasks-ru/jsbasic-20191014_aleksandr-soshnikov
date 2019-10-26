/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
let user = {
  whatYouNedd: 'YesIAm',
};
function clone(obj) {
  return Object.assign({}, obj);
}
console.log(clone(user));
