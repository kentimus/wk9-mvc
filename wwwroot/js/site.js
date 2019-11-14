// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    let imdb_id = $("#poster-container").data("imdb");

    if (imdb_id) {
        $.getJSON("https://www.omdbapi.com/?i=" + imdb_id + "&apikey=ee2a1a3f", function (data) {
            //console.log(data);
            $("#poster").attr("src", data.Poster);
            $("#plot").text(data.Plot);
            $("#actors").text(data.Actors);
        });
    }

    $("#input-imdb").on("change", function () {
        let imdb_id = $("#input-imdb").val();
        $.getJSON("https://www.omdbapi.com/?i=" + imdb_id + "&apikey=ee2a1a3f", function (data) {
            //console.log(data);

            let releaseDate = new Date(data.Released);
            let releaseYear = releaseDate.getFullYear();
            let releaseMonth = releaseDate.getMonth() + 1;
            let releaseDay = releaseDate.getDate();
            let monthPad = (releaseMonth < 10) ? "0" : "";
            let dayPad = (releaseDay < 10) ? "0" : "";
            let formattedDate = releaseYear + "-" + monthPad + releaseMonth + "-" + dayPad + releaseDay;
            
            //alert(formattedDate);
            //console.log(formattedDate);

            $("#input-title").val(data.Title);
            $("#input-release-date").val(formattedDate);
            $("#poster").attr("src", data.Poster);
        });
    });
});
