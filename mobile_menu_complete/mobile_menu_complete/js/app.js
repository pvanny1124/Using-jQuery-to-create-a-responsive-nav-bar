//Probelm: looks gross in smaller browser widths and small devices
//Solution: Hide text links and swap them out with a more appropriate navigation.

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function () {
    var $anchor = $(this);
    //create an option
    var $option = $("<option></option>");
    
    //Deal with selected options depending on current page
    //is it selected?
    //Keeps the selected item on hold in the bar!!
    if($anchor.parent().hasClass("selected")){
        $option.prop("selected", true);
    }
    
    //option's value is the value of the href
    $option.val($anchor.attr("href")); 
    //option's text is the text of link
    $option.text($anchor.text());
    
    //append option to select
    $select.append($option);
    
});

    //Following changes without the use of a button!
    //When user clicks the item, the page changes automatically
    //When select is being "changed" -> constitues as event!
    //Even handler takes charge here!
    $select.change(function (){
        window.location = $select.val();
    });

/*Implementation using a button below*/

////create button 
//    var $button = $("<button>Go</button>");

////append it to the menu
//    $("#menu").append($button);
//
////Bind click to button
//    $button.click(function () {
//        //Go to select's location and get its value
//        window.location = $select.val();
//    });
//    


   







