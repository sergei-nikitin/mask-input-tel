document.addEventListener('DOMContentLoaded', function () {
  let inputs = document.querySelectorAll('input[data-input-tel]');

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

  // let onPhoneKeydown = function (e) {
  //   console.log('delete');
  //   let input = e.target;
  //   console.log(input);
  //   if (e.keyCode == 8 && input.length == 3) {
  //     mask.destroy();
  //   }
  // };
  // const getInputNumbersValue = (input) => {
  //   return input.value.replace(/\D/g, '');
  // };

  const onPhoneInputChange = (e) => {
    let input = e.target;
    let value = input.value;

    value.includes('_')
      ? (input.style.color = 'red')
      : (input.style.color = 'black');
  };

  const onPhoneInput = (e) => {
    let input = e.target;

    const phoneMask = IMask(input, {
      mask: `+38\\0 (00) 000-00-00`,
      lazy: false,
    });

    // var maskOptions = {
    //   mask: `+38\\0 (00) 000-00-00`,
    //   lazy: false,
    // };
    // if (input.value.substring(0, 4) == '98') {
    //   mask.updateOptions({
    //     mask: `+38\\0 (00) 000-00-00`,
    //   });

    // }
    input.addEventListener('keydown', (e) => {
      if (e.keyCode == 8 && input.value[6] == '_') {
        phoneMask.updateValue = '';
        // phoneMask.focus();
        // phoneMask.alignCursor();
        // console.log(input.value);
        // console.log(mask._value);
        // return;
      }
    });
    // var mask = IMask(input, maskOptions);
    // phoneMask.alignCursor();
    // -------
    // if (input.value.substring(0, 4) == '+380') {
    //   var maskOptions = {
    //     mask: `{+38\\0} (00) 000-00-00`,
    //     lazy: false,
    //     definitions: {
    //       '#': /[0-9]/,
    //     },
    //   };
    //   var mask = IMask(input, maskOptions);
    //   mask.alignCursor();
    //   input.value[6] == '0'
    //     ? (input.style.color = 'red')
    //     : (input.style.color = 'black');
    // }
    // if (input.value.substring(0, 3) == '380') {
    //   var maskOptions = {
    //     mask: `{+380} (00) 000-00-00`,
    //     lazy: false,
    //     definitions: {
    //       '#': /[0-9]/,
    //     },
    //   };
    //   var mask = IMask(input, maskOptions);
    //   mask.alignCursor();
    //   input.value[6] == '0'
    //     ? (input.style.color = 'red')
    //     : (input.style.color = 'black');
    // }
    // if (codes.includes(input.value.substring(0, 3))) {
    //   var maskOptions = {
    //     mask: `{+38\\0} (00) 000-00-00`,
    //     lazy: false,
    //     definitions: {
    //       '#': /[0-9]/,
    //     },
    //   };
    //   var mask = IMask(input, maskOptions);
    //   mask.alignCursor();
    //   input.value[6] == '0'
    //     ? (input.style.color = 'red')
    //     : (input.style.color = 'black');
    // }
    // if (longCodes.includes(input.value.substring(0, 4))) {
    //   var maskOptions = {
    //     mask: `{+380} (00) 000-00-00`,
    //     lazy: false,
    //     definitions: {
    //       '#': /[0-9]/,
    //     },
    //   };
    //   var mask = IMask(input, maskOptions);
    //   mask.alignCursor();

    input.value[6] == '0'
      ? (input.style.color = 'red')
      : (input.style.color = 'black');

    // }
  };

  inputs.forEach((input) => {
    const phoneMask = IMask(input, {
      mask: `+38\\0 (00) 000-00-00`,
      lazy: false,
      placeholderChar: '_',
    });

    input.addEventListener('input', () => {
      console.log(input.value);
      if (phoneMask && input.value[6] == '0') {
        input.value[6] == '0'
          ? (input.style.color = 'red')
          : (input.style.color = 'black');
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.keyCode == 8 && input.value[6] == '_') {
        phoneMask.updateOptions({
          placeholderChar: '',
        });
        phoneMask.destroy();
      }
    });
    // input.addEventListener('input', () => {
    //   console.log(input.value);

    //   if (input.value.substring(0, 4) == '+380') {
    //     const phoneMask = IMask(input, {
    //       mask: `+38\\0 00 000-00-00`,
    //       lazy: false,
    //       placeholderChar: '_',
    //     });

    //     // phoneMask.alignCursor();
    //   }
    // });

    input.value[6] == '0'
      ? (input.style.color = 'red')
      : (input.style.color = 'black');

    input.addEventListener('change', onPhoneInputChange);
  });
});

// var maskOptions = {
//   mask: `{+38\\0} (00) 000-00-00`,
//   lazy: false,
//   definitions: {
//     '#': /[0-9]/,
//   },
// };
// var mask = IMask(input, maskOptions);
// mask.alignCursor();
