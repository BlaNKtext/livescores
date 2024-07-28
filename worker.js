import { AutoRouter } from 'itty-router'
const router = AutoRouter()
import url  from 'url'
const playString = []
router.get("/", () => {
  return new Response("Whoops! Are you sure you know what you're doing?", {
  method: 'GET',
  mode: 'cors',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"}
  })
})
router.get("/get",(req, res) => {
    const returnData = JSON.stringify(playString)
    return new Response(returnData, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"}
    })
  })
  router.get("/post",(req, res) => {
    let q = url.parse(req.url, true).query
    if (q.title || q.sid) {playString.push(q)}
    if (playString.length > 16) {playString.shift()}
    return new Response("", {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"}
    })
  })
router.all("*", () => new Response("This route doesnt exist, silly!", { status: 404 }))
export default router