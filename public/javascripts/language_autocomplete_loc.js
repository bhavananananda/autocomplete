
// NOTE: Download this file from LOC and save it in the same directory  =  "http://loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt"
// Choose an option (autocomplete feature appears at the 2nd key press).
// Select from the list of languages as you type, the language code automatically gets filled in
// Use the input id name "language" for the autocomplete feature <input id="language">
// Use the input id name "languageCode" for the autocomplete to automatically fill in when the language is selected

languageText = $.ajax({type: "GET", url: "ISO-639-2_utf-8.txt", async: false}).responseText;

var allTextLines = languageText.split(/\r\n|\n/);
var availableOptions = [];

for (var i=1; i<allTextLines.length; i++)
{
     var lineData = allTextLines[i].split('|');
     var code = lineData[0]
     var label = lineData[3]
     lineJson = { "label" : label , "code" : code }
     availableOptions.push(lineJson);
}
 console.log(availableOptions)

$(function() {
    $( "#language" ).autocomplete(
    {  minLength:2,
       source:  availableOptions,
       focus: function( event, ui ) {
       $( "#language" ).val( ui.item.label );
          return false;
       },
       select: function( event, ui ) {
       $( "#language" ).val( ui.item.label );
       $( "#languageCode" ).val( ui.item.code );

       return false;
       }
    })
});