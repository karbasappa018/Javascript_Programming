class Demo
{
    constructor(No1, No2)
    {
        this.No1 = No1;
        this.No2 = No2;
        this.iSum = 0;

        this.iSum = this.No1 + this.No2;

    }

    

}
function main()
{
    let obj = new Demo(10,11);

    console.log(obj.No1);
    console.log(obj.No2);
    console.log(`Addition is: ${obj.iSum}`);
}

main();