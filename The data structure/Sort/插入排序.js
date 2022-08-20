
        //for循环
        let arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
        const arrLen = arr.length
        function insertSort(arr, len) {
            for (let i = 1; i < arrLen; i++) {
                for (let j = i; j >= 0; j--) {
                    if (arr[j] > arr[j - 1]) {
                        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                    }
                }
            }
            console.log(arr);
        }
        insertSort(arr, arrLen)
        //while循环+递归
        function insertSort2(arr, k) {
            if (k == 0) return
            insertSort2(arr, k - 1)
            let x = arr[k]
            let index = k - 1
            while (index >= 0 && x < arr[index]) {
                arr[index + 1] = arr[index]
                index--
            }
            arr[index + 1] = x
        }
        insertSort2(arr, arrLen - 1)
        console.log(arr);
 