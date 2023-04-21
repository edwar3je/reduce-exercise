/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

Note: had to use solution because I didn't know that push could be used on the accumulator (though it now makes sense when you think of the accumulator as a variable).
*/

function extractValue(arr, key){
    return arr.reduce(function(accumulator, obj){
        accumulator.push(obj[key]);
        return accumulator;
    }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

Note: had to use solution. I tried to convert the string into an array, then use reduce on the array and finally perform a for loop on the result to create an object (however this didn't work).
*/

function vowelCount(str){
    let vowels = "aeiou";
    return str.split('').reduce(function(accum, char){
        if (vowels.includes(char)){
            if(accum[char]){
                accum[char] += 1;
            }
            else{
                accum[char] = 1;
            }
        }
        return accum;
    }, {})
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]

Note: I was able to solve this without looking at the solution.
*/

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, obj){
        obj[key] = value;
        accum.push(obj);
        return accum;
    }, [])
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
Note: I was able to solve this without looking at the solution.
*/

function partition(arr, callback){
    return arr.reduce(function(accum, val){
        const accum1 = accum[0];
        const accum2 = accum[1];
        if(callback(val)){
            accum1.push(val)
        }
        else{
            accum2.push(val)
        }
        return accum;
    }, [[], []])
}
