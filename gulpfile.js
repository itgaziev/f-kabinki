import gulp from 'gulp'

//Импорт путей
import { path } from './gulp/config/path.js'

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

//Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path : path,
    gulp : gulp,
    plugins : plugins,
    support_pug : false
}

//Задачи
import { copy } from './gulp/task/copy.js'
import { reset } from './gulp/task/reset.js'
import { html } from './gulp/task/html.js'
import { server } from './gulp/task/server.js'
import { scss } from './gulp/task/scss.js'
import { criticalTask } from './gulp/task/criticalTask.js'
import { js } from './gulp/task/js.js'
import { images } from './gulp/task/images.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/task/fonts.js'
import { svgSprive } from './gulp/task/svgSprite.js'
//Наблюдатель
const watcher = () => {
    gulp.watch(path.watch.files, copy)
    gulp.watch(app.support_pug ? path.watch.pug : path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.svg, images)
}

//run gulp svgSprive
export { svgSprive }

//Последовательное выполнения задачи
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//Основные задачи
const mainTask = gulp.series(fonts, gulp.parallel(copy, html, scss, criticalTask, js, images))

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server))

//Выполнение сценария по умолчанию
gulp.task('default', dev)
gulp.task('fonts', fonts)
gulp.task('images', images)