clickedStarHandler = (starIndex) => {
    for (let i = 0; i < starIndex + 1; i += 1) {
        document.getElementsByTagName("span")[i].innerHTML = "&starf;";
    }

    for (let i = 4; i > starIndex; i -= 1) {
        document.getElementsByTagName("span")[i].innerHTML = "&star;";
    }
};
