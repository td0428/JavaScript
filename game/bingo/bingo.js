
        const B1 = document.querySelectorAll('.B1')
        const B2 = document.querySelectorAll('.B2')
        const B3 = document.querySelectorAll('.B3')
        const B4 = document.querySelectorAll('.B4')
        const B5 = document.querySelectorAll('.B5')

        let checkA = []
        let checkB = []
        let checkC = []
        let checkD = []
        let checkE = []

        let R1 = []
        let R2 = []
        let R3 = []
        let R4 = []
        let R5 = []

        //1列目
        //配列checkAの中に1~15の数字を作る
        for (i = 1; i < 16; i++) {
            checkA.push(i);
        }

        //配列checkAに数字を乱数で入れ替え
        for (i = 0; i < 15; i++) {
            let a = Math.floor(Math.random() * 15)
            let b = Math.floor(Math.random() * 15)
            let tmp = checkA[a];
            checkA[a] = checkA[b];
            checkA[b] = tmp;
        }

        for (i = 0; i < 5; i++) {
            let A = checkA[i]
            R1[i] = A
        }
        console.log(R1)

        //配列checkAの先頭から1つずつ表示
        B1.forEach(function (B1) {
            B1.textContent = checkA.shift()
        })

        //2列目
        for (i = 16; i < 31; i++) {
            checkB.push(i);
        }

        for (i = 0; i < 15; i++) {
            let a = Math.floor(Math.random() * 15)
            let b = Math.floor(Math.random() * 15)
            let tmp = checkB[a];
            checkB[a] = checkB[b];
            checkB[b] = tmp;
        }

        for (i = 0; i < 5; i++) {
            let B = checkB[i]
            R2[i] = B
        }
        console.log(R2)

        B2.forEach(function (a) {
            a.textContent = checkB.shift()
        })


        //3列目
        for (i = 31; i < 46; i++) {
            checkC.push(i);
        }

        for (i = 0; i < 15; i++) {
            let a = Math.floor(Math.random() * 15)
            let b = Math.floor(Math.random() * 15)
            let tmp = checkC[a];
            checkC[a] = checkC[b];
            checkC[b] = tmp;
        }



        for (i = 0; i < 4; i++) {
            let C = checkC[i]
            R3[i] = C
        }
        console.log(R3)


        B3.forEach(function (B3) {
            B3.textContent = checkC.shift()
        })


        //4列目
        for (i = 46; i < 61; i++) {
            checkD.push(i);
        }
        for (i = 0; i < 15; i++) {
            let a = Math.floor(Math.random() * 15)
            let b = Math.floor(Math.random() * 15)
            let tmp = checkD[a];
            checkD[a] = checkD[b];
            checkD[b] = tmp;
        }


        for (i = 0; i < 5; i++) {
            let D = checkD[i]
            R4[i] = D
        }
        console.log(R4)


        
        B4.forEach(function (B4) {
            B4.textContent = checkD.shift()
        })


        //5列目
        for (i = 61; i < 76; i++) {
            checkE.push(i);
        }
        for (i = 0; i < 15; i++) {
            let a = Math.floor(Math.random() * 15)
            let b = Math.floor(Math.random() * 15)
            let tmp = checkE[a];
            checkE[a] = checkE[b];
            checkE[b] = tmp;
        }


        for (i = 0; i < 5; i++) {
            let E = checkE[i]
            R5[i] = E
        }
        console.log(R5)



        B5.forEach(function (B5) {
            B5.textContent = checkE.shift()

        })

        const START = document.getElementById("START")
        const Count = document.getElementById("Count")
        const K =[]

        START.addEventListener("click",function(){
            const kekka = 1+ Math.floor(Math.random() * 74)
            if(!K.includes(kekka)){
                K.push(kekka)
                Count.textContent = kekka
            }else{
                const kekka = 1+ Math.floor(Math.random() * 74)
                Count.textContent = kekka
            }
            
            console.log(kekka)

            for(i=0;i<5;i++){
                if(R1[i]==kekka){
                    R1[i] = "〇"
                    B1[i].textContent="〇"
                }
                if(R2[i]==kekka){
                    R2[i] = "〇"
                    B2[i].textContent="〇"
                }
                if(R3[i]==kekka){
                    R3[i] = "〇"
                    B3[i].textContent="〇"
                }
                if(R4[i]==kekka){
                    R4[i] = "〇"
                    B4[i].textContent="〇"
                }
                if(R5[i]==kekka){
                    R5[i] = "〇"
                    B5[i].textContent="〇"
                }

                if(R1[i]===R2[i]&&R2[i]===R3[i]&&R3[i]===R4[i]&&R4[i]===R5[i]){
                    Count.textContent = "終了"
                }
                if(R1[0]===R1[1]&&R1[1]===R1[2]&&R1[2]===R1[3]&&R1[3]===R1[4]&&R1[4]===R1[5]){
                    Count.textContent = "終了"
                }
                if(R2[0]===R2[1]&&R2[1]===R2[2]&&R2[2]===R2[3]&&R2[3]===R2[4]&&R2[4]===R2[5]){
                    Count.textContent = "終了"
                }
                if(R3[0]===R3[1]&&R3[1]===R3[2]&&R3[2]===R3[3]&&R3[3]===R3[4]){
                    Count.textContent = "終了"
                }
                if(R4[0]===R4[1]&&R4[1]===R4[2]&&R4[2]===R4[3]&&R4[3]===R4[4]&&R4[4]===R4[5]){
                    Count.textContent = "終了"
                }
                if(R5[0]===R5[1]&&R5[1]===R5[2]&&R5[2]===R5[3]&&R5[3]===R5[4]&&R5[4]===R5[5]){
                    Count.textContent = "終了"
                }
                if(R1[0]===R2[1]&&R2[1]===R4[3]&&R4[3]===R5[4]){
                    Count.textContent = "終了"
                }
                if(R1[4]===R2[3]&&R2[3]===R4[1]&&R4[1]===R5[0]){
                    Count.textContent = "終了"
                }
            }
        })