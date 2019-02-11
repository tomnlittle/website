KEY=${1:-server.key}
CERT=${2:-server.cert}

cp -f $KEY node_modules/webpack-dev-server/ssl/server.pem
cat $CERT >> node_modules/webpack-dev-server/ssl/server.pem
