const tens = document.getElementById('secondTens')
tens.innerHTML = '0';
const ones = document.getElementById('secondOnes')
ones.innerHTML = '0';
const hundredMS = document.getElementById('msHundreds')
hundredMS.innerHTML = '0';
const tenMS = document.getElementById('msTens')
tenMS.innerHTML = '0';

let tenMSNum = Number(tenMS.innerHTML);
let hundredMSNum = Number(hundredMS.innerHTML);
let onesNum = Number(ones.innerHTML);
let tensNum = Number(tens.innerHTML);

// function dontStartYet () {
    const timeFunc = setInterval(function(){
        tenMSNum = tenMSNum + 1;
        tenMS.innerHTML = tenMSNum.toString();
        if (tenMSNum >= 9){
            tenMSNum = 0;
            hundredMSNum = hundredMSNum + 1;
            hundredMS.innerHTML = hundredMSNum.toString();
            if (hundredMSNum >= 9){
                hundredMSNum = 0;
                onesNum = onesNum + 1;
                ones.innerHTML = onesNum.toString();
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
   


