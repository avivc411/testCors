$(document).ready(function(){
    $("#p0").click({param1:0}, sendHttp);
    $("#p1").click({param1:1}, sendHttp);
    $("#p2").click({param1:2}, sendHttp);
    $("#p3").click({param1:3}, sendHttp);
    $("#p3p").click({param1:4}, sendHttp);
    $("#p3u").click({param1:5}, sendHttp);
});

function sendHttp(event){
    let url = "";
    let type = "GET";
    switch(event.data.param1){
        case 0:
            url = "https://65e9365d2ecf.ngrok.io/0";
            break;
        case 1:
            url = "https://localhost:5001/1";
            break;
        case 2:
            url = "https://fa68ec0e9349.ngrok.io/2";
            break;
        case 3:
            url = "https://fa68ec0e9349.ngrok.io/3";
            break;
        case 4:
            url = "https://localhost:5001/3p";
            type = "POST";
            break;
        case 5:
            url = "https://localhost:5001/3u";
            type = "PUT";
            break;
    }
    $.ajax({
        type: type,
        crossDomain: true,
        url: url,
        origin: "https://localhost:3000"
    }).done(function (data) {
        console.log(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    });
}