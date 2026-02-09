class Demo
{
    
    constructor(No1, No2)
    {
        let iSum = 0;
        this.No1 = No1;
        this.No2 = No2;

        this.iSum= No1 + No2;
    }
}
function main()
{
    let obj = new Demo(10,11);
    let iRet = 0;

    console.log(obj.No1);
    console.log(obj.No2);
    console.log("Addition is :",obj.iSum);
}
main();