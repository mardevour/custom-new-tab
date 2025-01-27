const asciiMap = {
    ':': [
        '   ',
        '██╗',
        '╚═╝',
        '██╗',
        '╚═╝',
        '   '
    ],
    '0': [
        ' ██████╗ ',
        '██╔═████╗',
        '██║██╔██║',
        '████╔╝██║',
        '╚██████╔╝',
        ' ╚═════╝ '
    ],
    '1': [
        ' ██╗',
        '███║',
        '╚██║',
        ' ██║',
        ' ██║',
        ' ╚═╝'
    ],
    '2': [
        '██████╗ ',
        '╚════██╗',
        ' █████╔╝',
        '██╔═══╝ ',
        '███████╗',
        '╚══════╝'
    ],
    '3': [
        '██████╗ ',
        '╚════██╗',
        ' █████╔╝',
        ' ╚═══██╗',
        '██████╔╝',
        '╚═════╝ '
    ],
    '4': [
        '██╗  ██╗',
        '██║  ██║',
        '███████║',
        '╚════██║',
        '     ██║',
        '     ╚═╝'
    ],
    '5': [
        '███████╗',
        '██╔════╝',
        '███████╗',
        '╚════██║',
        '███████║',
        '╚══════╝'
    ],
    '6': [
        ' █████╗ ',
        '██╔═══╝ ',
        '██████╗ ',
        '██╔══██╗',
        '╚█████╔╝',
        ' ╚════╝ '
    ],
    '7': [
        '███████╗',
        '╚════██║',
        '    ██╔╝',
        '   ██╔╝ ',
        '   ██║  ',
        '   ╚═╝  '
    ],
    '8': [
        ' █████╗ ',
        '██╔══██╗',
        '╚█████╔╝',
        '██╔══██╗',
        '╚█████╔╝',
        ' ╚════╝ '
    ],
    '9': [
        ' █████╗ ',
        '██╔══██╗',
        '╚██████║',
        ' ╚═══██║',
        ' █████╔╝',
        ' ╚════╝ '
    ],
    ' ': [
        '        ',
        '        ',
        '        ',
        '        ',
        '        ',
        '        '
    ]
};


function mostrarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');

    const horaFormateada = `${horas}:${minutos}`;
    document.getElementById('hora').textContent = horaFormateada;
    convertToASCII();
}

setInterval(mostrarHora, 1000);
mostrarHora();
convertToASCII();


function convertToASCII() {
    const value = document.getElementById("hora").textContent;
    let output = ['', '', '', '', '', ''];

    for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (asciiMap[char]) {
            const asciiChar = asciiMap[char];
            for (let line = 0; line < 6; line++) {
                output[line] += asciiChar[line] + ' ';
            }
        }
    }

    document.getElementById("output").textContent = output.join('\n');
}