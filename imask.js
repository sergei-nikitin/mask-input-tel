document.addEventListener('DOMContentLoaded', function () {
  let elements = document.querySelectorAll('input[data-input-tel]');

  const codes = [
    '22',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '41',
    '42',
    '43',
    '44',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '80',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
  ];
  const longCodes = [
    '022',
    '031',
    '032',
    '033',
    '034',
    '035',
    '036',
    '037',
    '038',
    '039',
    '041',
    '042',
    '043',
    '044',
    '046',
    '047',
    '048',
    '049',
    '050',
    '051',
    '052',
    '053',
    '054',
    '055',
    '056',
    '057',
    '058',
    '059',
    '061',
    '062',
    '063',
    '064',
    '065',
    '066',
    '067',
    '068',
    '069',
    '070',
    '080',
    '090',
    '091',
    '092',
    '093',
    '094',
    '095',
    '096',
    '097',
    '098',
    '099',
  ];

  elements.forEach((element) => {
    element.addEventListener('input', function () {
      if (element.value.substring(0, 3) == '380') {
        // Инициализируем iMask только один раз
        const phoneMask = IMask(element, {
          mask: `{+380} (00) 000-00-00`,
          lazy: false,
        });
        element.addEventListener('focus', () => {
          // При фокусе выравниваем курсор
          phoneMask.alignCursor();
        });
        phoneMask.alignCursor();
      }
      if (element.value.substring(0, 4) == '+380') {
        const phoneMask = IMask(element, {
          mask: `{+380} (00) 000-00-00`,
          lazy: false,
        });
        element.addEventListener('focus', () => {
          phoneMask.alignCursor();
        });
        phoneMask.alignCursor();
      }
      if (codes.includes(element.value.substring(0, 3))) {
        const phoneMask = IMask(element, {
          mask: `{+38\\0} (00) 000-00-00`,
          lazy: false,
        });
        element.addEventListener('focus', () => {
          phoneMask.alignCursor();
        });
        phoneMask.alignCursor();
      }
      if (longCodes.includes(element.value.substring(0, 4))) {
        const phoneMask = IMask(element, {
          mask: `{+380} (00) 000-00-00`,
          lazy: false,
        });
        element.addEventListener('focus', () => {
          phoneMask.alignCursor();
        });
        phoneMask.alignCursor();
      }
      if (
        !longCodes.includes(element.value.substring(0, 4)) ||
        !codes.includes(element.value.substring(0, 3)) ||
        !element.value.substring(0, 4) == '+380' ||
        !element.value.substring(0, 3) == '380'
      ) {
        console.log(element.value);
        // element.value = e.target.value;

        // phoneMask.alignCursor();
      }
      element.value[6] == '0'
        ? (element.style.color = 'red')
        : (element.style.color = 'black');
    });
  });
});
