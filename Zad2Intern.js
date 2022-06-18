function createPyramid(n) 
{
    let givenNumb = n;
    for (let i = 0; i < n; i++) 
    {
        let str = "";
        for (let j =0; j < n - i; j++) 
            str += " ";
        for (let k = 0; k <= i; k++) 
            str += givenNumb + " ";
            givenNumb--;
        console.log(str); 
    }
}

createPyramid(6);