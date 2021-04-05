#!/usr/bin/env bash

if [ ! "$(cat /etc/hosts | grep www.mydomain.local)" ]
then
    sh -c "echo '\n127.0.0.1 www.mydomain.local\n127.0.0.1 static.mydomain.local\n127.0.0.1 static.www.mydomain.local\n' >> /etc/hosts"
fi

