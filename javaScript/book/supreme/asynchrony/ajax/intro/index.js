import http from 'http';
import fs from 'fs/promises';

import qs from 'querystring';
import formidable from 'formidable';
import routes from './server.js'

console.log('Test HTTP server started, open http://localhost:8080/');

http.createServer(async (request, response) => {
	let root = 'public';
	
	let [url, querystring = ''] = request.url.split('?');
	url =  normalize(url);
	
	let text = '';
	let code = 200;
	
	if (routes[url]) {
		let handler = routes[url];
		
		let post = await getPost(request);
		let get  = qs.parse(querystring);
		
		text = String(handler({get, post}));
		response.setHeader('Content-Type', 'text/html');
	} else {
		let path = getPath(root, url);
		response.setHeader('Content-Type', getMimeType(path));
		
		try {
			text = await fs.readFile(path, 'utf-8');
		} catch (error) {
			code = 404;
			text = `Page '${path}' not found`;
		}
	}
	
	response.statusCode = code;
	response.write(text ? text : '');
	response.end();
	
}).listen(8080);

function getPost(request) {
	return new Promise((resolve, reject) => {
		if (request.method == 'POST') {
			let form = new formidable.IncomingForm();

			form.parse(request, function(err, fields, files) {
				if (err) {
					reject(err.message);
					return;
				}
				
				resolve(fields);
			});
		} else {
			resolve({});
		}
	});
}

function normalize(url) {
	url =  '/' + url.replace(/^\/|\/$/g, '');
	
	if (url !== '/' && !/\.[^/]+?/.test(url)) {
		url = url + '/';
	}
	
	return url;
}
function getPath(root, url) {
	if (url.match(/\/$/)) {
		url = url + 'index.html';
	}
	
	return root + url;
}
function getMimeType(path) {
	let mimes = {
		html: 'text/html',
		jpeg: 'image/jpeg',
		jpg:  'image/jpeg',
		png:  'image/png',
		svg:  'image/svg+xml',
		json: 'application/json',
		js:   'text/javascript',
		css:  'text/css',
		ico:  'image/x-icon',
	};
	
	let exts = Object.keys(mimes);
	let extReg = new RegExp('\\.(' + exts.join('|') + ')$');
	
	let ext = path.match(extReg)[1];
	
	if (ext) {
		return mimes[ext];
	} else {
		return 'text/plain';
	}
}

