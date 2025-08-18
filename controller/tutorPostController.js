const tutorPostRepo = require('../repo/TutorPostsRepo')


const createNewTutorPost = async (req, res) => {
    const post = req.body
    try {
        const response = await tutorPostRepo.createTutorPost(post)
        res.status(200).send("post made")
    } catch (error) {
        const code = error.statusCode || 500
        res.status(code).send(error)
    }
}

const getAllPosts = async (req, res) => {
    try {
        console.log("posts endpoint hit")
        const response = await tutorPostRepo.getTutorPosts()
        console.log("response from repo", response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTutorPostById = async(req,res) => {
    const id = req.params.id
    try{
        const response = await tutorPostRepo.getTutorPostById(id)
        res.status(200).send(response)
    } catch(error){
        res.status(500).send("There was an error")
    }

}



module.exports = {
    createNewTutorPost,
    getAllPosts,
    getTutorPostById
}