        let display = document.getElementById('display');
        let buttons = Array.from(document.getElementsByClassName('button'));
        let operators = ['+', '-', '*', '/', '%']; 
        buttons.map(button => {
            button.addEventListener('click', (e) => {
                switch (e.target.innerText) {
                    case 'AC': 
                        display.innerText = '';
                        break;
                    case 'Back':
                        if (display.innerText) {
                            display.innerText = display.innerText.slice(0, -1);
                        }
                        break;
                    case '=': 
                        try {
                            display.innerText = eval(display.innerText);
                        } catch {
                            display.innerText = 'Error!'
                            setTimeout(() => {
                                display.innerText = '';
                            }, 2000);
                        }
                        break;
                    default:  
                        if (display.innerText.length < 15) { 
                            let lastChar = display.innerText.slice(-1);
                            if (operators.includes(lastChar) && operators.includes(e.target.innerText)) {
                                return;
                            }
                            display.innerText += e.target.innerText;
                        } else {
                            alert('Maximum character limit 15!');
                        }
                }
            });
        });
