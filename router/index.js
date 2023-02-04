const { movieList } = require("../controller/movies")
const { userList,userAdd,userUpdate,userDelete } = require("../controller/users");
const userAddValidate = require("../validate/userAdd.validate");
const userDeleteValidate = require("../validate/userDelete.validate");
const userUpdateValidate = require("../validate/userUpdate.validate");

module.exports=(app)=>{
app.get("/movie/list",movieList);

app.get("/user/list",userList);
app.post("/user/add",userAddValidate,userAdd);
app.put("/user/update",userUpdateValidate,userUpdate);
app.delete("/user/delete",userDeleteValidate,userDelete);

}