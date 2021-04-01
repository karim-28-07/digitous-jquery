$("button").click(function () {
    $("input[name=country]").val("input" + "https://restcountries.eu/rest/v2/name/");
});

$.ajax(

    {
        url: 'https://restcountries.eu/rest/v2/name/input',
        success: function (data) {

            $("button").click(function () {
                $("#country").html(data[0].name);

                $("#capital").html(data[0].capital);
            });

            // console.log("country :", data[0].name);
            // console.log("capital :", data[0].capital);



        }
    });

