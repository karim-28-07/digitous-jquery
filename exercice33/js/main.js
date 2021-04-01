$("button").click(function () {


    $.ajax(

        {
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function (data) {

                $("button").click(function () {
                    $("#country").html(data[0].name);

                    $("#capital").html(data[0].capital);
                });

                // console.log("country :", data[0].name);
                // console.log("capital :", data[0].capital);



            }
        });

});