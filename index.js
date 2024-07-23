import { AutoRouter } from 'itty-router'
const router = AutoRouter()
//!WORKING ON REWRITING. NOT YET FUNCTIONAL
router
  .get('/', () => `Valid routes are: /get | /post`)
  .get('/get',(req, res) => {
    const returnData = JSON.stringify(a)
    return new Response(returnData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  })
  .get('/post',(req, res) => {
    let q = url.parse(req.url, true).query
    if (q.title || q.sid) {
      a.push(q)
    }
    if (a.length > 16) {
      a.shift()
    }
    return new Response("", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  })

router.all("*", () => new Response("This isnt a valid route, silly!!", { status: 404 }))
router.fetch(('fetch', (e) => {
  e.respondWith(router.handle(e.request))
}))
export default router