import Course from "../models/course.js"

export const createCourse = async (req, res) => {
    try {
        const { name, instructor } = req.body
        const newObject = new Course({ name, instructor });

        await newObject.validate()

        const record = await newObject.save();

        res.send({
            message: "New Course Created",
            data: record
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}