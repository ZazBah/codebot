/*padding*/
function padding(padding){
    $("#CoustomButton").css({"padding" : padding});
    let Input = 'padding : '+padding+' ;' ;
    $("#paddingOutput").text(Input);
}
/*border*/
function border(border){
    $("#CoustomButton").css({"border" : border});
    let Input = 'border : '+border+' ;' ;
    $("#borderOutput").text(Input);
}
/*border-redious*/
function borderRadius(radius){
    $("#CoustomButton").css({"border-radius" : radius});
    let Input = 'border-radius : '+radius+' ;' ;
    $("#borderRadiusOutput").text(Input);
}
/*font-size*/
function fontSize(fontsize){
    $("#CoustomButton").css({"font-size" : fontsize});
    let Input = 'font-size : '+fontsize+' ;' ;
    $("#fontSizeOutput").text(Input);
}
/*font-weight*/
function fontWeight(fontweight){
    $("#CoustomButton").css({"font-weight" : fontweight});
    let Input = 'font-weight : '+fontweight+' ;' ;
    $("#fontWeightOutput").text(Input);
}
/*letter-specing*/
function letterSpacing(letterspacing){
    $("#CoustomButton").css({"letter-spacing" : letterspacing});
    let Input = 'letter-spacing : '+letterspacing+' ;' ;
    $("#letterSpacingOutput").text(Input);
}
/*font-color*/
function fontColor(fontcolor){
    $("#CoustomButton").css({"color" : fontcolor});
    let Input = 'color : '+fontcolor+' ;' ;
    $("#fontColorOutput").text(Input);
}
/*background-color*/
function backgroundColor(backgroundcolor){
    $("#CoustomButton").css({"background-color" : backgroundcolor});
    let Input = 'background-color : '+backgroundcolor+' ;' ;
    $("#backgroundColorOutput").text(Input);
}
/*border-color*/
function borderColor(bordercolor){
    $("#CoustomButton").css({"border-color" : bordercolor});
    let Input = 'border-color : '+bordercolor+' ;' ;
    $("#borderColorOutput").text(Input);
}
