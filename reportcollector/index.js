const http = require('http')

const requests = []

http.createServer(
    function (req, res) {
        if (req.url.startsWith('/getRequests')) {
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(requests))

            return
        }

        console.log(req.method, ' request to:', req.headers.host, req.url, JSON.stringify(req.headers, null, 2), ' from: ', req.headers.origin)

        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            try {
                body = JSON.parse(body)

                requests.push(body)
            } catch {
                console.error('Body contains invalid json: ', body)
            }

            res.setHeader('access-control-allow-origin', req.headers.origin || '*')
            res.setHeader('access-control-allow-headers', 'content-type')
            res.setHeader('access-control-allow-methods', 'POST, OPTIONS')
            res.end('ok')
        })
    }
).listen(3000, () => console.log('listen 3000'))
