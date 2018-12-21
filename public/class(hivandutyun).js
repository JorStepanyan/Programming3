module.exports =
    class hivandutyun extends global.LivingCreature {
        constructor(x, y) {
            super(x, y);
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
        yntrelVandak(ch) {
            this.stanalNorKordinatner();
            return super.yntrelVandak(ch);
        }

        sharjvel() {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getrandom(datarkVandakner);

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
            var norVandak = this.getrandom(hivandxot);

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
                hivandutyunArr.push(new hivandutyun(norx, nory));
                this.energy++;
            }
            else {
                this.sharjvel();
            }
            ///////////////exanaki azdecutyuny hivandutyan vra
            if (exanak == "garun") {
                if (this.energy >= 1) {
                    this.bazmanal();
                }
            }
            else if (exanak == "amar" || exanak == "ashun") {
                if (this.enrgy >= 1) {
                    this.bazmanal();
                }
            }
            else if (exanak == "dzmer") {
                if (this.energy >= 7) {
                    this.bazmanal();
                }
            }

        }


        bazmanal() {
            this.multiply++;
            var norVandak = this.getrandom(this.yntrelVandak(1));
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
            if (this.energy <= 5) {
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
