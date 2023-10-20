const stars = document.querySelectorAll('.star-rating');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            if (index >= index2) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        })
    })
});
const rateButton = document.getElementById("rateButton");
const feedback = document.querySelector(".sendFeedback");
feedback.addEventListener("click", function () {
    feedback.classList.add("none");
    document.getElementById("commentFinal").classList.add("none");
    document.querySelector("#commentSection").innerHTML += `<span style="font-size: 22px;">Grazie del tuo feedback, ti faremo sapere presto con una mail</span>`
    document.querySelector(".moreInfo").classList.remove("none");
})