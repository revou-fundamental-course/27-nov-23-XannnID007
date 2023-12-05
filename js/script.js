function showPage(pageId) {
    const pages = document.querySelectorAll('.calculation-page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

function calculateLuas() {
    const base = parseFloat(document.getElementById('luasBase').value);
    const height = parseFloat(document.getElementById('luasHeight').value);

    if (!isNaN(base) && !isNaN(height)) {
        const result = 0.5 * base * height;
        document.getElementById('luasResult').innerHTML = `Luas = 0.5 * ${base} * ${height} = ${result.toFixed(2)}`;
    } else {
        document.getElementById('luasResult').innerHTML = 'Masukkan angka yang valid.';
    }
}

function calculateKeliling() {
    const sideA = parseFloat(document.getElementById('kelilingSideA').value);
    const sideB = parseFloat(document.getElementById('kelilingSideB').value);
    const sideC = parseFloat(document.getElementById('kelilingSideC').value);

    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
        const result = sideA + sideB + sideC;
        document.getElementById('kelilingResult').innerHTML = `Keliling = ${sideA} + ${sideB} + ${sideC} = ${result.toFixed(2)}`;
    } else {
        document.getElementById('kelilingResult').innerHTML = 'Masukkan angka yang valid.';
    }
}


function resetLuas() {
    document.getElementById('luasForm').reset();
    document.getElementById('luasResult').innerHTML = '';
}

function resetKeliling() {
    document.getElementById('kelilingForm').reset();
    document.getElementById('kelilingResult').innerHTML = '';
}
