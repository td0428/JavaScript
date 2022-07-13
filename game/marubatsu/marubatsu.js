const M = "〇"
const B = "×"
let count = 0;

const check = Array(9).fill(0);
const masuIDs = ["masu1", "masu2", "masu3", "masu4", "masu5", "masu6", "masu7", "masu8", "masu9"];
const endM = document.getElementById("end")
const endB = document.getElementById("end")



for (let i = 0; i < masuIDs.length; i++) {

    const masu = document.getElementById(masuIDs[i]);


    masu.addEventListener("click", function () {
        if (check[i] === 0) {
            if (count % 2 === 0) {
                masu.textContent = M
                check[i] = M

            } else if (count % 2 === 1) {
                masu.textContent = B
                check[i] = B
            }

            count = count + 1
            console.log(check)
        }

        // 横が〇の場合
        if (check[0] == M && check[1] == M && check[2] == M) {
            endM.textContent = "〇の勝ち"

        } else if (check[3] == M && check[4] == M && check[5] == M) {
            endM.textContent = "〇の勝ち"

        } else if (check[6] == M && check[7] == M && check[8] == M) {
            endM.textContent = "〇の勝ち"
        }

        // 縦が〇の場合
        if (check[0] == M && check[3] == M && check[6] == M) {
            endM.textContent = "〇の勝ち"
        } else if (check[1] == M && check[4] == M && check[7] == M) {
            endM.textContent = "〇の勝ち"
        } else if (check[2] == M && check[5] == M && check[8] == M) {
            endM.textContent = "〇の勝ち"
        }

        // 斜めが〇の場合
        if (check[0] == M && check[4] == M && check[8] == M) {
            endM.textContent = "〇の勝ち"
        } else if (check[2] == M && check[4] == M && check[6] == M) {
            endM.textContent = "〇の勝ち"
        }


        // 横が×の場合
        if (check[0] == B && check[1] == B && check[2] == B) {
            endB.textContent = "×の勝ち"

        } else if (check[3] == B && check[4] == B && check[5] == B) {
            endB.textContent = "×の勝ち"

        } else if (check[6] == B && check[7] == B && check[8] == B) {
            endB.textContent = "×の勝ち"
        }

        // 縦が×の場合
        if (check[0] == B && check[3] == B && check[6] == B) {
            endB.textContent = "×の勝ち"
        } else if (check[1] == B && check[4] == B && check[7] == B) {
            endB.textContent = "×の勝ち"
        } else if (check[2] == B && check[5] == B && check[8] == B) {
            endB.textContent = "×の勝ち"
        }

        // 斜めが×の場合
        if (check[0] == B && check[4] == B && check[8] == B) {
            endB.textContent = "×の勝ち"
        } else if (check[2] == B && check[4] == B && check[6] == B) {
            endB.textContent = "×の勝ち"
        }

    })

}