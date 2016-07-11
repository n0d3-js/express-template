#!/bin/bash

mongoimport --jsonArray --drop --db $DB --collection things --file ../data/things.json
