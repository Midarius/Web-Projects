window.onload = function() {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 1224;
    canvas.height = 768;

    if (canvas.getContext('2d')) {
        var context = canvas.getContext('2d');
       
        context.fillStyle = '#f18f01';
        context.strokeStyle = '#f18f01';

        context.fillRect(500, Math.PI+500, 10, 10);
        /* context.fillRect(500, Math.PI+500, 10, 10); */

        context.arc(canvas.width / 2, canvas.height / 2, 90, 0, Math.PI * 2, true);
        context.stroke();
    }
    
    console.log(Math.PI);
}