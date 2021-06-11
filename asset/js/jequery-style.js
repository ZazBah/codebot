/*botton-size*/
function handleButtonPadding(){
    $(".border").addClass("hide");
    $(".border-radius").addClass("hide");

    $(".padding").removeClass("hide");
}

function handleButtonBorder(){
    $(".padding").addClass("hide");
    $(".border-radius").addClass("hide");

    $(".border").removeClass("hide");
}

function handleButtonBorderRedious(){
    $(".padding").addClass("hide");
    $(".border").addClass("hide");

    $(".border-radius").removeClass("hide");
}
/*button-font*/
function handleFontSize(){
    $(".font-weight").addClass("hide");
    $(".letter-spacing").addClass("hide");

    $(".font-size").removeClass("hide");
}

function handleFontWeight(){
    $(".font-size").addClass("hide");
    $(".letter-spacing").addClass("hide");

    $(".font-weight").removeClass("hide");
}

function handleLetterSpecing(){
    $(".font-size").addClass("hide");
    $(".font-weight").addClass("hide");

    $(".letter-spacing").removeClass("hide");
}
/*button-color*/
function handleFontColor(){
    $(".background-color").addClass("hide");
    $(".border-color").addClass("hide");

    $(".font-color").removeClass("hide");
}

function handleBackgroundColor(){
    $(".font-color").addClass("hide");
    $(".border-color").addClass("hide");

    $(".background-color").removeClass("hide");
}

function handleBorderColor(){
    $(".background-color").addClass("hide");
    $(".font-color").addClass("hide");

    $(".border-color").removeClass("hide");
}