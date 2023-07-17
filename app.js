(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    // equal.addEventListener('click', function(e){
    //     if(screen.value === undefined){
    //         screen.value = " ";
    //     }else{
    //         let answer = eval(screen.value); 
    //         screen.value = answer;
    //     }
    // })

    equal.addEventListener('click', function(e){
        try {
            let answer = eval(screen.value);
            if (answer === '') {
                screen.value = " ";
            } else {
                screen.value = answer;
            }
        } catch (error) {
            screen.value = "Error";
        }
    })


    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})();

