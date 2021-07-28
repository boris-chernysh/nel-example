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

1. Navigate to `https://www.mydomain.local/` in your browser, the response should be `hello`
1. Wait a little while your browser determines the moment to send a request to collector
1. You will see a `POST  request to: www.mydomain.local /report-collector/` text in your logs
1. You can manually request collected reports via GET `https://www.mydomain.local/report-collector/getRequests`

## Cleaning up
1. After you are done with testing remove any occurencies of mydomain in your hosts
1. Optionally remove docker image using
```
docker rmi nel-example_reportcollector -f
```