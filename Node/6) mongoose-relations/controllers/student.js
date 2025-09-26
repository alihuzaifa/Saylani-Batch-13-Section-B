import Student from "../models/student.js";

export const createStudent = async (req, res) => {
    try {
        const { name, age, courses } = req.body
        const newObject = new Student({ name, age, courses });

        await newObject.validate()

        const record = await newObject.save();

        res.send({
            message: "New Student Created",
            data: record
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}


export const getAllStudents = async (_, res) => {
    const allStudents = await Student.find({}).populate("courses")
    res.send({
        data: allStudents
    })
    try {
    } catch (error) {
        res.send({
            message: error
        })
    }
}