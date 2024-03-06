import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ThemesSchema = new Schema ({
    themes : String,
    element: Array
});



export default mongoose.model('themes', ThemesSchema )