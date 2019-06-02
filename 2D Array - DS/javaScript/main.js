class solution {

    hourglassSum(arr) {

        var sum = 0, higer = 0, stop = false;
        for (var i = 0; i < arr.length; i++) {

            for (var a = 0; a < arr[i].length; a++) {
                sum = 0;
                if (arr[i][a + 2] == undefined) {
                    break;
                }
                if (arr[i + 2] == undefined || arr[i + 2][a + 2] == undefined) {
                    stop = true;
                    break
                }
                sum += arr[i][a];
                sum += arr[i][a + 1];
                sum += arr[i][a + 2];
                sum += arr[i + 1][a + 1];
                sum += arr[i + 2][a];
                sum += arr[i + 2][a + 1];
                sum += arr[i + 2][a + 2];
                if(i == 0 && a == 0)
                {
                    higer = sum;
                }else if(sum > higer)
                {
                    higer = sum;
                }
        
            }
            if (stop == true) {
                break
            }
        }

        return higer;
    }

    main() {
        var arr = Array(3);


        for (var i = 0; i < 3; i++) {
            arr[i] = new Array(3)
            for (var a = 0; a < 3; a++) {
                arr[i][a] = Math.floor(Math.random() * (9 - (-9) + 1)) + (-9);
            }
        }

        var result = this.hourglassSum(arr);
        console.log(result);
    }

    constructor() {
        this.main()
    }
}

var solutionOb = new solution();