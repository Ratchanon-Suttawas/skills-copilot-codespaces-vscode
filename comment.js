// Create web server with express

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// app.post('/', function (req, res) {
//     res.send('Got a POST request');
// });

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user');
// });

// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user');
// });

// app.get('/ab*cd', function (req, res) {
//     res.send('Pattern matched');
// });

// app.get('/index.html', function (req, res) {
//     res.sendFile(__dirname + '/' + 'index.html');
// });

// app.get('/process_get', function (req, res) {
//     var response = {
//         'first_name': req.query.first_name,
//         'last_name': req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

// app.post('/process_post', function (req, res) {
//     var response = {
//         'first_name': req.body.first_name,
//         'last_name': req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

// app.post('/file_upload', function (req, res) {
//     console.log(req.files[0]);  // 上传的文件信息

//     var des_file = __dirname + '/' + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 response = {
//                     message: 'File uploaded successfully',
//                     filename: req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// });

// app.get('/list_user', function (req, res) {
//     console.log('list_user GET request');
//     res.send('Page listing');
// });

// app.get('/ab*cd', function (req, res) {
//     console.log('ab*cd GET request');
//     res.send('Pattern matched');
//
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(cookieParser());

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

app.get('/', function (req, res) {
    console.log('Cookies: ', req.cookies);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('访问地址为 http://%s:%s', host, port);
});



