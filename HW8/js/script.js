document.addEventListener("DOMContentLoaded", () => {
    let activeSlide = 2,
        slider = document.querySelector(".slider"),
        slides = document.querySelectorAll(".slider_image"),
        slider_info = document.querySelectorAll(".data-info"),
        slider_data = Array.from(document.querySelectorAll(".data")),
        prevButton = document.querySelector("#prev"),
        nextButton = document.querySelector("#next");
    console.log(slider_data);
    addItemNumbers(slider_data);
    activate(slides, activeSlide);
    activate(slider_info, activeSlide);
    dataActivate(slider_data, activeSlide);

    slider.addEventListener("slide", function (e) {
        activeSlide = e.detail.item;
        console.log(`Activate ${activeSlide} slide`);
        activate(slides, activeSlide);
        activate(slider_info, activeSlide);
        dataActivate(slider_data, activeSlide);
    }, false);

    function addItemNumbers(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].dataset.itemNumber = i;
        }
    }

    function activate(items, k) {
        for (let i = 0; i < items.length; i++) {
            if (i === k) {
                items[i].classList.add("item-active");
            } else {
                items[i].classList.remove("item-active");
            }
        }
    }

    function dataActivate(items, k) {
        for (let i = 0; i < items.length; i++) {
            if (i === k) {
                items[i].classList.add("data-info_active");
            } else {
                items[i].classList.remove("data-info_active");
            }
        }
    }

    nextButton.addEventListener("click", function (e) {
        let event = new CustomEvent("slide", {
            detail: {
                item: (activeSlide + 1) % slides.length
            }
        });
        slider.dispatchEvent(event);
    });

    prevButton.addEventListener("click", function (e) {
        let event = new CustomEvent("slide", {
            detail: {
                item: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
            }
        });
        slider.dispatchEvent(event);
    });

    for (let item of slider_data) {
        item.addEventListener("click", function (e) {
            let event = new CustomEvent("slide", {
                detail: {
                    item: +this.dataset.itemNumber
                }
            });
            slider.dispatchEvent(event);
        });
    }
});
