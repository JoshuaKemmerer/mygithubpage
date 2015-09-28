$(document).ready(function () {

    var $dbCount = 21;
    for (var i = 1; i < $dbCount + 1; i++) {
        $("<style>")
          .prop("type", "text/css")
          .html("\
                .db-container:hover .oval" + i + " {\
                  opacity: 1;\
                  -webkit-transition: all 0.2s ease-in-out;\
                  -moz-transition: all 0.2s ease-in-out;\
                  -o-transition: all 0.2s ease-in-out;\
                  transition: all 0.2s ease-in-out;\
                  -moz-transition-delay: " + (0.075 * i) + "s;\
                  -o-transition-delay: " + (0.075 * i) + "s;\
                  -webkit-transition-delay: " + (0.075 * i) + "s;\
                  transition-delay: " + (0.075 * i) + "s;\
                }\
                .db-container:hover .cap-shadow" + i + " {\
                  opacity: 1;\
                  -webkit-transition: all 0.s ease-in-out;\
                  -moz-transition: all 0.2s ease-in-out;\
                  -o-transition: all 0.2s ease-in-out;\
                  transition: all 0.2s ease-in-out;\
                  -moz-transition-delay: " + (0.075 * i) + "s;\
                  -o-transition-delay: " + (0.075 * i) + "s;\
                  -webkit-transition-delay: " + (0.075 * i) + "s;\
                  transition-delay: " + (0.075 * i) + "s;\
                }\
                .oval" + i + " {\
                  top: " + 6 * i + "px;\
                  z-index: " + i + ";\
                }")
          .appendTo("head");

        if (i == $dbCount)
            $('.db-container').prepend("<div class='oval oval-rest oval" + i +
              "'><div class='cap-last cap-shadow cap-shadow" + i + "'></div></div>");
        else
            $('.db-container').prepend("<div class='oval oval-rest oval" + i +
              "'><div class='cap cap-shadow cap-shadow" + i + "'></div></div>");
    }
    $('.db-container').prepend("<div class='center-text'><span class='db-title-b2b'>21+ Tables Created</span></div>");

    $('.db-container').onmouseover(function () {
        $('cap-first').css({ 'background-image': "radial-gradient( #616161, #DADADA )" });
    });
});