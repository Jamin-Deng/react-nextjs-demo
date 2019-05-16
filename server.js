const express = require('express');
const next = require('next');

//本地跨域重定向
const devProxy = {
    '/api': {
      target: 'http://localhost:3721',
      pathRewrite: { '^/api': '/api' },
      changeOrigin: true
    }
}

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // Set up the proxy.
        if (dev && devProxy) {
                const proxyMiddleware = require('http-proxy-middleware')
                Object.keys(devProxy).forEach(function (context) {
                server.use(proxyMiddleware(context, devProxy[context]))
            })
        }

        // 将被伪装过的url和真实的url匹配起来
        server.get('/p/:id', (req, res) => {
            const actualPage = '/post';
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
