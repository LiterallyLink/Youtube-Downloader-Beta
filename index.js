// dependancies

const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

// parsing the express package through cors
app.use(cors());

// starting a local server off of your machine using port 4000
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

// parsing the video request and downloading it to your /downlaod directory as an mp4 file

app.get('/download', (req,res) => {
    let URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});
