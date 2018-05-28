module.exports =
    class bujich extends global.LivingCreature {
        constructor(x, y, hivandutyun) {
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
            var norVandak = this.getrandom(datarkVandakner);

            if (norVandak) {
                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                if (this.ser == 1) {
                    matrix[nory][norx] = 5;
                }

                else {
                    matrix[nory][norx] = 5.5;
                }
                this.x = norx;
                this.y = nory;

            }
            this.energy--;
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
            if(exanak == "garun"){
                if(this.energy >= 2){
                    this.bazmanal();
                }
            }
            else if(exanak == "amar" || exanak == "ashun"){
                if(this.enrgy >= 5){
                    this.bazmanal();
                }
            }
            else if(exanak == "dzmer"){
                if(this.energy >= 7){
                    this.bazmanal();
                }
            }

        }
        bazmanal() {
            if (this.ser == 1 && this.bazmanal_timeout == true) {
                var datarkVandakner = this.yntrelVandak(0);
                var norVandak = this.getrandom(datarkVandakner);
                var norVandak3 = this.getrandom(datarkVandakner);

                var hivandutyun = this.yntrelVandak(4);
                var norVandak4 = this.getrandom(hivandutyun);
                var norVandak5 = this.getrandom(hivandutyun);

                var bujich = this.yntrelVandak(5.5);
                var norVandak2 = this.getrandom(bujich);

                if (norVandak2) {
                    for (var i in bujichArr) {
                        if (norVandak2[0] == bujichArr[i].x && norVandak2[1] == bujichArr[i].y) {
                            var bujich_igakan = bujichArr[i];
                        }
                    }

                    if (norVandak) {
                        this.bazmanal_timeout = false;

                        if (bujich_igakan.bazmacox == false) {
                            var norx = norVandak[0];
                            var nory = norVandak[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 5;
                            }

                            else {
                                matrix[nory][norx] = 5.5;
                            }

                            var norbujich = new Bujich(norx, nory);
                            bujichArr.push(norbujich);

                            if (matrix[nory][norx] == 5) {
                                norbujich.ser = 1;
                            }

                            else {
                                norbujich.ser = 2;
                            }
                        }

                        if (bujcih_igakan.bazmacox == true) {
                            bujich_igakan.bazmacox = false;

                            var norx = norVandak[0];
                            var nory = norVandak[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 5;
                            }

                            else {
                                matrix[nory][norx] = 5.5;
                            }

                            var norbujich = new bujich(norx, nory);
                            bujichArr.push(norbujich);

                            if (matrix[nory][norx] == 5) {
                                norbujich.ser = 1;
                            }

                            else {
                                norbujich.ser = 2;
                            }

                            if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getrandom(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 5;
                                }

                                else {
                                    matrix[nory][norx] = 5.5;
                                }

                                var norbujich2 = new bujich(norx, nory);
                                bujichArr.push(norbujich2);

                                if (matrix[nory][norx] == 5) {
                                    norbujich2.ser = 1;
                                }

                                else {
                                    norbujich2.ser = 2;
                                }
                            }
                        }
                    }

                    if (norVandak4) {
                        this.bazmanal_timeout = false;

                        if (xotaker_igakan.bazmacox == false) {
                            var norx = norVandak4[0];
                            var nory = norVandak4[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 5;
                            }

                            else {
                                matrix[nory][norx] = 5.5;
                            }

                            var norbujich = new bujich(norx, nory);
                            bujichArr.push(norbujich);

                            if (matrix[nory][norx] == 5) {
                                norbujich.ser = 1;
                            }

                            else {
                                norbujich.ser = 2;
                            }

                            for (var i in grassArr) {
                                if (norbujich.x == hivandutyunArr[i].x && norbujich.y == hivandutyunArr[i].y) {
                                    hivandutyunArr.splice(i, 1);
                                    norbujich.axorjak += 1;
                                }
                            }
                        }

                        else if (bujich_igakan.bazmacox == true) {
                            bujich_igakan.bazmacox = false;

                            var norx = norVandak4[0];
                            var nory = norVandak4[1];

                            var r = Math.floor(this.getrandom(5));

                            if (r >= 1) {
                                matrix[nory][norx] = 5;
                            }

                            else {
                                matrix[nory][norx] = 5.5;
                            }

                            var norbujich = new bujich(norx, nory);
                            bujichArr.push(norbujich);

                            if (matrix[nory][norx] == 5) {
                                norbujich.ser = 1;
                            }

                            else {
                                norbujich.ser = 2;
                            }

                            for (var i in hivandutyunArr) {
                                if (norbujich.x == hivandutyunArr[i].x && norbujich.y == hivandutyuArr[i].y) {
                                    hivandutyunArr.splice(i, 1);
                                    norbujich.axorjak += 1;
                                }
                            }

                            if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getrandom(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 5;
                                }

                                else {
                                    matrix[nory][norx] = 5.5;
                                }

                                var norbujich2 = new bujich(norx, nory);
                                bujichArr.push(norbujich2);

                                if (matrix[nory][norx] == 5) {
                                    norbujich2.ser = 1;
                                }

                                else {
                                    norbujich2.ser = 2;
                                }

                                for (var i in hivandutyunArr) {
                                    if (norbujich2.x == hivandutyunArr[i].x && norbujich2.y == hivandutyunArr[i].y) {
                                        hivandutyunArr.splice(i, 1);
                                        norbujich2.axorjak += 1;
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
                for (var i in bujichArr) {
                    if (this.x == bujichArr[i].x && this.y == bujichArr[i].y) {
                        matrix[this.y][this.x] = 0;
                        bujichArr.splice(i, 1);
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
