const http = require("http");

const port = 8081;

const toDolist = ["Complete Node Byte", "Play Cricket"];

http
.createServer((request, response) => {
    const { method, url } = request;

    if (url === "/todos") {
        if (method === "GET") {
            response.writeHead(200, { "Content-type": "text/html" });
            response.write(toDolist.toString());
        }
        else if (method === "POST") {
            let body = "";
            request.on('error',(err) => {
                console.error(err)


            }).on('data', (chunk) => {
                body += chunk;
                

            })
            .on('end', () => {
                body = JSON.parse(body);
                console.log("data: ",body);
            });

        }

        else {
            response.writeHead(501);
        }
        
    }
    else 
    {
        response.writeHead(404);
    }

    response.end();
   
})
.listen(port, () => {
    console.log(`Nodejs server started successfully on port ${port}`);
});
 

//  http://localhost:8081