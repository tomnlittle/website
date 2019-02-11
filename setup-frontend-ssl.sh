# descript root key
openssl rsa -in root.key -out out.key

cp -f out.key frontend/node_modules/webpack-dev-server/ssl/server.pem
cat root.pem >> frontend/node_modules/webpack-dev-server/ssl/server.pem

chmod 400 frontend/node_modules/webpack-dev-server/ssl/server.pem
