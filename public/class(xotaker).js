class Xotaker extends LivingCreature {
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


    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            if (this.ser == 1) {
                matrix[nory][norx] = 2;
            }

            else{  
                matrix[nory][norx] = 2.5;
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
        this.hivandanal();
        var xoter = this.yntrelVandak(1);
        var norVandak = random(xoter);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;

            for (var i in grassArr) {
                if (norx == grassArr[i].x && nory == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
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

            var xotaker = this.yntrelVandak(2.5);
            var norVandak2 = random(xotaker);

            if (norVandak2) {
                for (var i in xotakerArr) {
                    if (norVandak2[0] == xotakerArr[i].x && norVandak2[1] == xotakerArr[i].y) {
                        var xotaker_igakan = xotakerArr[i];
                    }
                }

                if (norVandak) {
                    this.bazmanal_timeout = false;

                    if (xotaker_igakan.bazmacox == false) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 2;
                        }

                        else {
                            matrix[nory][norx] = 2.5;
                        }

                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);

                        if (matrix[nory][norx] == 2) {
                            norXotaker.ser = 1;
                        }

                        else {
                            norXotaker.ser = 2;
                        }
                    }

                    if (xotaker_igakan.bazmacox == true) {
                        xotaker_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 2;
                        }

                        else {
                            matrix[nory][norx] = 2.5;
                        }

                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);

                        if (matrix[nory][norx] == 2) {
                            norXotaker.ser = 1;
                        }

                        else {
                            norXotaker.ser = 2;
                        }

                        if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];

                            var r2 = Math.floor(random(5));

                            if (r2 >= 1) {
                                matrix[nory][norx] = 2;
                            }

                            else {
                                matrix[nory][norx] = 2.5;
                            }

                            var norXotaker2 = new Xotaker(norx, nory);
                            xotakerArr.push(norXotaker2);

                            if (matrix[nory][norx] == 2) {
                                norXotaker2.ser = 1;
                            }

                            else {
                                norXotaker2.ser = 2;
                            }
                        }
                    }
                }

                if (norVandak4) {
                    this.bazmanal_timeout = false;

                    if (xotaker_igakan.bazmacox == false) {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 2;
                        }

                        else {
                            matrix[nory][norx] = 2.5;
                        }

                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);

                        if (matrix[nory][norx] == 2) {
                            norXotaker.ser = 1;
                        }

                        else {
                            norXotaker.ser = 2;
                        }

                        for (var i in grassArr) {
                            if (norXotaker.x == grassArr[i].x && norXotaker.y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                norXotaker.axorjak += 1;
                            }
                        }
                    }

                    else if (xotaker_igakan.bazmacox == true) {
                        xotaker_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 2;
                        }

                        else {
                            matrix[nory][norx] = 2.5;
                        }

                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);

                        if (matrix[nory][norx] == 2) {
                            norXotaker.ser = 1;
                        }

                        else {
                            norXotaker.ser = 2;
                        }

                        for (var i in grassArr) {
                            if (norXotaker.x == grassArr[i].x && norXotaker.y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                norXotaker.axorjak += 1;
                            }
                        }

                        if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                            var norx = norVandak5[0];
                            var nory = norVandak5[1];

                            var r2 = Math.floor(random(5));

                            if (r2 >= 1) {
                                matrix[nory][norx] = 2;
                            }

                            else {
                                matrix[nory][norx] = 2.5;
                            }

                            var norXotaker2 = new Xotaker(norx, nory);
                            xotakerArr.push(norXotaker2);

                            if (matrix[nory][norx] == 2) {
                                norXotaker2.ser = 1;
                            }

                            else {
                                norXotaker2.ser = 2;
                            }

                            for (var i in grassArr) {
                                if (norXotaker2.x == grassArr[i].x && norXotaker2.y == grassArr[i].y) {
                                    grassArr.splice(i, 1);
                                    norXotaker2.axorjak += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    mahanal() {
        
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                    break;
                }
            }

        
    }
    hivandanal() {

        var r = Math.round(random(500))
        if (r % 2 == 0) {
            matrix[this.y][this.x] = 7;
            this.hivandutyun = true;
            this.mahanal();
        }
    }
    
