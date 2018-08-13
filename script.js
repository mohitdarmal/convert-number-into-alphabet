input = document.querySelector('input');
ans = document.querySelector('.ans');
var arr = [];
var total, firstLtr, cnvrt;

var oneToTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var twnty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty']
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
var ty = ['Zero', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

input.addEventListener('keydown', function (e) {

    if (e.keyCode === 13) {
        if (input.value <= 9) {
            for (var i = 0; i < oneToTen.length; i++) {
                ans.textContent = oneToTen[input.value]
            }
        } else if (input.value >= 10 && input.value <= 19) {
            scndltr = input.value.charAt(1)
            ans.textContent = twnty[scndltr]
        } else if (input.value >= 20 && input.value <= 99) {
            for (var j = 0; j <= 99; j++) {
                firstLtr = input.value.charAt(0)
                scndltr = input.value.charAt(1)

                if (firstLtr === num[firstLtr] || scndltr === num[scndltr]) {
                    if (scndltr === '0') {
                        ans.textContent = ty[firstLtr]
                    } else {
                        ans.textContent = ty[firstLtr] + ' ' + oneToTen[scndltr];
                    }

                }
            }
        } else if (input.value >= 100 && input.value <= 999) {
            for (var j = 0; j <= 99; j++) {

                firstLtr = input.value.charAt(0)
                scndltr = input.value.charAt(1)
                thrdLtr = input.value.charAt(2)
                scndThrd = input.value.charAt(1) + input.value.charAt(2)

                if (firstLtr === num[firstLtr] || scndltr === num[scndltr] || thrdLtr === num[thrdLtr]) {
                    if (scndThrd >= 11 && scndThrd <= 19) {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'Hundred' + ' ' + twnty[thrdLtr]
                    } else if (scndltr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'Hundred' + ' ' + oneToTen[thrdLtr]
                    } else if (thrdLtr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'Hundred' + ' ' + ty[scndltr]
                    } else if (scndltr === '0' && thrdLtr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'Hundred';
                    } else {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'Hundred' + ' ' + ty[scndltr] + ' ' + oneToTen[thrdLtr]
                    }
                }

            }
        } else if (input.value >= 1000 && input.value <= 9999) {
            for (var j = 0; j <= 99; j++) {

                firstLtr = input.value.charAt(0)
                scndltr = input.value.charAt(1)
                thrdLtr = input.value.charAt(2)
                frthLtr = input.value.charAt(3)
                thrdfrth = input.value.charAt(2) + input.value.charAt(3)

                if (firstLtr === num[firstLtr] || scndltr === num[scndltr] || thrdLtr === num[thrdLtr] || frthLtr === num[frthLtr]) {
                    if (thrdfrth >= 11 && thrdfrth <= 19) {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand ' + twnty[frthLtr]
                    } else if (scndltr === '0' && thrdLtr === '0' && frthLtr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand'
                    } else if (scndltr === '0' && thrdLtr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand' + ' ' + oneToTen[frthLtr]
                    } else if (scndltr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand' + ' ' + ty[thrdLtr] + ' ' + oneToTen[frthLtr]

                    } else if (thrdLtr === '0' && frthLtr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand' + ' ' + oneToTen[scndltr] + ' ' + 'Hundred '
                    } else if (thrdLtr === '0') {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand' + ' ' + oneToTen[scndltr] + ' ' + 'Hundred ' + oneToTen[frthLtr]
                    } else {
                        ans.textContent = oneToTen[firstLtr] + ' ' + 'thousand' + ' ' + oneToTen[scndltr] + ' ' + 'Hundred ' + ty[thrdLtr] + ' ' + oneToTen[frthLtr]
                    }

                }

            }
        }
    }

});