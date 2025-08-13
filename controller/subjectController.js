const subjectRepo  = require("../repo/SubjectRepo")

const getAllSubjects = async (req,res) => {
    try{
        const results = await subjectRepo.getAllSubjects()
        res.status(200).json(results)
    }catch(error){
      res.status(500).json({ name: "There was an error"});
    }
}




module.exports = {
    getAllSubjects
}