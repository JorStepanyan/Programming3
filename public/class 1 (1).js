class Gishatich{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.multiply = Math.round(Math.random() * 8);
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;
            this.x = norx;
            this.y = nory;
            
        }
        this.energy--;
    }

    utel() {
        var xotaker = this.yntrelVandak(2);
        var norVandak = random(xotaker);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;
            this.x = norx;
            this.y = nory;
            this.energy++;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }

        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(2));
        if (this.multiply >= 1 && norVandak) {
            var gishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(gishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.multiply = 0;
        }
    }


    mahanal() {
        
        if (this.energy <= 8) {
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    gishatichArr.splice(i, 1);
                    
                }
            }
        }
    }
}
