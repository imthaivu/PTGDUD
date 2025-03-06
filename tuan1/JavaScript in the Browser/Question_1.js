let againButton = document.querySelector('.again');
let guessInput = document.querySelector('.guess');

againButton.addEventListener('click', function(){
    console.log('click');
    guessInput.value = '';
});