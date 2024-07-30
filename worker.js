import { AutoRouter, cors } from 'itty-router'
import url  from 'url'
const { preflight, corsify } = cors() 
const router = AutoRouter({
  before: [preflight],
  finally: [corsify]
})
const playString = []
router.get("/", () => {
  return new Response('Whoops! Are you sure you know what youre doing?')
})
router.get("/get",(req, res) => {
    const returnData = JSON.stringify(playString)
    return new Response(returnData)
  })
  router.get("/post",(req, res) => {
    let q = url.parse(req.url, true).query
    if (q.title || q.sid) {playString.push(q)}
    if (playString.length > 16) {playString.shift()}
    return new Response("")
  })
router.all("*", () => new Response("This route doesnt exist, silly!", {status: 404}))
export default router