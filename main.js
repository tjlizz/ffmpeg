const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
console.log(ffmpegPath)
ffmpeg.setFfmpegPath(ffmpegPath);
var vf = 'movie= aa.png[logo];[in][logo]overlay=10:10[out]';
const command = ffmpeg('a.mp4')
.addOptions([
    '-vcodec libx264',
    '-acodec aac',
    '-ac 2',
    '-b:a 128k',
    '-q:v 6',
    '-strict -2',
    '-start_number 0',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls',
]) .save(path.join(__dirname, './aaa/aaaaaa.m3u8'))
.addOption('-vf', vf)
 .run()











 