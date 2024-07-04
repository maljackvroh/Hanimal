document.addEventListener("DOMContentLoaded", function() {
    const biodataLink = document.querySelector(".biodata-link");
    const penangananLink = document.querySelector(".penanganan-link");
    const rekamMedisLink = document.querySelector(".rekam-medis-link");
    const biodataContent = document.querySelector(".biodata");
    const penangananContent = document.querySelector(".penanganan");
    const rekamMedisContent = document.querySelector(".rekam-medis");

    function setActive(link, content) {
        document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
        document.querySelectorAll(".content > div").forEach(div => div.classList.remove("active"));
        link.classList.add("active");
        content.classList.add("active");
    }

    biodataLink.addEventListener("click", function() {
        setActive(biodataLink, biodataContent);
    });

    penangananLink.addEventListener("click", function() {
        setActive(penangananLink, penangananContent);
    });

    rekamMedisLink.addEventListener("click", function() {
        setActive(rekamMedisLink, rekamMedisContent);
    });
});
