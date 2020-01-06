const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
ffmpeg.setFfmpegPath(ffmpegPath);
var exec = require('child_process').exec;

var ls = exec('ls -l', function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
    }
    console.log('Child Process STDOUT: ' + stdout);
  });

module.exports = {

    ffmpeg: (videoPath, savePath, fileName) => {
        ffmpeg(videoPath)
            .outputOptions([
                '-y',
                '-vcodec copy',
                '-acodec copy',
                '-map 0',
                //  '-hls_base_url http://lizeze.com:3000/',
                '-f segment',
                ' -force_key_frames  expr:gte(t,n_forced*1)'
                `-segment_list ${savePath + '\\' + fileName + '.m3u8'}`,
                '-segment_time 1']
            )
            
            .save(savePath +'\\'+ `${fileName + '-%03d.ts'}`)
            
            
            .on('progress', function (progress) {
                console.log('Processing: ' + progress.percent + '% done')
            })
            .on('end', function (err, stdout, stderr) {
                console.log('Finished processing!' /*, err, stdout, stderr*/)
                // console.log(stdout)
            })
            .
            run()
    }

}


