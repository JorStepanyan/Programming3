class Xotaker extends LivingCreature{
    constructor(x, y, index, ser) {
        super(x, y, index);
        this.timeout = 0;
        this.bazmanalTimeout = true;
        if(ser == 0){
            this.ser = "arakan";
        }
        else{
            this.ser = "igakan";
        }

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
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;
            this.energy--;
        }
    }

    timeout(){
        if(this.bazmanalTimeout = false){
            if(this.timeout >= 3){
                this.timeout = 0;
                this.timeout = true;
            }
        }
    }

    utel() {
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
        this.multiply++;
        if(this.ser = "arakan"){
            var norVandak = random(this.yntrelVandak(2.5));
        }
        if (norVandak && this.multiply >= 6) {
            var xotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(xotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
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
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
           
        }
    }
}
