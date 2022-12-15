//Получаем имя папки проекта
import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build : {
        js: `${buildFolder}/assets/js/`,
        css : `${buildFolder}/assets/css/`,
        html : `${buildFolder}/`,
        files : `${buildFolder}/files/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`
    },
    src : {
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        js: `${srcFolder}/assets/js/app.js`,
        scss : `${srcFolder}/assets/scss/style.scss`,
        html : `${srcFolder}/*.{html,htm}`,
        pug : `${srcFolder}/*.pug`,
        files : `${srcFolder}/files/**/*.*`,
        svg: `${srcFolder}/assets/svg/*.svg`
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        scss : `${srcFolder}/assets/scss/**/*.scss`,
        html : `${srcFolder}/**/*.{html,htm}`,
        pug : `${srcFolder}/**/*.pug`,
        files : `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        svg: `${srcFolder}/assets/svg/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    },
    clean : buildFolder,
    srcFolder : srcFolder,
    rootFolder : rootFolder,
    ftp : ''
}