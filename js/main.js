window.onload = function() {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext('2d')) {
        var context = canvas.getContext('2d');
       
        context.fillStyle = '#101010';
        context.strokeStyle = '#f18f01';

        context.fillRect(0, 0, canvas.width, canvas.height);
        /* context.fillRect(500, Math.PI+500, 10, 10); */

        context.arc(canvas.width / 2, canvas.height / 2, 180, 0, Math.PI * 2, true);
        context.lineWidth = 5;
        context.stroke();

        context.strokeStyle = '#ff0000';
        context.arc(canvas.width / 2, cnavas.height / 2, 90, Math.PI / 2, 0, false) ;
        context.lineWidth = 2.5;
        context.stroke();
    }
}
