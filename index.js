window.addEventListener('load', function OnWindowLoaded() {
    // набор кнопок
    const signs = [
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '/',
        '0', 'CE', '.', '*',
        '='
    ];
 
    // форма калькулятора
    const calc = document.getElementById('calc');
 
    // текстовое поле с математическим выражением
    const textArea = document.getElementById('inputVal');
    // текстовое поле с выведением результата
    const resArea = document.getElementById('result');
    
    // Добавление кнопок к форме калькулятора
    signs.forEach(function (sign) {
        const signElement = document.createElement('div');
        signElement.className = (sign === '=' ? 'equals' : 'btn');
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
    
    // проходит по всем кнопкам калькулятора
    // добавляет обработчик на клик
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // Добавляем действие, выполняемое при клике на любую кнопку
        button.addEventListener('click', onButtonClick);
    });
 
    document.querySelectorAll('#calc-wrap .equals').forEach(function (button) {
        // Добавляем действие, выполняемое при клике на кнопку =
        button.addEventListener('click', onButtonClick);
    });
    // функция клика по кнопке калькулятора
    function onButtonClick(e) {
        // e - MouseEvent (содержит информацию о клике)
        if (e.target.innerHTML === 'CE') {
            // Если нажата кнопка "CE", то стирает все из текстового поля
            textArea.innerHTML = '0';
            resArea.innerHTML = '= 0';
        } else if (e.target.innerHTML === '=') {
            // Если нажата кнопка "=", то, приведя выражение
            // в текстовом поле к javascript, вычислить значение
            resArea.innerHTML = '= ' + eval(textArea.innerHTML);       
        } else if (resArea.innerHTML != '= 0') {
            // если в поле результата есть значение, не равное 0, то при нажатии на кнопку значения обнулятся
            textArea.innerHTML = e.target.innerHTML;
            resArea.innerHTML = '= 0';
        }else if (textArea.innerHTML === '0') {
            // Если textarea содержит только "0", то
            // стереть "0" и записать
            // значения кнопки в текстовое поле
            textArea.innerHTML = e.target.innerHTML;
        }else if (textArea.innerHTML === '.') {
            // Если textarea содержит только ".", то
            // добавить "0" и записать
            // значения кнопки в текстовое поле
            textArea.innerHTML = '0'+ '.'+ e.target.innerHTML;
        } else {
            // Добавление значения кнопки в текстовое поле
            textArea.innerHTML += e.target.innerHTML;
        }
    }

    
});
    
