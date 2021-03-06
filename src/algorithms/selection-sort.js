import asyncSetTimeout from '../helpers/asyncSetTimeout';

const selectionSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
} = {}) => {
  //array = array.concat();

  let len = array.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      const newColorsArray = new Array(len).fill(0);
      newColorsArray[i] = 3;//current i is orange
      newColorsArray[minIndex] = 1;//min value is purple
      newColorsArray[j] = 2;//the current iterate j value is yellow
      setColorsArray(newColorsArray);
      await asyncSetTimeout({ timeout: visualizationSpeed });
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
    //array = array.concat();
    setArray(array);
    console.log(i);
  }
};

export default selectionSort;
