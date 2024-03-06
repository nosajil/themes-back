import express from 'express'
import ThemesSchema from '../models/theme.js'

const themeRouter = express.Router()

themeRouter.get('/themes', async (req, res) => {
    try {

        const themes = await ThemesSchema.find()
        res.json(themes)

    } catch (err) {
        console.log(err.message);

    }
})


themeRouter.get('/themes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const theme = await ThemesSchema.findById(id);

        if (!theme) {
            return res.status(404).json({ message: "Theme not found" }); 
        }

        res.json(theme.element); 
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
});


export default themeRouter;




