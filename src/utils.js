/**
 * Генератор чисел с шагом 1
 * Вариант с замыканием на начальное значение в самовызываемой функции.
 * @returns {Number}
 */
export const generateCode = (function (start = 0) {
  return () => ++start;
}());

export function getNounEnding(number) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return "товар";
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return "товара";
  } else {
    return "товаров";
  }
}

export function formatMoney(sum){
  return new Intl.NumberFormat('ru', { currency: 'RUB' }).format(sum)
}
