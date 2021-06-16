const tableCrossCheck = document.querySelector(".table-cross-check");

tableCrossCheck.addEventListener("change", changeRadioButton);

function changeRadioButton(e) {
  if (e.target.classList.contains("radio-button")) {

    const currentPercent = e.target.value;

    const id = e.target.dataset.id;


    const currentScore = Number(
      tableCrossCheck.querySelector(`.score-${id}`).innerHTML
    );

    const currentInputTextResultElement = tableCrossCheck.querySelector(
      `#input-text-${id}`
    );

    currentInputTextResultElement.value = Math.round(
      currentScore * currentPercent / 100
    );

    const allInputText = tableCrossCheck.querySelectorAll('.input-text-for-radio-button');

    let sum = 0;
    allInputText.forEach(item =>
    {
      sum += Number(item.value);
    });

    const inputTextSum = document.querySelector('#input-text-sum-result');

   inputTextSum.value = sum;


  }
}
