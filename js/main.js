window.onload = function() {
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    if (canvas.getContext("2d")) {
       var context = canvas.getContext("2d");
       
       context.fillStyle = "#f18f01";
       context.fillRect(1, 1, 1, 1);
    }
}