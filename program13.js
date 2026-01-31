function Display(no)
{
    console.log("jay Ganesh..."+no)
    return ++no;
}

function main()
{
    let iRet = 0;
    iRet = Display(11);
    console.log("return value: "+iRet);

}

main();