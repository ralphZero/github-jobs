export const getIndexArray = (array) => {
    let indexArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % 10 === 0){
            indexArray.push(i);
        }
    }
    return indexArray;
}

export const getTenItemFromIndex = (index, array) => {
    let newArr = [...array];
    return newArr.splice(index, 10);
}