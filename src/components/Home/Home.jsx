import React, { useState } from 'react';
//import algorithms
import selectionSort from '../../algorithms/selection-sort';
import bubbleSort from '../../algorithms/bubble-sort';
import insertionSort from '../../algorithms/insertion-sort';
import mergeSortWrapper from '../../algorithms/merge-sort';
import quickSortLWrapper from '../../algorithms/quick-sort-l';
//import helpers and scss
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../SortingBar/SortingBar';
import HomeHeader from '../HomeHeader/HomeHeader';
import '../../index.scss';

import styled from 'styled-components'


const Home = () => {
  const arraySize = 30;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [randomizedArray, setRandomizedArray] = useState(
    generateRandomizedArray({ arraySize: arraySize })
  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [currentAlgorithm, setCurrentAlgorithm] = useState('Merge Sort');
  const algorithms = [
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
    'QuickSort (L)',
    'Merge Sort',
  ];

  const onRandomize = () => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length,
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
  };
  const onInputSizeChanged = (val) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({ arraySize: val });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };
  const onSpeedChange = (val) => {
    if (isVisualizing) return;
    setVisualizationSpeed(100 - val + 1);
  };

  const onVisualize = async () => {
    if (isVisualizing) return;

    setIsVisualizing(true);
    let propsObject = {
      array: randomizedArray,
      setArray: setRandomizedArray,
      visualizationSpeed: visualizationSpeed,
      setColorsArray: setColorsArray,
    }
    switch (currentAlgorithm) {
      case 'Selection Sort':
        await selectionSort(propsObject);
        break;

      case 'Bubble Sort':
        await bubbleSort(propsObject);
        break;

      case 'Insertion Sort':
        await insertionSort(propsObject);
        break;

      case 'QuickSort (L)':
        await quickSortLWrapper({
          ...propsObject, leftIndex: 0,
          rightIndex: randomizedArray.length - 1
        });
        break;
      case 'Merge Sort':
        await mergeSortWrapper(
          {
            ...propsObject, leftIndex: 0,
            rightIndex: randomizedArray.length - 1
          });
        break;

      default:
        break;
    }

    setIsVisualizing(false);
  };

  return (
    <MainWrapper>
      <HomeHeader
        algorithms={algorithms}
        onAlgorithmChange={setCurrentAlgorithm}
        currentAlgorithm={currentAlgorithm}
        onRandomize={onRandomize}
        onInputSizeChanged={onInputSizeChanged}
        onSpeedChange={onSpeedChange}
        onStart={onVisualize}
        isVisualizing={isVisualizing}
      />
      <ArrayWrapper>
        {randomizedArray.map((item, index) => {
          const height = (item / maxItem) * 80;
          const width = (1 / randomizedArray.length) * 70;
          return (
            <div
              key={index}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'end',
                width: `${width}%`,
              }}
            >
              <SortingBar
                colorCode={colorsArray[index]}
                style={{
                  height: `calc(${height}% - 20px)`,
                  width: '100%',
                  margin: 'auto 10% 0 10%',
                }}
              ></SortingBar>
            </div>
          );
        })}
      </ArrayWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-flow:column nowrap;
  height:100vh
`
const ArrayWrapper = styled.div`
background-color: #1233c7;
display:flex;
height:100%;
width:100%;
flex-flow:row nowrap;
align-items: end;
padding: 0 0 5rem 25%;
`

export default Home;
