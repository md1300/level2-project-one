

import { Student } from '../student.model';
import { TStudent } from './student.interface';

// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student); //built in static method  provide from mongoose

//   return result;
// };

//creating a customs instance method
// const createStudentIntoDB = async (studentData: TStudent) => {
//   const student = new Student(studentData);//create an instance 
//  if(await student.isUserExists(studentData.id)){
//   throw new Error('user already exists')
//  }
//   const result = student.save(); //built in instance method provide from mongoose
//   return result;
// };

const createStudentIntoDB=async(studentData:TStudent)=>{

  if(await Student.isUserExists(studentData.id)){
    throw new Error('user already exists')
  }
  const result =await Student.create(studentData) //built in static method provide  from mongoose

 return result
}

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getsingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{$match:{id:id}}])
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id },{isDelete:true});
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getsingleStudentFromDB,
  deleteStudentFromDB,
};
