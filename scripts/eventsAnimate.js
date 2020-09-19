$(document).ready(function() {

    $(".event-card").hover(
        function() {
            $(this).css({
                cursor: "pointer",
                boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.3)",
                transform: "translate(-10px, -10px)" 
            });
        },
        function() {
            $(this).css({
                boxShadow: "0px 0px 0px black",
                transform: "translate(0px, 0px)" 
            });
        }
    )

});