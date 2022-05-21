document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('input[data-input-tel]');
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '');
  };

  const onPhoneInput = (e) => {
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formatedInputValue = '';
    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

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

    if (longCodes.includes(inputNumbersValue.substring(0, 3))) {
      if (inputNumbersValue[0] == '0') {
        // inputNumbersValue = '38' + inputNumbersValue;
        let firstSimbols =
          '+38' +
          inputNumbersValue[0] +
          ' (' +
          inputNumbersValue.substring(1, 3);
        // let firstSimbols = inputNumbersValue[0] == '0' ? '0' : '+7';
        formatedInputValue = firstSimbols + ') ';
        console.log('inputNumbersValue.length ', inputNumbersValue.length);
        console.log('formatedInputValue ', formatedInputValue);
      }
      if (inputNumbersValue.length >= 3) {
        console.log('');
        console.log('------  inputNumbersValue.length >= 3');

        console.log('formatedInputValue ', formatedInputValue);
        formatedInputValue += inputNumbersValue.substring(3, 6);
        console.log('inputNumbersValue ', inputNumbersValue);
        console.log('inputNumbersValue.length ', inputNumbersValue.length);
        console.log(
          'inputNumbersValue.substring(3, 6) ',
          inputNumbersValue.substring(3, 6),
        );
        console.log('formatedInputValue ', formatedInputValue);
        console.log('formatedInputValue.length ', formatedInputValue.length);
      }
      if (formatedInputValue.length >= 10) {
        console.log('');
        console.log('-----  formatedInputValue.length >= 10');

        console.log('formatedInputValue ', formatedInputValue);
        formatedInputValue += inputNumbersValue.substring(6, 9);
        console.log('inputNumbersValue ', inputNumbersValue);
        console.log('inputNumbersValue.length ', inputNumbersValue.length);
        console.log(
          'inputNumbersValue.substring(6, 9) ',
          inputNumbersValue.substring(6, 9),
        );
        console.log('formatedInputValue ', formatedInputValue);
        console.log('formatedInputValue.length ', formatedInputValue.length);
      }
      // if (inputNumbersValue.length >= 8) {
      //   formatedInputValue += '-' + inputNumbersValue.substring(7, 9);
      // }
      // if (inputNumbersValue.length >= 10) {
      //   formatedInputValue += '-' + inputNumbersValue.substring(9, 11);
      // }
    } else {
      formatedInputValue = input.value = inputNumbersValue;
    }
    input.value = formatedInputValue;
    console.log('inputNumbersValue: ', inputNumbersValue);
  };

  let onPhoneKeydown = function (e) {
    let input = e.target;
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
      input.value = '';
    }
  };

  let onPhonePaste = function (e) {
    let pasted = e.clipboardData || window.clipboardData;
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  inputs.forEach((input) => {
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeydown);
    input.addEventListener('paste', onPhonePaste);
  });
});
