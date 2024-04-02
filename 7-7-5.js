function setUniqSort(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArr = Array.from(uniqueSet); 

    for (let i = 0; i < uniqueArr.length - 1; i++) {
        for (let j = 0; j < uniqueArr.length - i - 1; j++) {
            if (uniqueArr[j] > uniqueArr[j + 1]) {
                let temp = uniqueArr[j];
                uniqueArr[j] = uniqueArr[j + 1];
                uniqueArr[j + 1] = temp;
            }
        }
    }
    return uniqueArr;
}

const arr = [9, 1, 4, 2, 3, 1, 5, 4, 8, 6];
const sortedArr = setUniqSort(arr);

console.log(sortedArr);



