function command () {
    const obj = {}
    return {
        get(path, func){
            obj[path] = func
        },
        listen(port, func) {
            func()
        }
    }
}
module.exports = command