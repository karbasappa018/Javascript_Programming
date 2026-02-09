/*
function Addition(A,B)
{
    return A+B;       // Instead of it we can use
                      // Arrow function
}
*/

// Arrow function
// Addition = (A,B) => {return A+B;}  OR
Addition = (A,B) => A + B;


function main()
{
    let iRet = 0;
    iRet = Addition(10,11);
    console.log("Addition is :",iRet);
}

main();
