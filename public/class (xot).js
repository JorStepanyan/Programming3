module.exports = 
class Grass extends global.LivingCreature {

    bazmanal() {
        this.multiply++;
        var norVandak = this.getrandom(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
    guyn() {
        if (exanak == "dzmer") {
            matrix[this.y][this.x] = 10;
        }
        else if (exanak == "garun") {
            matrix[this.y][this.x] = 1;
        }
        else if (exanak == "amar") {
            matrix[this.y][this.x] = 8;
        }
        else if (exanak == "ashun") {
            matrix[this.y][this.x] = 9;
        }
        
    }

}

