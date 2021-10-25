let a = "bes lu uoogit";
//bes lu uoogit
//who welld horly
 let x= a.split(" ");

let array=[];
let array1=[];
let myarray=[];

for(let i=0;i<x.length;i++)
{
    array[i]=x[i].charAt(0);
    array1[i]=x[i].charAt(x[i].length-1);
}

let someArray = [...array1];

for(let i=0;i<array1.length;i++)
{
    if(i===(array1.length-1))
    {
        array1[0]=someArray[i];
        break;
    }
    array1[i+1]=someArray[i];
}

let someArray1 = [...array];

for(let i=0;i<array.length;i++)
{
    if(i===0)
    {
        array[array.length-1]=someArray1[0];
    }
    else {

        array[i-1]=someArray1[i];
    }
}

for (let i=0;i<x.length;i++)
{
    let c = x[i];
    
    c=c.substring(1);
    c=  array[i]+c;
    x[i] = c;
   let d=x[i];
   d=d.substring(0,d.length-1);
   d=d+array1[i];
    myarray[i]=d;

}
let finalstring=myarray.join(' ');
console.log(finalstring);




