import fs from 'fs'
//import fonter from 'gulp-fonter' //windows
import fonter from 'gulp-fonter-unx' //osx
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, { })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'FONTS',
        message: 'Error: <%= error.message %>'
    })))

    //Конвертируем в .ttf
    .pipe(fonter({
        formats: ['ttf']
    }))

    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.ttf`, { })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'FONTS',
        message: 'Error: <%= error.message %>'
    })))

    //Конвертируем в .woff
    .pipe(fonter({
        formats: ['woff']
    }))

    //Выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    //Ищем файлы шрифтоф .ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    //Конвертируем в .woff2
    .pipe(ttf2woff2())

    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/assets/scss/fonts.scss`

    fs.readdir(app.path.build.fonts, function(err, fontsFiles) {
        if(fontsFiles) {
            console.log(fontsFile)
            if(!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb)
                let newFileOnly
                for(var i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split('.')[0]
                    if(newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName
                        let fontsStyle = 'normal'
                        if(fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100
                        } else if(fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200
                        } else if(fontWeight.toLowerCase() === 'extralightitalic') {
                            fontsStyle = 'italic'
                            fontWeight = 200
                        } else if(fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300
                        } else if(fontWeight.toLowerCase() === 'lightitalic') {
                            fontWeight = 300
                            fontsStyle = 'italic'
                        } else if(fontWeight.toLowerCase() === 'italic') {
                            fontWeight = 300
                            fontsStyle = 'italic'
                        } else if(fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500
                        } else if(fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600
                        } else if(fontWeight.toLowerCase() === 'semibolditalic') {
                            fontWeight = 600
                            fontsStyle = 'italic'
                        } else if(fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700
                        } else if(fontWeight.toLowerCase() === 'bolditalic') {
                            fontWeight = 700
                        } else if(fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800
                        } else if(fontWeight.toLowerCase() === 'extrabolditalic') {
                            fontWeight = 800
                            fontsStyle = 'italic'
                        } else if(fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900
                        } else if(fontWeight.toLowerCase() === 'blackitalic') {
                            fontWeight = 900
                            fontsStyle = 'italic'
                        } else if(fontWeight.toLowerCase() === 'lightitalic') {
                            fontWeight = 300
                            fontsStyle = 'italic'
                        } else {
                            fontWeight = 400
                        }
                        // with woff2
                        // fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        // without woff2
                        fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontsStyle};\n}\r\n`, cb);

                        newFileOnly = fontFileName;
                    }
                } 
            } else {
                console.log("Файл scss/fonts.scss уже существует. Для обнволения его нужно удалить!")
            }
        }
    })

    return app.gulp.src(`${app.path.srcFolder}`)
    function cb() {};
}