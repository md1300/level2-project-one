import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};

export type TStudent = {
  id: string;
  password:string;
  name: TUserName;
  gender: 'Male' | 'FeMale' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B-' | 'B+' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: TGuardian;
  localGuradian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDelete:boolean;
};

//for creating static

export  interface StudentModel extends Model<TStudent> {
  isUserExists(id:string):Promise<TStudent | null>;
}


//for creating instance

// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type studentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
