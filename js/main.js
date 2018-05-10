window.onload = function() {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = '5';
    canvas.style.position = 'absolute';
    canvas.id = 'timer';

    var canvas2 = document.createElement('canvas');
    document.body.appendChild(canvas2);
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    canvas2.style.zIndex = '6';
    canvas.style.position = 'absolute';
    canvas2.id = 'background';

    if (canvas.getContext('2d')) {
        let context = canvas.getContext('2d');

        context.beginPath();

        context.strokeStyle = '#ff9f1c';
        context.fillStyle = "#2da8c4";
        context.lineWidth = 16;

        context.arc(canvas.width / 2, canvas.height / 2, 160, 0, Math.PI * 2, true);
        
        
        context.fill();
        context.stroke();
        context.closePath();

        /* Cercle extérieur */
        context.beginPath();

        context.strokeStyle = '#ffbf69';
        context.lineWidth = 4;

        context.arc(canvas.width / 2, canvas.height / 2, 160+8, Math.PI / 2, -Math.PI / 2, true);
        
        context.stroke();
        context.closePath();

        /* Cercle intérieur */
        context.beginPath();

        context.strokeStyle = '#252525';

        context.arc(canvas.width / 2, canvas.height / 2, 160-8, 0, Math.PI * 2, true);

        context.stroke();
        context.closePath();
    }

    if (canvas2.getContext('2d')) {
        let context = canvas2.getContext('2d');

        context.fillStyle = '#101010';
        
        /* context.fillRect(0, 0, canvas2.width, canvas2.height); */

        /* Creation d'un hexagone */
        let x = 24, y = 44, size = Math.PI * 16, side = 0;

        context.beginPath();
        context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
        for (side; side < 7; side++) {
            context.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }
        context.stroke();
        context.closePath();

        /* x = 48 + Math.PI * 16, y = 88, side = 0;
        context.beginPath();
        context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
        for (side; side < 7; side++) {
            context.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }
        context.stroke();
        context.closePath(); */

        for (let i = 0; x < canvas2.width || y < canvas2.height; i++) {
            x = x + 24 + size;
            y = y + 44;
            side = 0;

            context.beginPath();
        context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
        for (side; side < 7; side++) {
            context.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }
        context.stroke();
        context.closePath();
        }
    }
}
