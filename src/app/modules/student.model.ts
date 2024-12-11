


import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  studentModel,
  TUserName,
  StudentModel,
} from './student/student.interface';
import { Schema, model } from 'mongoose';
// import validator from 'validator';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'please insert your first name'],
    maxlength: [20, '{VALUE} length not more than 20 words'],
    trim: true,
    // validate:function(value:string){
    //   const firstNameString=value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
    //   return value === firstNameString;
    // },
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    required: [true, 'please insert your last name'],
    trim: true,
    // validate:{
    //   validator:(value:string)=>validator.isAlpha(value),
    //   message:'{VALUE} is not valid',
    // }
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, ' please insert your father name'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'please insert your father occupation'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'please insert your father contact no'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'please insert your mother name'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'please insert your mother occupation'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'please insert your mother contact no'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'please insert your local guardian name'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'please insert your local guardian occupation '],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'please insert your local guardian contact occupation'],
    trim: true,
  },
});

// const studentSchema = new Schema<Student>({
//   id: { type: String,
//     required:[true,'insert a valid or unique id no'],
//     trim:true,
//     unique:true,
//   },
//   name: {
//     type:userNameSchema,
//     trim:true,
//     required:true,
//   },
//   gender:{
//     type:String,
//     enum:{
//       values:['Male', 'FeMale','other'],
//       message:'{VALUE} is not supported !!!',
//     },
//     trim:true,
//     required:true,
//   } ,
//   dateOfBirth: { type: String ,
//     trim:true,
//   },
//   email: { type: String,
//      required:[ true,'please give valid and unique email'],
//     unique:true,
//     trim:true,
//     // validate:{
//     //   validator:(value:string)=>validator.isEmail(value),
//     //   message:'{VALUE} is not vaild email',
//     // }
//   },
//   contactNo: { type: String,
//     required:[ true ,'please insert your contact number'],
//     trim:true,},
//     emergencyContactNo:{
//       type:String,
//       required:[true, 'please insert your emergency contact no'],
//       trim:true,
//     } ,
//   bloodGroup: {
//     type:String,
//     enum:['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
//     trim:true,
//   },
//   presentAddress: { type: String,
//     trim:true,
//      required: [true ,'please insert your present address']},
//   permanentAddress: { type: String,
//     trim:true,
//     required:[ true , 'please insert your permanent address']},
//   gurdian: {
//     type:guardianSchema,
//     required:true,
//   },
//   localGuradian:{
//     type: localGuardianSchema,
//     required:true,
//   },
//   profileImg: { type: String },
//   isActive:{
//     type:String,
//     enum: ['active', 'blocked'],
//     default:'active'
//   },
// });
// const studentSchema = new Schema<TStudent, studentModel, StudentMethods>({
//   id: {
//     type: String,
//     required: [true, 'insert a valid or unique id no'],
//     trim: true,
//     unique: true,
//   },
//   name: {
//     type: userNameSchema,
//     trim: true,
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: {
//       values: ['Male', 'FeMale', 'other'],
//       message: '{VALUE} is not supported !!!',
//     },
//     trim: true,
//     required: true,
//   },
//   dateOfBirth: { type: String, trim: true },
//   email: {
//     type: String,
//     required: [true, 'please give valid and unique email'],
//     unique: true,
//     trim: true,
//     // validate:{
//     //   validator:(value:string)=>validator.isEmail(value),
//     //   message:'{VALUE} is not vaild email',
//     // }
//   },
//   contactNo: {
//     type: String,
//     required: [true, 'please insert your contact number'],
//     trim: true,
//   },
//   emergencyContactNo: {
//     type: String,
//     required: [true, 'please insert your emergency contact no'],
//     trim: true,
//   },
//   bloodGroup: {
//     type: String,
//     enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
//     trim: true,
//   },
//   presentAddress: {
//     type: String,
//     trim: true,
//     required: [true, 'please insert your present address'],
//   },
//   permanentAddress: {
//     type: String,
//     trim: true,
//     required: [true, 'please insert your permanent address'],
//   },
//   gurdian: {
//     type: guardianSchema,
//     required: true,
//   },
//   localGuradian: {
//     type: localGuardianSchema,
//     required: true,
//   },
//   profileImg: { type: String },
//   isActive: {
//     type: String,
//     enum: ['active', 'blocked'],
//     default: 'active',
//   },
// });

//creating a customs instance method
// studentSchema.methods.isUserExists=async function(id:string){
//   const existingUser=await Student.findOne({id})
//   return existingUser
// }

// export const StudentModel = model<TStudent>('Student', studentSchema);
// export const Student = model<TStudent,studentModel>('Student', studentSchema);

const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, 'insert a valid or unique id no'],
    trim: true,
    unique: true,
  },
  name: {
    type: userNameSchema,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'FeMale', 'other'],
      message: '{VALUE} is not supported !!!',
    },
    trim: true,
    required: true,
  },
  dateOfBirth: { type: String, trim: true },
  email: {
    type: String,
    required: [true, 'please give valid and unique email'],
    unique: true,
    trim: true,
    // validate:{
    //   validator:(value:string)=>validator.isEmail(value),
    //   message:'{VALUE} is not vaild email',
    // }
  },
  contactNo: {
    type: String,
    required: [true, 'please insert your contact number'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'please insert your emergency contact no'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    trim: true,
  },
  presentAddress: {
    type: String,
    trim: true,
    required: [true, 'please insert your present address'],
  },
  permanentAddress: {
    type: String,
    trim: true,
    required: [true, 'please insert your permanent address'],
  },
  gurdian: {
    type: guardianSchema,
    required: true,
  },
  localGuradian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

//creating a custom static method  
studentSchema.statics.isUserExists=async function (id:string){
  const existingUser= await Student.findOne({id});
 return existingUser
}

export const Student = model<TStudent,studentModel>('Student', studentSchema);
