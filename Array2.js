function main()
{
    let Arr = [10,20,30,40];

    console.log(Arr);
    console.log(typeof(Arr));
    console.log(Arr.length);

    console.log(Arr[0]);
    console.log(Arr[1]);
    console.log(Arr[2]);
    console.log(Arr[3]);

    // By reinitialise we can update value at index

    Arr[0] = 11; 
    console.log(Arr[0]);

    // Heterogeneous elements stored in array

    let Brr = [11.69,35,"Hello"];
    console.log(Brr);
    console.log(typeof(Brr));

    
}
main();