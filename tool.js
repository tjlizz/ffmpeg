const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
ffmpeg.setFfmpegPath(ffmpegPath);
 

module.exports = {

    ffmpeg: (videoPath, savePath, fileName) => {
        ffmpeg(videoPath)
            .outputOptions([
                '-y',
                '-vcodec copy',
                '-acodec copy',
                '-map 0',
                '-f segment',
                `-segment_list ${savePath + '\\' + fileName + '.m3u8'}`,
                '-segment_time 5']
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


