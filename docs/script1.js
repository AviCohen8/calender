let er = 0
let q = ''

function Equls(clicked_id) {
    let q = clicked_id
    document.getElementById("x").value += q;
    console.log("לחצת על מס");
}


function Equls1(clicked_id) {

    q = clicked_id
    console.error(q, 'function +/* start');
    document.getElementById("w").value = q
    er = document.getElementById("x").value
    document.getElementById("x").value = ''
}
function Equls4() {
    let rr = eval(document.getElementById("x").value)
    document.getElementById("x").value = rr}

function Equls2() {
    let e = eval(document.getElementById("x").value)
    document.getElementById("x").value = e
        switch (q) {
        case '+':
            console.log('+' + 'you prasted on +')
            document.getElementById("x").value = ((er * 1) + (e * 1));
            document.getElementById("z").innerHTML += er + '+' + e + '=' + ((er * 1) + (e * 1)) + '      ';
            break
        case '-':
            document.getElementById("x").value = ((er * 1) - (e * 1));
            document.getElementById("z").innerHTML += er + '-' + e + '=' + ((er * 1) + (e * 1)) + '      ';
            break
        case '*':
            document.getElementById("x").value = ((er * 1) * (e * 1));
            document.getElementById("z").innerHTML += er + '*' + e + '=' + ((er * 1) + (e * 1)) + '      ';
            break
        case '/':
            document.getElementById("x").value = ((er * 1) / (e * 1));
            document.getElementById("z").innerHTML += er + '/' + e + '=' + ((er * 1) + (e * 1)) + '      ';
            break

    }


}

function Equls3() {

    document.getElementById("x").value = ''
    document.getElementById("w").value = ''
}