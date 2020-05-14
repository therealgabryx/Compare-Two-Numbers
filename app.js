function insert() {
    const num1 = parseInt(prompt('Inserisci il primo numero.. '));
    const num2 = parseInt(prompt('Inserisci il secondo numero.. '));

    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('val1').innerHTML = `${num1}`;
        document.getElementById('val2').innerHTML = `${num2}`;

        if (num1 < num2) {
            if (num1 > 0) {
                if (num1 == 1) {
                    document.getElementById(
                        'res'
                    ).innerHTML = `l'unico multiplo di 1 è 1`;
                } else {
                    multiples(num1, num2);
                }
            } else if (num1 == 0) {
                document.getElementById('res').innerHTML = `0 non ha multipli`;
            } else {
                document.getElementById('res').innerHTML = 'invalid input';
            }
        } else if (num1 == num2) {
            document.getElementById('res').innerHTML = `i numeri sono uguali`;
        } else {
            document.getElementById(
                'res'
            ).innerHTML = `non esistono multipli di ${num1} in ${num2}`;
        }
    } else {
        document.getElementById('res').innerHTML = 'invalid input';
        document.getElementById('val1').innerHTML = `?`;
        document.getElementById('val2').innerHTML = `?`;
    }
}

function multiples(num1, num2) {
    nums = [];
    for (let i = 0; i <= num2; i += num1) {
        if (!(i == 0)) {
            nums.push(i);
        }
    }
    if (nums != null) {
        document.getElementById(
            'res'
        ).innerHTML = `i multipli di ${num1} in ${num2} sono `;
        for (let i = 0; i < nums.length; i++) {
            if (i == nums.length - 1) {
                document.getElementById('res').innerHTML += `${nums[i]}`;
            } else if (i == nums.length - 2) {
                document.getElementById('res').innerHTML += `${nums[i]} e `;
            } else {
                document.getElementById('res').innerHTML += `${nums[i]}, `;
            }
        }
    }
}
