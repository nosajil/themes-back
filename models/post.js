import mongoose from 'mongoose'

const { Schema } = mongoose

const PostSchema = new Schema({
    author: String,
    title: String,
    text: String
})

export default mongoose.model('posts', PostSchema)