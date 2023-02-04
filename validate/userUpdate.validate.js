const Joi=require("joi");

let userUpdateValidate={
    body:{
        id:Joi.number(),
        first_name:Joi.string(),
        last_name:Joi.string(),
        email:Joi.email(),
        contact_no:Joi.number()
    }
}

module.exports=userUpdateValidate;