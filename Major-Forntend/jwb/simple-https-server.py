#!/usr/bin/python3

# taken from http://www.piware.de/2011/01/creating-an-https-server-in-python/
# generate server.xml with the following command:
#    openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes
# run as follows:
#    python simple-https-server.py
# then in your browser, visit:
#    https://localhost:4443

# import http.server
# import ssl

# httpd = http.server.HTTPServer(('localhost', 4443), http.server.SimpleHTTPRequestHandler)
# httpd.socket = ssl.wrap_socket(httpd.socket, certfile='./server.pem', server_side=True)

# print("Server running at https://localhost:4443/")
# httpd.serve_forever()
#!/usr/bin/python3

import http.server
import ssl

httpd = http.server.HTTPServer(('localhost', 4443), http.server.SimpleHTTPRequestHandler)

ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ssl_context.load_cert_chain(certfile='./server.pem')

httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

print("Server running at https://localhost:4443/")
httpd.serve_forever()