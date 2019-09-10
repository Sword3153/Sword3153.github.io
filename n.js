var hostname = '192.168.0.101';
var port = 30;

var http = require("http");
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
    switch (ext) {
        case ".css":
        case ".js":
            fs.readFile("." + request.url, 'utf-8', function (err, data) {//读取内容
                if (err) throw err;
                response.writeHead(200, {
                    "Content-Type": {
                        ".css": "text/css",
                        ".js": "application/javascript",
                    }[ext]
                });
                response.write(data);
                response.end();
            });
            break;
        case ".jpg":
        case ".png":
            fs.readFile("." + request.url, function (err, data) {//读取内容
                if (err) throw err;
                response.writeHead(200, {
                    "Content-Type": {
                        ".jpg": "image/jpg",
                        ".png": "image/png",
                    }[ext]
                });
                response.write(data);
                response.end();
            });
            break;
        default:
            fs.readFile('./index.html', 'utf-8', function (err, data) {//读取内容
                if (err) throw err;
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.write(data);
                response.end();
            });
    }
});

server.listen(port, hostname, function () {
    console.log('服务器运行在 http://' + hostname + ':' + port);
});