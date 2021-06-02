setTimeout(() => {
    $(function() {
        $(".pie").each(function() {
            var percent = $(this).data("percent"),
                $left = $(this).find(".left span"),
                $right = $(this).find(".right span"),
                deg;
            
            if(percent<=50) {
                // Hide left
                $left.hide();
                
                // Adjust right
                deg = 180 - (percent/100*360)
                $right.css({
                    "-webkit-transform": "rotateZ(-"+deg+"deg)"
                });
            } else {
                // Adjust left
                deg = 180 - ((percent-50)/100*360)
                $left.css({
                    "-webkit-transform": "rotateZ(-"+deg+"deg)"
                });
            }
        });
    });
}, 500);

