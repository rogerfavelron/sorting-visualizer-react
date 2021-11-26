const generateRandomizedArray = ({arraySize} = {}) =>{
    let randomizedArray = [];

    for(let i = 0; i < arraySize;i++){
        randomizedArray.push(Math.floor(Math.random() * (300 - 20) + 20));
    }
    return randomizedArray;
}

export default generateRandomizedArray;