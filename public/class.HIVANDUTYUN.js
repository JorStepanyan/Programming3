class hivandutyun extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
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
        var hivandxot = this.yntrelVandak(1);
        var norVandak = random(hivandxot);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;


            for (var i in grassArr) {
                if (norx == grassArr[i].x && nory == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            hivandutyunArr.push(new hivandutyun(nory, norx));
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
            var newHivandutyunObject = new hivandutyun(norVandak[0], norVandak[1]);
            hivandutyunArr.push(newHivandutyunObject);
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.multiply = 0;
            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
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
                    break;

                }
            }
        }
    }
}
