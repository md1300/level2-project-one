import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getsingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getsingleStudentFromDB,
};