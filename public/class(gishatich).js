module.exports =
    class Gishatich extends global.LivingCreature {
        constructor(x, y, hivandutyun) {
            super(x, y, hivandutyun);
            this.axorjak = 0;
            this.ser = 0;
            this.bazmacox = false;
            this.timeout_time = 0;
            this.bazmanal_timeout = true;
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
                if (this.ser == 1) {
                    matrix[nory][norx] = 3;
                }

                else {
                    matrix[nory][norx] = 3.5;
                }
                this.x = norx;
                this.y = nory;

            }
            this.energy--

            if (this.energy <= 0) {
                this.mahanal();
            }
        }

        timeout() {
            if (this.bazmanal_timeout == false) {
                this.timeout_time++;

                if (this.timeout_time >= 10) {
                    this.timeout_time = 0;
                    this.bazmanal_timeout = true;
                }
            }
        }

        utel() {
            this.hivandanal();
            var xotaker = this.yntrelVandak(2);
            var norVandak = this.getrandom(xotaker);

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
                        break;
                    }
                }

            }
            else {
                this.sharjvel();
            }
            //////////////exanaki azdecutyuny gishatichi vra
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
            if (this.ser == 1 && this.bazmanal_timeout == true) {
                var datarkVandakner = this.yntrelVandak(0);
                var norVandak = this.getrandom(datarkVandakner);
                var norVandak3 = this.getrandom(datarkVandakner);

                var xotaker = this.yntrelVandak(2);
                var norVandak4 = this.getrandom(xotaker);
                var norVandak5 = this.getrandom(xotaker);

                var gishatich = this.yntrelVandak(3.5);
                var norVandak2 = this.getrandom(gishatich);

                if (norVandak2) {
                    for (var i in gishatichArr) {
                        if (norVandak2[0] == gishatichArr[i].x && norVandak2[1] == gishatichArr[i].y) {
                            var gishatich_igakan = gishatichArr[i];
                        }
                    }

                    if (norVandak) {
                        this.bazmanal_timeout = false;

                        if (gishatich_igakan.bazmacox == false) {
                            var norx = norVandak[0];
                            var nory = norVandak[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 3;
                            }

                            else {
                                matrix[nory][norx] = 3.5;
                            }

                            var norgishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norgishatich);

                            if (matrix[nory][norx] == 3) {
                                norgishatich.ser = 1;
                            }

                            else {
                                norgishatich.ser = 2;
                            }
                        }

                        if (gishatich_igakan.bazmacox == true) {
                            gishatich_igakan.bazmacox = false;

                            var norx = norVandak[0];
                            var nory = norVandak[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 3;
                            }

                            else {
                                matrix[nory][norx] = 3.5;
                            }

                            var norgishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norgishatich);

                            if (matrix[nory][norx] == 3) {
                                norgishatich.ser = 1;
                            }

                            else {
                                norgishatich.ser = 2;
                            }

                            if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getrandom(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 3;
                                }

                                else {
                                    matrix[nory][norx] = 3.5;
                                }

                                var norgishatich2 = new Gishatich(norx, nory);
                                gishatichArr.push(norgishatich2);

                                if (matrix[nory][norx] == 3) {
                                    norgishatich2.ser = 1;
                                }

                                else {
                                    norgishatich2.ser = 2;
                                }
                            }
                        }
                    }

                    if (norVandak4) {
                        this.bazmanal_timeout = false;

                        if (gishatich_igakan.bazmacox == false) {
                            var norx = norVandak4[0];
                            var nory = norVandak4[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 3;
                            }

                            else {
                                matrix[nory][norx] = 3.5;
                            }

                            var norgishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norgishatich);

                            if (matrix[nory][norx] == 3) {
                                norgishatich.ser = 1;
                            }

                            else {
                                norgishatich.ser = 2;
                            }

                            for (var i in xotakerArr) {
                                if (norgishatich.x == xotakerArr[i].x && norgishatich.y == xotakerArr[i].y) {
                                    xotakerArr.splice(i, 1);
                                    norgishatich.axorjak += 1;
                                }
                            }
                        }

                        else if (gishatich_igakan.bazmacox == true) {
                            gishatich_igakan.bazmacox = false;

                            var norx = norVandak4[0];
                            var nory = norVandak4[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 3;
                            }

                            else {
                                matrix[nory][norx] = 3.5;
                            }

                            var norgishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norgishatich);

                            if (matrix[nory][norx] == 3) {
                                norgishatich.ser = 1;
                            }

                            else {
                                norgishatich.ser = 2;
                            }

                            for (var i in xotakerArr) {
                                if (norgishatich.x == xotakerArr[i].x && norgishatich.y == xotakerArr[i].y) {
                                    xotakerArr.splice(i, 1);
                                    norgishatich.axorjak += 1;
                                }
                            }

                            if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getrandom(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 3;
                                }

                                else {
                                    matrix[nory][norx] = 3.5;
                                }

                                var norgishatich2 = new Gishatich(norx, nory);
                                gishatichArr.push(norgishatich2);

                                if (matrix[nory][norx] == 3) {
                                    norgishatich2.ser = 1;
                                }

                                else {
                                    norgishatich2.ser = 2;
                                }

                                for (var i in xotakerArr) {
                                    if (norgishatich2.x == xotakerArr[i].x && norgishatich2.y == xotakerArr[i].y) {
                                        xotakerArr.splice(i, 1);
                                        norgishatich2.axorjak += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        mahanal() {
            if (this.energy <= 0) {
                for (var i in gishatichArr) {
                    if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                        matrix[this.y][this.x] = 0;
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
            }
        }

        hivandanal() {

            var r = Math.round(this.getrandom(500))
            if (r % 2 == 0) {
                matrix[this.y][this.x] = 7;
                this.hivandutyun = true;
                this.mahanal();
            }
        }
    }
