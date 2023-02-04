var userList1=[
{id:1,first_name:"Sohan1","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:2,first_name:"Sohan2","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:3,first_name:"Sohan3","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:4,first_name:"Sohan4","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:5,first_name:"Sohan5","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:6,first_name:"Sohan6","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:7,first_name:"Sohan7","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:8,first_name:"Sohan8","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:9,first_name:"Sohan9","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:10,first_name:"Sohan10","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458},
{id:11,first_name:"Sohan11","last_name":"Sharma","email":"sohan@gmail.com","contact_no":9632587458}
]
let userList=(req,res)=>{
    res.json(userList1)
}

let userAdd=(req,res)=>{
    let data=req.body;
    userList.push(data);

}

let userUpdate=(req,res)=>{
}

let userDelete=(req,res)=>{
}

module.exports={userList,userAdd,userUpdate,userDelete}