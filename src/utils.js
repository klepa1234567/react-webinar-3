/**
 * Плюрализация
 * Возвращает вариант с учётом правил множественного числа под указанную локаль
 * @param value {Number} Число, под которое выбирается вариант формы.
 * @param variants {Object<String>} Варианты форм множественного числа.
 * @example plural(5, {one: 'товар', few: 'товара', many: 'товаров'})
 * @param [locale] {String} Локаль (код языка)
 * @returns {String}
 */
export function plural(value, variants = {}, locale = 'ru-RU') {
  // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
  // В английском 2 формы: 'one', 'other'
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || '';
}

/**
 * Генератор чисел с шагом 1
 * @returns {Function}
 */
export function codeGenerator(start = 0) {
  return () => ++start;
}

/**
 * Форматирование разрядов числа
 * @param value {Number}
 * @param options {Object}
 * @returns {String}
 */
export function numberFormat(value, locale = 'ru-RU', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function generatePagination(currentPage, totalPages) {
  const pagination = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(i.toString());
    }
  } else {
    pagination.push('1');

    if (currentPage < 3) {
      pagination.push('2', '3', '...', totalPages.toString());
    } else if (currentPage > totalPages - 3) {
      pagination.push('...', (totalPages - 3).toString());
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pagination.push(i.toString());
      }
    } else {
      pagination.push(
        '...',
        (currentPage - 1).toString(),
        currentPage.toString(),
        (currentPage + 1).toString(),
        '...',
        totalPages.toString(),
      );
    }
  }

  return pagination;
}