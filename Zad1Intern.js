let array = [1,3,1,7,5,6,6,7,4,2];
array.sort();
const parts = 3;
let arrOfArrays = [];

function getTargetedNumber(totalSum, parts)
{
  return Math.round(totalSum / parts);
}

function getSumArray(array)
{
  return array.reduce((partialSum, a) => partialSum + a, 0);
}

function subsetSum(arr, parts) 
{
  let sum = 0;
  let newArr = [];
  let totalSum = getSumArray(arr);
  let targetNumb = getTargetedNumber(totalSum, parts);
  
  let i = arr.length;
  while (i--) 
  {
    if (arr[i] <= targetNumb && sum + arr[i] <= targetNumb) 
    {
      sum += arr[i];
      newArr.push(arr[i]);
      arr.splice(i, 1);
    }  

    if (sum === targetNumb) 
    {
      parts--;
      totalSum = getSumArray(arr);
      targetNumb = getTargetedNumber(totalSum, parts);
      arrOfArrays.push(newArr);
      return subsetSum(arr, parts);
    }
  }
}

subsetSum(array,  parts);
console.log(arrOfArrays);

