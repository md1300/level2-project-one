import { studentServices } from './student.services';
import { Request, Response } from 'express';
import {z} from 'zod'
import studentValidationSchemaWithZod from './student.validation.zod';

// import joyValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {

// //using joy to create validation

//create a schema validation using zod 



    const { student: studentData } = req.body;

    // console.log(studentData)
    //data validation using joi 
    // const {error,value}=joyValidationSchema.validate(studentData);
    // console.log({error},{value})
     //will call service func to send this data
    // const result = await studentServices.createStudentIntoDB(value);


    //data validation using zod
    //will call service func to send this data
    
    const zodParseData=studentValidationSchemaWithZod.parse(studentData)

    
    
    const result = await studentServices.createStudentIntoDB(zodParseData);

 

    //send response

    // if(error){
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     data: error.details,
    //   });
    // }

    

    res.status(200).json({
      success: true,
      message: 'student is create successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message:error.message || 'something went wrong',
      data: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'students are retrieved successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message:error.message || 'something went wrong',
      data: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getsingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is retrieved successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message:error.message || 'something went wrong',
      data: error,
    });
  }
};
const deleteStudent=async(req:Request,res:Response)=>{
  try{
    const{studentId}=req.params
    const result=await studentServices.deleteStudentFromDB(studentId)
    res.status(200).json({
      success:true,
      message:'student is deleted successfully',
      data:result,
    })
  }
  catch(error:any){
    res.status(500).json({
      success:false,
      message:error.message || 'something went wrong',
      data:error
    })
  }
}

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
