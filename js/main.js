$(function () {
    let selectedView = 0;
    let aboutClicked = false;
    const showNext = (next) => {
        switch (next) {
            case 1:
                $("#aboutButton").addClass("selectedButton");
                $("#about").fadeIn(500);
                if (!aboutClicked) {
                    typewriter.type();
                    aboutClicked = true;
                }

                break;
            case 2:
                $("#contact").fadeIn(500);
                $("#contactButton").addClass("selectedButton");
                break;
            case 3:
                $("#projects").fadeIn(500);
                $("#projectsButton").addClass("selectedButton");
                break;
        }
    };

    const changeUI = (previous, next) => {
        // about: 1, contact: 2, projects:
        selectedView = next;
        if (!previous) {
            $("#introButtons").animate(
                { marginTop: "-=80" },
                { duration: 500, queue: false }
            );
            $("#logoImg").animate(
                { width: 180, marginTop: "-=50" },
                { duration: 400, queue: false }
            );
            $("#type").fadeOut(100, () => {
                showNext(next);
            });
        } else {
            switch (previous) {
                case 1:
                    $("#about").fadeOut(250, () => showNext(next));
                    $("#aboutButton").removeClass("selectedButton");
                    break;
                case 2:
                    $("#contact").fadeOut(250, () => showNext(next));
                    $("#contactButton").removeClass("selectedButton");
                    break;
                case 3:
                    $("#projects").fadeOut(250, () => showNext(next));
                    $("#projectsButton").removeClass("selectedButton");
                    break;
            }
        }
    };

    $("#logo").fadeIn(2000);

    setTimeout(() => {
        $("#logoImg").animate({ width: 250, marginTop: "-=100" }, 1500);
    }, 2500);

    setTimeout(() => {
        $(".firstLine").fadeIn(100).css("display", "block");
    }, 3500);

    setTimeout(() => {
        $(".secondLine").fadeIn(100).css("display", "block");
    }, 5600);

    setTimeout(() => {
        $("#introButtons").fadeIn(3500).css("display", "block");
    }, 8000);

    $("#aboutButton").click(() => {
        if (selectedView !== 1) {
            changeUI(selectedView, 1);
        }
    });

    $("#contactButton").click(() => {
        if (selectedView !== 2) {
            changeUI(selectedView, 2);
        }
    });

    $("#projectsButton").click(() => {
        if (selectedView !== 3) {
            changeUI(selectedView, 3);
        }
    });

    /** Typewriter script by Stove on CodePen.io
     * https://codepen.io/stevn/pen/jEZvXa
     **/
    function setupTypewriter(t) {
        let HTML = t.innerHTML;

        t.innerHTML = "";

        let cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = -100,
            tempTypeSpeed = 0;

        let type = function () {
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                } else {
                    tempTypeSpeed = Math.random() * typeSpeed;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = Math.random() * typeSpeed;
                writingTag = false;
                if (tagOpen) {
                    let newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }
        };

        return {
            type: type,
        };
    }

    typewriter = setupTypewriter(typewriter);
});
