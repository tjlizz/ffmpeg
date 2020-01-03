const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
ffmpeg.setFfmpegPath(ffmpegPath);
const command = ffmpeg('a.mp4')
    .save(path.join(__dirname, './aaa/aaa-%03d.ts'))
   
    .outputOptions([
        '-y',
        '-vcodec copy',
        '-acodec copy',
        '-map 0',
        '-f segment',
        `-segment_list ${path.join(__dirname, './aaa/aaa.m3u8')}`,
        '-segment_time 10']
    ).on('proce')
    
    run()

