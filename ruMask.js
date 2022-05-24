document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('input[data-input-tel-ru]');
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

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9')
        inputNumbersValue = '7' + inputNumbersValue;
      let firstSimbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formatedInputValue = firstSimbols + ' ';
      if (inputNumbersValue.length > 1) {
        formatedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formatedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formatedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formatedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formatedInputValue = input.value = inputNumbersValue;
    }
    input.value = formatedInputValue;
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
