class StandartObject {
    constructor(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
    }
    draw() {
        ctx.drawImage(
            this.image,
            this.sx,
            this.sy,
            this.sWidth,
            this.sHeight,
            this.dx,
            this.dy,
            this.dWidth,
            this.dHeight,
        )
    }
}

class Hero extends StandartObject {
    constructor(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        super(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    animation() {
        if (this.sx < 160) {
            this.sx += 48
        } else {
            this.sx = 16
        }
    }

    move(x, y) {
        if ((x < 0) && (this.dx > 0)) { //left
            this.animation();
            this.dx -= 4;
            this.sy = 112;
        }
        if ((y < 0) && (this.dy > 0)) { //top
            this.animation();
            this.dy -= 4;
            this.sy = 64;
        }
        if ((x > 0) && (this.dx < canvas.width - this.sWidth)) { //right
            this.animation();
            this.dx += 4;
            this.sy = 160;
        }
        if ((y > 0) && (this.dy < canvas.height - this.sHeight)) { //bottom
            this.animation();
            this.dy += 4;
            this.sy = 16;
        }
        if ((x == 0) && (y == 0)) {
            this.sx = 16;
            this.sy = 16;
        }
    }
}

class SolidObject extends StandartObject {
    constructor(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        super(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        this.x1;
        this.y1
        this.x2;
        this.y2;

        this.x3;
        this.y3;
        this.x4;
        this.y4;
    }

    intersects(hero, x, y) {
        this.x1 = hero.dx + x;
        this.y1 = hero.dy + y;
        this.x2 = this.x1 + hero.sWidth;
        this.y2 = this.y1 + hero.sHeight;

        this.x3 = this.dx;
        this.y3 = this.dy;
        this.x4 = this.x3 + this.sWidth * 2;
        this.y4 = this.y3 + this.sHeight * 2;


        if ((((this.x3 < this.x1) && (this.x1 < this.x4)) || ((this.x3 < this.x2) && (this.x2 < this.x4))) && (((this.y3 < this.y1) && (this.y1 < this.y4)) || ((this.y3 < this.y2) && (this.y2 < this.y4)))) {
            console.log(this.x3 + '<' + this.x2 + '<' + this.x4);
            return true
        } else {
            return false
        }
    }
    
}


