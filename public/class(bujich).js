class bujich extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
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
            if(this.ser == 1)
            {
                matrix[nory][norx] = 5;
            }

            else
            {
                matrix[nory][norx] = 5.5;
            }
            this.x = norx;
            this.y = nory;

        }
        this.energy--;
    }
        timeout() 
    {
        if(this.bazmanal_timeout == false)
        {
            this.timeout_time ++;
            
            if(this.timeout_time >= 10)
            {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }

    utel() {
        var bujich = this.yntrelVandak(4);
        var norVandak = random(bujich);

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

    }
bazmanal() 
    {
        if(this.ser == 1 && this.bazmanal_timeout == true)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);
            var norVandak3 = random(datarkVandakner);

            var hivandutyun = this.yntrelVandak(4);
            var norVandak4 = random(hivandutyun);
            var norVandak5 = random(hivandutyun);
        
            var bujich = this.yntrelVandak(5.5);
            var norVandak2 = random(bujich);
        
            if (norVandak2)
            {
                for(var i in bujichArr)
                {
                    if(norVandak2[0] == bujichArr[i].x && norVandak2[1] == bujichArr[i].y)
                    {
                        var bujich_igakan = bujichArr[i];
                    }
                }

                if(norVandak)
                {
                    this.bazmanal_timeout = false; 

                    if(bujich_igakan.bazmacox == false)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 5;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 5.5;
                        }
                
                        var norbujich = new Bujich(norx, nory);
                        bujichArr.push(norbujich);
                
                        if(matrix[nory][norx] == 5)
                        {
                            norbujich.ser = 1;
                        }
                
                        else
                        {
                            norbujich.ser = 2 ;
                        }
                    }
                    
                    if(bujcih_igakan.bazmacox == true)
                    {
                        bujich_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 5;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 5.5;
                        }
                
                        var norbujich = new bujich(norx, nory);
                        bujichArr.push(norbujich);
                
                        if(matrix[nory][norx] == 5)
                        {
                            norbujich.ser = 1;
                        }
                
                        else
                        {
                            norbujich.ser = 2 ;
                        }

                        if(norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1])
                        {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];

                            var r2 = Math.floor(random(5));
                
                            if(r2 >= 1)
                            {
                                matrix[nory][norx] = 5;
                            }
                    
                            else
                            {
                                matrix[nory][norx] = 5.5;
                            }
                    
                            var norbujich2 = new bujich(norx, nory);
                            bujichArr.push(norbujich2);
                    
                            if(matrix[nory][norx] == 5)
                            {
                                norbujich2.ser = 1;
                            }
                    
                            else
                            {
                                norbujich2.ser = 2 ;
                            }
                        }
                    }
                }

                if(norVandak4)
                {
                    this.bazmanal_timeout = false; 

                    if(xotaker_igakan.bazmacox == false)
                    {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 5;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 5.5;
                        }
                
                        var norbujich = new bujich(norx, nory);                       
                        bujichArr.push(norbujich);
                
                        if(matrix[nory][norx] == 5)
                        {
                            norbujich.ser = 1;
                        }
                
                        else
                        {
                            norbujich.ser = 2 ;
                        }
                        
                        for(var i in grassArr)
                        {
                            if(norbujich.x == hivandutyunArr[i].x && norbujich.y == hivandutyunArr[i].y)
                            {
                                grassArr.splice(i, 1);
                                norbujich.axorjak += 1;
                            }
                        }
                    }
                    
                    else if(bujich_igakan.bazmacox == true)
                    {
                        bujich_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 5;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 5.5;
                        }
                
                        var norbujich = new bujich(norx, nory);
                        bujichArr.push(norbujich);
                
                        if(matrix[nory][norx] == 5)
                        {
                            norbujich.ser = 1;
                        }
                
                        else
                        {
                            norbujich.ser = 2 ;
                        }

                        for(var i in hivandutyunArr)
                        {
                            if(norbujich.x == hivandutyunArr[i].x && norbujich.y == hivandutyuArr[i].y)
                            {
                                hivandutyunArr.splice(i, 1);
                                norbujich.axorjak += 1;
                            }
                        }

                        if(norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1])
                        {
                            var norx = norVandak5[0];
                            var nory = norVandak5[1];

                            var r2 = Math.floor(random(5));
                
                            if(r2 >= 1)
                            {
                                matrix[nory][norx] = 5;
                            }
                    
                            else
                            {
                                matrix[nory][norx] = 5.5;
                            }
                    
                            var norbujich2 = new bujich(norx, nory);
                            bujichArr.push(norbujich2);
                    
                            if(matrix[nory][norx] == 5)
                            {
                                norbujich2.ser = 1;
                            }
                    
                            else
                            {
                                norbujich2.ser = 2 ;
                            }

                            for(var i in hivandutyunArr)
                            {
                                if(norbujich2.x == hivandutyunArr[i].x && norbujich2.y == hivandutyunArr[i].y)
                                {
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

        if (this.energy <= 8) {
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
