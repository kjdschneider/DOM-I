const tens = document.getElementById('secondTens')
tens.textContent = '0';
const ones = document.getElementById('secondOnes')
ones.textContent = '0';
const hundredMS = document.getElementById('msHundreds')
hundredMS.textContent = '0';
const tenMS = document.getElementById('msTens')
tenMS.textContent = '0';

let tenMSNum = Number(tenMS.textContent);
let hundredMSNum = Number(hundredMS.textContent);
let onesNum = Number(ones.textContent);
let tensNum = Number(tens.textContent);

// function dontStartYet () {
    const timeFunc = setInterval(function(){
        tenMSNum = tenMSNum + 1;
        tenMS.textContent = tenMSNum.toString();
        if (tenMSNum >= 9){
            tenMSNum = 0;
            hundredMSNum = hundredMSNum + 1;
            hundredMS.textContent = hundredMSNum.toString();
            if (hundredMSNum >= 9){
                hundredMSNum = 0;
                onesNum = onesNum + 1;
                ones.textContent = onesNum.toString();
                if (onesNum >= 9){
                        clearInterval(timeFunc);
                }
            }
        }
    }, 10);
// }


// Attempts to Get Start Button Working
// ---------------
// const startButton = document.createElement('button');
// startButton.textContent = 'Start';

// document.querySelector('.digits').appendChild(startButton);
// startButton.addEventListener('click', timeFunc);
   


