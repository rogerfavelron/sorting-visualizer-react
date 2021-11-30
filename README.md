This is a sorting visualizer, made with React and Ant Design UI library.</br>
See Live demo:https://rogerfavelron.github.io/sorting-visualizer-react/ </br>
Basic tutorial:

You can use `npm i` to install dependencies, then use `npm start` to start the app in localhost.

How the sorting visualizer works?

Well, we have a `Home` component, we store our array to sort in there, we also have a **colors array**. 

We use colors array to store colors of the numbers. For example, at the beginning, colors array is filled with 0s, but when an algorithm starts working, it manipulates some of the indices(changes 0s to 1s or 2s. These 1s and 2s are then passed to `SortingBar` component as props, which causes it to change the **background color**) . Colors gives us a better understanding on how the algorithms work. For example we can see the **pivot** in the quick sort colored different than others, or **center** value in merge sort.

We also use an `asyncTimeOut` helper function, this makes algorithms to wait before changing the order of the elements in the array. We can choose how much to wait via a `visualizationSpeed` state.
</br>
Algorithms:</br>
Merge Sort</br>
Insertion Sort</br>
Bubble Sort</br>
Quick Sort</br>
Selection Sort</br>
</br>
</br>

