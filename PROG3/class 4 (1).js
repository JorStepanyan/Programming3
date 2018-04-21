class bujich{
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
            matrix[nory][norx] = 5;
            this.x = norx;
            this.y = nory;
            
        }
        this.energy--;
    }

    utel() {
        var xotaker = this.yntrelVandak(4);
        var norVandak = random(xotaker);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 5;
            this.x = norx;
            this.y = nory;
            this.energy++;
            for (var i in hivandutyunArr) {
                if (this.x == hivandutyunArr[i].x && this.y == hivandutyunArr[i].y) {
                    hivandutyunArr.splice(i, 1);
                }
            }

        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(4));
        if (this.multiply >= 1 && norVandak) {
            var Bujich = new bujich(norVandak[0], norVandak[1]);
            bujichArr.push(Bujich);
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.multiply = 0;
        }
    }


    mahanal() {
        
        if (this.energy <= 8) {
            for (var i in bujichArr) {
                if (this.x == bujichArr[i].x && this.y == bujichArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    bujichArr.splice(i, 1);
                    
                }
            }
        }
    }
}
