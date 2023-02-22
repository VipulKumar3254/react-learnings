const datas =[
    {
        name:"ajay",
        profession:"software engineer",
    },
    {
        name:"vipul",
        profession:"software developer",
    }
]

function getDatas()
{
    setTimeout( ()=>{
        let output=""
        datas.forEach( (data,index)=>{
            output+=` <li> ${data.name}</li>`
        })

        console.log(output);

    },1000)


}
getDatas();



function firstFunction(){
    setTimeout(()=>{
        console.log("hii this is time out method block..");
        return " i am returned data."
    },4000)
}

async function start()
{
    const data= await firstFunction();
    console.log(data);
    console.log("this is start mehtod block..");
    
}

start();