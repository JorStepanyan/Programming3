module.exports = 
class Monster extends global.LivingCreature {
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
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 1],
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
                matrix[nory][norx] = 6;
            }

            else {
                matrix[nory][norx] = 6.5;
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
        var monster = this.yntrelVandak(3, 3.5);
        var norVandak = this.getrandom(monster);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 6;


            for (var i in gishatichArr) {
                if (norx == gishatichArr[i].x && nory == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
            monsterArr.push(new Monster(norx, nory));
            this.energy++;
        }
        else {
            this.sharjvel();
        }
        ///////////exanaki azdecutyuny monstri vra
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

            var gishatich = this.yntrelVandak(3, 3.5);
            var norVandak4 = this.getrandom(gishatich);
            var norVandak5 = this.getrandom(gishatich);

            var monster = this.yntrelVandak(6.5);
            var norVandak2 = this.getrandom(monstert);

            if (norVandak2) {
                for (var i in monsterArr) {
                    if (norVandak2[0] == monsterArr[i].x && norVandak2[1] == monsterArr[i].y) {
                        varmonster_igakan = monsterArr[i];
                    }
                }

                if (norVandak) {
                    this.bazmanal_timeout = false;

                    if (monster_igakan.bazmacox == false) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getrandom(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norMonster = new monster(norx, nory);
                        monsterArr.push(norMonster);

                        if (matrix[nory][norx] == 6) {
                            norMonster.ser = 1;
                        }

                        else {
                            norMonster.ser = 2;
                        }
                    }

                    if (monster_igakan.bazmacox == true) {
                        monster_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getrandom(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norMonster = new Monster(norx, nory);
                        monsterArr.push(norMonster);

                        if (matrix[nory][norx] == 6) {
                            norMonster.ser = 1;
                        }

                        else {
                            norMonster.ser = 2;
                        }

                        if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];

                            var r2 = Math.floor(this.getrandom(5));

                            if (r2 >= 1) {
                                matrix[nory][norx] = 6;
                            }

                            else {
                                matrix[nory][norx] = 6.5;
                            }

                            var norMonster2 = new Monster(norx, nory);
                            monsterArr.push(norMonster2);

                            if (matrix[nory][norx] == 6) {
                                norMonster2.ser = 1;
                            }

                            else {
                                norMonster2.ser = 2;
                            }
                        }
                    }
                }

                if (norVandak4) {
                    this.bazmanal_timeout = false;

                    if (monster_igakan.bazmacox == false) {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getrandom(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norMonster = new Monster(norx, nory);
                        monsterArr.push(norMonster);

                        if (matrix[nory][norx] == 6) {
                            norMonster.ser = 1;
                        }

                        else {
                            norMonster.ser = 2;
                        }

                        for (var i in gishatichArr) {
                            if (norMonster.x == gishatichArr[i].x && norMonster.y == gishatichArr[i].y) {
                                gishatichArr.splice(i, 1);
                                norMonster.axorjak += 1;
                            }
                        }
                    }

                    else if (monster_igakan.bazmacox == true) {
                        monster_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getrandom(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norMonster = new Monster(norx, nory);
                        monsterArr.push(norMonster);

                        if (matrix[nory][norx] == 6) {
                            norMonster.ser = 1;
                        }

                        else {
                            norMonster.ser = 2;
                        }

                        for (var i in gishatichArr) {
                            if (norMonster.x == gishatichArr[i].x && norMonster.y == gishatichArr[i].y) {
                                gishatichArr.splice(i, 1);
                                norMonster.axorjak += 1;
                            }
                        }

                        if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                            var norx = norVandak5[0];
                            var nory = norVandak5[1];

                            var r2 = Math.floor(this.getrandom(5));

                            if (r2 >= 1) {
                                matrix[nory][norx] = 6;
                            }

                            else {
                                matrix[nory][norx] = 6.5;
                            }

                            var norMonster2 = new Monster(norx, nory);
                            monsterArr.push(norMonster2);

                            if (matrix[nory][norx] == 6) {
                                norMonster2.ser = 1;
                            }

                            else {
                                norMonster2.ser = 2;
                            }

                            for (var i in gishatichArr) {
                                if (norMonster2.x == gishatichArr[i].x && norMonster2.y == gishatichArr[i].y) {
                                    gishatichArr.splice(i, 1);
                                    norMonster2.axorjak += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    mahanal() {
        if (this.energy <= 8) {
            for (var i in monsterArr) {
                if (this.x == monsterArr[i].x && this.y == monsterArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    hivandutyunArr.splice(i, 1);
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

