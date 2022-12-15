import log from 'fancy-log';
import {stream as critical} from 'critical';


export const criticalTask = () => {
    return app.gulp.src('dist/*.html')
    .pipe(
      critical({
        base: 'dist/assets/css',
        inline: true,
        css: [app.path.build.css + 'crit.min.css', app.path.build.css + 'crit.css'],
      })
    )
    .on('error', err => {
      log.error(err.message);
    })
    .pipe(app.gulp.dest(app.path.build.css));
}