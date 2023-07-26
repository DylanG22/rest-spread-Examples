
const filterOutOdds = (...nums) => nums.filter(v => v % 2 === 0);


function findMin(...nums){
    return Math.min(...nums);
}


const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});

function doubleAndReturnArgs(arr, ...doubles){
    let dblArr = doubles.map((val) => val * 2);
    return [...arr, ...dblArr];
}
const testObj = {
    first: 'dylan',
    last: 'gooch',
    age: 21
}

const removeRandom = (itemsArr) => {
    let idx = Math.floor(Math.random() * itemsArr.length);
    let newItems = [...items];
    newItems.splice(idx,1);
    return newItems;
}

const extend = (arr1, arr2) => [...arr1,...arr2];

const addKeyVal = (obj,key,val) => {
    newObj = {...obj};
    newObj[key] = val;
    return newObj;
}



const removeKey = (obj,key) => {
    delete obj[key];
    return obj;
}

const combine = (obj1,obj2) => ({...obj1,...obj2});

const update = (obj,key,val) => {
    newObj = {...obj};
    newObj[key] = val;
    return newObj;
};