// Create a function with a function name printSum( ) and print the sum of an array.

// const array = [100, 40 , 60, 55, 45] 

    let printSum = (array) => {
    let sum = 0
         for (i = 0; i < array.length;  i++) {
         sum += array[i]

     }
     console.log (sum)
     
    }
    printSum([4,4,4,4,4])


    // Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
// If a[i]>b[i] then alice is awarded 1point

// If a[i]<b[i] then bob is awarded 1 point

// If a[i]===b[i] then none of them gets a point

// The comparison points should be the total points a person earned.

const alice = [10, 17, 20]
const bob = [21, 15, 9]


let comparedPoints = (alice, bob) => {

    let alicePoints = 0
    let bobPoints = 0

    if( alice[0] > bob[0]) {
       alicePoints++
    }
    else if (alice[0] < bob[0]) {
        bobPoints++
    }
    
    if (alice[1] > bob[1]) {
        alicePoints++
    }
    else if (alice[1] < bobPoints[1]) {
        bobPoints++
    }

    if (alice[2] > bob[2]) {
        alicePoints++
    }
    else if (alice[2] < bob[2]) {
        bobPoints++
    }

    if (alice[0] === bob[0]) {
        alicePoints
        bobPoints
    }
    
    if (alice[1] === bob[1]) {
        alicePoints
        bobPoints
    }
    
    if (alice[2] === bob[2]) {
        alicePoints
        bobPoints
    }

       totalPoints = ['Alice P =' + alicePoints, 'Bob P = ' + bobPoints]

       console.log (totalPoints)


}
  
    comparedPoints ([10, 17, 20], [21, 15, 9])
    


    // Given an array of integers, calculate the ratio of its elements that are positive, negative and zero.
//    Print the decimal value of each fraction on a new line with places after the decimal.


const array = [10, 0,-15, 20,0,10, -6,0,7,-5]

let fraction = () => {

    let positive = 0
    let negative = 0
    let zero = 0

    for (i = 0; i< array.length; i++) {

        if (array[i] > 0) {
            positive++
        }
        if (array[i] < 0) {
            negative++
        }
        if (array[i] = 0) {
            zero++
        }


    }
    console.log (parseFloat (positive / array.length))
    console.log (parseFloat (negative / array.length))
    console.log (parseFloat (zero / array.length))
}

fraction ()
