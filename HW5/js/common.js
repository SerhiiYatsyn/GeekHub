let items = document.getElementsByClassName('menu-mobile');

for (let i = 0; i < items.length; i++) {
    item = items.item(i);
    item.addEventListener("click", function (ent) {
        this.classList.toggle("active");
        let block = this.nextElementSibling;
        if (block.classList.contains('hidden2')) {
            block.classList.remove('hidden2');
        } else {
            block.classList.add('hidden2');
        }
    });
}
