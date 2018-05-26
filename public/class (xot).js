module.exports = class Grass extends LivingCreature {

    bazmanal() {
        this.multiply++;
        var norVandak = Math.random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
    guyn() {
        if (weather == "Winter") {
            //console.log("winter");
            matrix[this.y][this.x] = 10;
        }
        else if (weather == "Spring") {
            //console.log("spring");
            matrix[this.y][this.x] = 1;
        }
        else if (weather == "Summer") {
            //console.log("summer");
            matrix[this.y][this.x] = 8;
        }
        else if (weather == "Autumn") {
            //console.log("autumn");
            matrix[this.y][this.x] = 9;
        }
        
    }

}

