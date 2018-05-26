module.exports = class hivandutyun extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.axorjak = 0;
        this.ser = 0;
        this.bazmacox = false;
        this.timeout_time = 0;
        this.bazmanal_timeout = true;
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
            if (this.ser == 1) {

                matrix[nory][norx] = 4;
            }
            else {
                matrix[nory][norx] = 4.5;
            }

            this.x = norx;
            this.y = nory;
            this.energy--;
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
            hivandutyunArr.push(new hivandutyun(norx, nory));
            this.energy++;
        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        if (this.ser == 1 && this.bazmanal_timeout == true) {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);
            var norVandak3 = random(datarkVandakner);

            var xot = this.yntrelVandak(1);
            var norVandak4 = random(xot);
            var norVandak5 = random(xot);

            var hivandxot = this.yntrelVandak(4.5);
            var norVandak2 = random(hivandxot);

            if (norVandak2) {
                for (var i in hivandutyunArr) {
                    if (norVandak2[0] == hivandutyunArr[i].x && norVandak2[1] == hivandutyunArr[i].y) {
                        var hivandutyun_igakan = hivandutyunArr[i];
                    }
                }

                if (norVandak) {
                    this.bazmanal_timeout = false;

                    if (hivandutyun_igakan.bazmacox == false) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norHivandXot = new hivandutyun(norx, nory);
                        hivandutyunArr.push(norHivandXot);

                        if (matrix[nory][norx] == 4) {
                            norHivandXot.ser = 1;
                        }

                        else {
                            norHivandXot.ser = 2;
                        }
                    }

                    if (hivandutyun_igakan.bazmacox == true) {
                        hivandutyun_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norHivandXot = new hivandutyun(norx, nory);
                        hivandutyunArr.push(norHivandXot);

                        if (matrix[nory][norx] == 4) {
                            norHivandXot.ser = 1;
                        }

                        else {
                            norHivandXot.ser = 2;
                        }

                        if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];

                            var r2 = Math.floor(random(5));

                            if (r2 >= 1) {
                                matrix[nory][norx] = 4;
                            }

                            else {
                                matrix[nory][norx] = 4.5;
                            }

                            var norHivandXot2 = new hivandutyun(norx, nory);
                            hivandutyunArr.push(norHivandXot2);

                            if (matrix[nory][norx] == 4) {
                                norHivandXot2.ser = 1;
                            }

                            else {
                                norHivandXot2.ser = 2;
                            }
                        }
                    }
                }

                if (norVandak4) {
                    this.bazmanal_timeout = false;

                    if (hivandutyun_igakan.bazmacox == false) {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norHivandXot = new hivandutyun(norx, nory);
                        hivandutyunArr.push(norHivandXot);

                        if (matrix[nory][norx] == 4) {
                            norHivandXot.ser = 1;
                        }

                        else {
                            norHivandXot.ser = 2;
                        }

                        for (var i in grassArr) {
                            if (norHivandXot.x == grassArr[i].x && norHivandXot.y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                norHivandXot.axorjak += 1;
                            }
                        }
                    }

                    else if (hivandutyun_igakan.bazmacox == true) {
                        hivandutyun_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norHivandXot = new hivandutyun(norx, nory);
                        hivandutyunArr.push(norHivandXot);

                        if (matrix[nory][norx] == 4) {
                            norHivandXot.ser = 1;
                        }

                        else {
                            norHivandXot.ser = 2;
                        }

                        for (var i in grassArr) {
                            if (norHivandXot.x == grassArr[i].x && norHivandXot.y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                norHivandXot.axorjak += 1;
                            }
                        }

                        if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                            var norx = norVandak5[0];
                            var nory = norVandak5[1];

                            var r2 = Math.floor(random(5));

                            if (r2 >= 1) {
                                matrix[nory][norx] = 4;
                            }

                            else {
                                matrix[nory][norx] = 4.5;
                            }

                            var norHivandXot2 = new hivandutyun(norx, nory);
                            hivandutyunArr.push(norHivandXot2);

                            if (matrix[nory][norx] == 4) {
                                norHivandXot2.ser = 1;
                            }

                            else {
                                norHivandXot2.ser = 2;
                            }

                            for (var i in grassArr) {
                                if (norHivandXot2.x == grassArr[i].x && norHivandXot2.y == grassArr[i].y) {
                                    grassArr.splice(i, 1);
                                    norHivandXot2.axorjak += 1;
                                }
                            }
                        }
                    }
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
