import fileinclude from "gulp-file-include"
import versionNumber from 'gulp-version-number'
import pug from 'gulp-pug'

export const html = () => {
    return app.gulp.src(app.support_pug ? app.path.src.pug : app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title : "HTML",
            message : "Error: <%= error.message %>"
        })
    ))
    .pipe(app.support_pug ? pug({ 
        pretty: true, 
        verbose : true 
    }) : fileinclude())
    .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
    .pipe(app.plugins.replace(/@svg\//g, 'assets/img/'))
    .pipe(
        versionNumber({
            'value' : '%DT%',
            'append' : {
                'key' : '_v',
                'cover' : 0,
                'to' : ['css', 'js']
            },
            'output' : {
                'file' : 'gulp/version.json'
            }
        })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}