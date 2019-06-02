class solution {

    hourglassSum(arr) {

        console.log("\n\n\n\n\n")
        var i = 0, a = 0, hg = 0, higer = 0;

        var hash = {};

        var c = 0;
        while (true) {
            hash[hg] = 0
            if (arr[a][i + 2] == undefined) {
                i = 0;
                a++;
            }
            if (arr[a + 2] == undefined || arr[a + 2][i + 2] == undefined) {
                break
            }

            hash[hg] += arr[a][i]

            hash[hg] += arr[a][i + 1]

            hash[hg] += arr[a][i + 2]

            hash[hg] += arr[a + 1][i + 1]

            hash[hg] += arr[a + 2][i]

            hash[hg] += arr[a + 2][i + 1]

            hash[hg] += arr[a + 2][i + 2]

            if (a == 0 && i == 0) {
                higer = hash[hg]
            } else {
                if (hash[hg] > higer) {

                    higer = hash[hg]

                }

            }


            i++;
            hg++;

            c++;
            console.log(c)
        }
        return higer;

    }

    main() {
        var arr = Array(6);


        for (var i = 0; i < 6; i++) {
             arr[i] = new Array(6)
             for (var a = 0; a < 6; a++) {
                 arr[i][a] = Math.floor(Math.random() * (9 - (-9) + 1)) + (-9);
                 console.log(arr[i][a])
             }
             console.log("\n")
         }

        var result = this.hourglassSum(arr);
        console.log(result)
    }

    constructor() {
        this.main()
    }
}

var solutionOb = new solution();