function checkOddNumber(n) 
{
    if (n % 2 !== 0) 
    {
        createOddPyramid(n);
    }
    else 
    {
        console.log("Krivi unos, treba biti neparan broj!");
    }
}

function createOddPyramid(n) 
{
    let str = "";

    for (let i = 0; i < n / 2; i++) 
    {
        let max = n - i;
        let min = max - i;
        for (let space = 1; space <= max; space++) 
        {
            str += " ";
        }
        for (let j = min; j <= max; j++) 
        {
            str += j;
        }
        for (let k = max - 1; k >= min; k--) 
        {
            str += k;
        }
        str += "\n";
    }
    console.log(str);

}

checkOddNumber(9);
