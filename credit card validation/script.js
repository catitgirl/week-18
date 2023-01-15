for (let i in ['input', 'change', 'blur', 'keyup']) {
    cardcode.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
    cardform.number.value=this.value.split(" ").join("");
}

const colors = ["#ffff", "#E7993C", "#E73C99", "#3CE746"];
document.addEventListener("mousemove", function () {
    document.body.style.background 
            = colors[Math.floor(Math.random() * colors.length)];

})




