# Network error logging example

## Prerequisite

Network Error Logging is a mechanism that allows to receive reports about network
requests from browser page.

Https needed for NEL work, thats why testing this technology gets little bit
complicated.
This repository is ready-to-deploy test environment for NEL that can be used on
localhost and supports https and multidomain.

## How to run

1. Install [mkcert](https://github.com/FiloSottile/mkcert#installation);
1. Run `mkcert -install` it will request password for install root-CA;
1. Execute script for create certificates `./createCert.sh`;
1. Run `sudo ./setHosts.sh` it will add domains to `/etc/hosts` (thats why it
requires sudo);
1. Deploy `docker-compose up`.

## How to test

TBD.
