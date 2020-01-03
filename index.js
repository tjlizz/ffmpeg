const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
console.log(ffmpegPath)
ffmpeg.setFfmpegPath(ffmpegPath);
const command = ffmpeg('a.mp4')
.input(path.join(__dirname,'./aa.png'))
    .save(path.join(__dirname, './aaa/%03d.ts'))
    .outputOptions([
        '-y',
        'aaaaa%03d.ts',
        '-vcodec copy',
        '-acodec copy',
        '-map 0',
        '-f segment',
        `-segment_list ${path.join(__dirname,'./aaa/aaa.m3u8')}`,
        '-segment_time 10']
    ).run()