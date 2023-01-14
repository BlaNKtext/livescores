import { Router } from 'itty-router'
const router = Router()
import  url  from 'url'
const a = []
router.get("/", () => {
  return new Response("Routes are /get and /post")
})

router.get("/get",(req, res) => {
  const returnData = JSON.stringify(a)
  return new Response(returnData, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
})

router.get("/post",(req, res) => {
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
router.all("*", () => new Response("404, not found!", { status: 404 }))
addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})