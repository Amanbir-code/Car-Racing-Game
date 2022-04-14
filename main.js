canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mars =["car race.gif"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

car1_width = 120;
car1_height = 70;
car1_image = 'car1.png';
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = 'car2.png';
car2_x = 10;
car2_y = 100;

background_image = ["race.png"];
console.log(background_image);

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;
    
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage (background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage (car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage (car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e){
    keypressed = e.keycode;
    console.log(keypressed);

    if (keypressed == '38')
    {
        up1();
        console.log("up");
    }

    if (keypressed == '40')
    {
        down1();
        console.log("down");
    }

    if (keypressed == '37')
    {
        left1();
        console.log("left");
    }

    if (keypressed == '39')
    {
        right1();
        console.log("right");
    }

    if (keypressed == '87')
    {
        up2();
        console.log("up");
    }

    if (keypressed == '83')
    {
        down2();
        console.log("down");
    }

    if (keypressed == '65')
    {
        left2();
        console.log("left");
    }

    if (keypressed == '68')
    {
        right2();
        console.log("right");
    }

}

function up1() {
    if (car1_y >= 0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow key is pressed, x = "+ car1_x +"| y = "+ car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function down1() {
    if (car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("When down arrow key is pressed, x = "+ car1_x +"| y = "+ car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function right1() {
    if (car1_x <= 700)
    {
        car1_x = car1_x + 10;
        console.log("When right arrow key is pressed, x = "+ car1_x +"| y = "+ car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function left1() {
    if (car1_x >= 0)
    {
        car1_x = car1_x - 10;
        console.log("When left arrow key is pressed, x = "+ car1_x +"| y = "+ car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function up2() {
    if (car2_y >= 0)
    {
        car2_y = car2_y -10;
        console.log("When w is pressed, x = "+ car2_x +"| y = "+ car2_y);

        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}




function down2() {
if (car2_y <= 500)
{
car2_y = car2_y + 10;
console.log("When s is pressed, x = "+ car2_x +"| y = "+ car2_y);

uploadbackground();
uploadcar2();
uploadcar1();
}
}

function right2() {
if (car2_x <= 700)
{
car2_x = car2_x + 10;
console.log("When d is pressed, x = "+ car2_x +"| y = "+ car2_y);

uploadbackground();
uploadcar2();
uploadcar1();
}
}

function left2() {
if (car2_x >= 0)
{
car2_x = car2_x - 10;
console.log("When  is pressed, x = "+ car2_x +"| y = "+ car2_y);

uploadbackground();
uploadcar2();
uploadcar1();
}
}