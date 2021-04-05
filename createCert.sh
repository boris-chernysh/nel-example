#!/usr/bin/env bash

# https://web.dev/how-to-use-local-https/

if ! command -v mkcert &> /dev/null
then
    brew install mkcert
fi

mkcert -install

mkdir -p cert
mkcert -cert-file ./cert/cert.pem -key-file ./cert/key.pem static.mydomain.local www.mydomain.local static.www.mydomain.local
