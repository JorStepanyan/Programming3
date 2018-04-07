class hivandutyun{
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
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1]
        ];

    }


    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;
            this.energy--;
        }
    }

    utel() {
        // random(this.yntrelVandak(1)) || random(this.yntrelVandak(2)) || ...
        var hivandxot = this.yntrelVandak(1);
        var norVandak = random(hivandxot);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;

            
            for (var i in grassArr) {
                if (norx == grassArr[i].x && nory == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            hivandutyunArr.push(new hivandutyun(norx, nory));
            this.energy++;
        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak && this.multiply >= 10) {
            var xotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(xotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.multiply = 0;

            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
        }
    }


    mahanal() {
        if (this.energy <= 8) {
            for (var i in hivandutyunArr) {
                if (this.x == hivandutyunArr[i].x && this.y == hivandutyunArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    hivandutyunArr.splice(i, 1);
                    
                }
            }
        }
    }
}
