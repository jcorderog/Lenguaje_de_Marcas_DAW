const {series,parallel,src,dest} = require("gulp");

function inicio(cb) {
    console.log("Generando proyecto CV");
    cb();
}

function final(cb) {
    console.log("Proyecto CV generado");
    cb();
}

function pipeline(cb) {
    return src("./css/*.css").pipe(dest("./dist/")), src("./*.html").pipe(dest("./dist/"));
}

exports.inicio = inicio;
exports.final = final;
exports.default = pipeline;