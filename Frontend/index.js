console.log("hello");
let f=document.getElementById("stu_form");
f.addEventListener("submit",((e)=>{
    e.preventDefault();
    let name=document.getElementById('stuname').value;
    let stumail=document.getElementById('stumail').value;
    let num=document.getElementById('stumob').value;
    let gender=document.getElementById('gender').value;
    let dob=document.getElementById('dob').value;
    let dateofjoining=document.getElementById('dateofjoining').value;
    let qualification=document.getElementById('qualification').value;
    let year1=document.getElementById('year1').value;
    senddata(name,stumail,num,gender,dob,dateofjoining,qualification,year1);
}))

async function senddata(name,stumail,num,gender,dob,dateofjoining,qualification,year1){
   
   await fetch("http://127.0.0.1:3000/data",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            name:name,
            stumail:stumail,
            num:num,
            gender:gender,
            dob:dob,
            dateofjoining:dateofjoining,
            qualification:qualification,
            year1:year1,

        })
    });
  
}

    