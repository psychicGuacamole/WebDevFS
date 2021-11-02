const Target = document.getElementById("target");

Target.addEventListener(
    "keydown",

    (e) => {
        if (e.key === "Enter") {
            location.href = "https://www.marhaonline.com/";
        }
        e.stopPropagation();
    }
);
