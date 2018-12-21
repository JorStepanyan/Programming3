module.exports =
    class bujich extends global.LivingCreature {
        constructor(x, y, hivandutyun) {
            super(x, y, hivandutyun);
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
                matrix[nory][norx] = 5;
                this.x = norx;
                this.y = nory;

            }
            this.energy--;
        }

        utel() {
            var hivandXot = this.yntrelVandak(4);
            var norVandak = this.getrandom(hivandXot);

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
                        break;
                    }
                }
                this.energy++;
            }
            else {
                this.sharjvel();
            }
            ///////////////exanaki azdecutyuny bujichi vra
            if (exanak == "garun") {
                if (this.energy >= 2) {
                    this.bazmanal();
                }
            }
            else if (exanak == "amar" || exanak == "ashun") {
                if (this.enrgy >= 5) {
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
            var norVandak = this.getrandom(this.yntrelVandak(4));
            if (this.multiply >= 1 && norVandak) {
                var Bujich = new bujich(norVandak[0], norVandak[1]);
                bujichArr.push(Bujich);
                matrix[norVandak[1]][norVandak[0]] = 5;
                this.multiply = 0;
            }
        }
        mahanal() {

            if (this.energy <= 5) {
                for (var i in bujichArr) {
                    if (this.x == bujichArr[i].x && this.y == bujichArr[i].y) {
                        matrix[this.y][this.x] = 0;
                        bujichArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
