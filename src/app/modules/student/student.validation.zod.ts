import { z } from "zod"

const userNameValidationSchemaWithZod=z.object({
    firstName:z.string().min(1).max(20),
    middleName:z.string().optional(),
    lastName:z.string().min(1)
  })
  
  const guradianValidationSchemaWithZod=z.object({
    fatherName:z.string(),
    fatherOccupation:z.string(),
    fatherContactNo:z.string(),
    motherName:z.string(),
    motherOccupation:z.string(),
    motherContactNo:z.string(),
  })
  
  const localGuradianValidationSchemaWithZod=z.object({
    name:z.string(),
    occupation:z.string(),
    contactNo:z.string(),
  })
  
  
  const studentValidationSchemaWithZod=z.object({
    id:z.string(),
    name:userNameValidationSchemaWithZod,
    gender:z.enum(['Male', 'FeMale','other']),
    dateOfBirth:z.string(),
    email:z.string().email(),
    contactNo:z.string(),
    emergencyContactNo:z.string(),
    bloodGroup:z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']).optional(),
    presentAddress:z.string(),
    permanentAddress:z.string(),
    gurdian:guradianValidationSchemaWithZod,
    localGuradian:localGuradianValidationSchemaWithZod,
    profileImg:z.string(),
    isActive:z.enum(['active','blocked']).default('active')
  });

  export default studentValidationSchemaWithZod 
  