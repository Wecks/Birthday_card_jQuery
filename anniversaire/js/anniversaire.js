$(function () {

    var $items, $click;
    $items = $("ul");
    $click = $("#add");

    $click.on('click', function (e) {
        e.preventDefault();
        $items.append('<li class="nextItem" id="1">'
            + "You're a great friend !"
            + '</li>');
        $(".nextItem").css("background-color", "#4CFF9B")
        $(this).remove();

        $(".nextItem").one('click', function (e) {
            e.preventDefault();
            $items.append('<li class="nextItem" id="2">'
                + "Today your's birthday !"
                + '</li>');
            $("#2").css("background-color", "#EAEA61");

            $(".nextItem").one('click', function (e) {
                e.preventDefault();
                $items.append('<li class="nextItem" id="3">'
                    + "Wishing you all the best !"
                    + '</li>');
                $("#3").css("background-color", "#FA7EF5");

                $(".nextItem").one('click', function (e) {
                    e.preventDefault();
                    $("#1").text("Happy Birthday !");
                    $("#2").text("Happy Birthday !");
                    $("#3").text("Happy Birthday !");
                    $("body").css("background-image", "url('https://3axis.co/user-images/r1z2kgp1.jpg')")
                });
            });
        });

    });
})