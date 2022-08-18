flag = 1
function f1() {
    alert("YEY! Thank you! Please message me sa messenger with Yes :)")
}
function f() {
    if (flag == 1) {
        Bn.style.top = 364
        Bn.style.left = 300
        flag = 2
    }
    else if (flag == 2) {
        Bn.style.top = 476
        Bn.style.left = 78
        flag = 3
    }
    else if (flag == 3) {
        Bn.style.top = 358
        Bn.style.left = 147
        flag = 4
    }
    else if (flag == 4) {
        Bn.style.top = 490
        Bn.style.left = 134
        flag = 5
    }
    else if (flag == 5) {
        alert("SAD :(")
    }
}