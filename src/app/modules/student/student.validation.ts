import Joi from "joi";

const joiGuardianValidationSchema=Joi.object({
    fatherName:Joi.string().required(),
    fatherOccupation:Joi.string().required(),
    fatherContactNo:Joi.string().required(),
    motherName:Joi.string().required(),
    motherOccupation:Joi.string().required(),
    motherContactNo:Joi.string().required(),
  });
  
  const joiLocalGuardianValidationSchema=Joi.object({
    name:Joi.string().max(20).required(),
    occupation:Joi.string().required(),
    contactNo:Joi.string().required(),
  })
  
  
  
  const joyValidationSchema= Joi.object({
    id:Joi.string(),
    name:{
      firstName:Joi.string().max(20).required(),
      middleName:Joi.string(),
      lastName:Joi.string().max(20).required(),
    },
    gender:Joi.string().required().valid('Male', 'FeMale','other'),
    dateOfBirth:Joi.string(),
    email:Joi.string().email().required(),
    contactNo:Joi.string().required(),
    emergencyContactNo:Joi.string().required(),
    bloodGroup:Joi.string().valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'),
    presentAddress:Joi.string().required(),
    permanentAddress:Joi.string().required(),
    gurdian:joiGuardianValidationSchema.required(),
    localGuradian:joiLocalGuardianValidationSchema.required(),
    profileImg:Joi.string(),
    isActive:Joi.string().valid('active', 'blocked').default('active'),
  })
  export default joyValidationSchema