const buttons = document.querySelectorAll('button');
const icon = document.querySelector('i');
const submit = document.querySelector('.submit');

buttons.forEach(button => {
    button.addEventListener('mouseover', function(){
        icon.classList.add('shake-effect');
    });
    button.addEventListener('mouseout', function(){
        icon.classList.remove('shake-effect');
    })
});

