document.addEventListener('DOMContentLoaded', function () {
  let inputs = document.querySelectorAll('input[data-input-tel-ua]');

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
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
        '+38',
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

      const cheskOnValid = (input) => {
        input.addEventListener('input', () => {
          input.value[6] == '0'
            ? (input.style.color = 'red')
            : (input.style.color = 'black');
        });
      };

      const unfocus = (i) => {
        i.addEventListener('blur', (e) => {
          if (i.value.includes('_')) {
            i.style.color = 'red';
            alert(
              'Заповніть поле введення номера телефону повністю. Invalid number format',
            );
          }
        });
      };

      // const deleteMask = (input, phoneMask) => {
      //   input.addEventListener('keydown', (e) => {
      //     if (e.keyCode == 8 && input.value[6] == '_') {
      //       phoneMask.destroy();
      //     }
      //   });
      // };

      if (codes.includes(input.value.substring(0, 2))) {
        const phoneMask = IMask(input, {
          mask: `+38\\0 (00) 000-00-00`,
          lazy: false,
        });
        phoneMask.alignCursor();
        cheskOnValid(input);
        unfocus(input);
      }
      if (longCodes.includes(input.value.substring(0, 3))) {
        const phoneMask = IMask(input, {
          mask: `+380 (00) 000-00-00`,
          lazy: false,
        });
        phoneMask.alignCursor();
        cheskOnValid(input);
        unfocus(input);
      }
    });
  });
});
