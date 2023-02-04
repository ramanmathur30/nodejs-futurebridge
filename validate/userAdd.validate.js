const Joi=require("joi");

let userAddValidate={
    body:{
        first_name:Joi.string(),
        last_name:Joi.string(),
        email:Joi.email(),
        contact_no:Joi.number()
    }
}

module.exports=userAddValidate;