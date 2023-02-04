const Joi=require("joi");

let userDeleteValidate={
    body:{
        id:Joi.number()
    }
}

module.exports=userDeleteValidate;