class Arithmatic
{
    constructor(No1, No2)
    {
        this.No1 = No1;
        this.No2 = No2;
        this.iSum = 0;

        this.iSum = this.No1 + this.No2;

    }
    Addition() 
    {
        return this.No1 + this.No2;    
    }

    Substraction() 
    {
        return this.No1 - this.No2;    
    }
    

    

}
function main()
{
    let obj = new Arithmatic(10,11);
    let iRet = 0;

    iRet = obj.Addition();
    console.log("Addition is : ",iRet);

    iRet = obj.Substraction();
    console.log("Substraction is : ",iRet);

}

main();