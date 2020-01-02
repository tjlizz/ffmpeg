const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
console.log(ffmpegPath)
ffmpeg.setFfmpegPath(ffmpegPath);
const command = ffmpeg('a.mp4')
    .audioCodec('libopus')
    .audioBitrate(96)
    .outputOptions([
        '-hls_time 3',
        '-hls_playlist_type vod',
        // '-hls_base_url http://localhost:8080/',
        `-hls_segment_filename %03d.ts`
        
    ])
    .output(' outputfile.m3u8')
    .on('progress', function (progress) {
        console.log('Processing: ' + progress.percent + '% done')
    })
    .on('end', function (err, stdout, stderr) {
        console.log('Finished processing!' /*, err, stdout, stderr*/)
        // console.log(stdout)
    })
    .run() 