document.addEventListener('DOMContentLoaded', function() {
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 400, // largura da página
        height: 600, // altura da página
        showCover: true
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
});
