// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/Kowalski/Documents/Advanced-Topics/src/pages/index.js"))
}

exports.json = {
  "index.json": require("/Users/Kowalski/Documents/Advanced-Topics/.cache/json/index.json")
}