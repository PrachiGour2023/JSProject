(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
            console.log('newValue', newValue)
        });
    });

    equal.addEventListener('click', function () {
        // screen.value = eval(screen.value)
        if (screen.value == '') {
            screen.value = ''
        } else {
            let newValue = String(screen.value);
            let answer = eval(newValue);
            screen.value = answer;
            // console.log("answer",  eval(express))
        }
    })

    clear.addEventListener('click', function () {
        screen.value = "";
    })

})();

