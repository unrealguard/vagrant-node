#!/bin/bash

# This script is used to start the application from vagrant
echo "Starting node application"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SCRIPT=$DIR"/server.js"
echo Executing Script $SCRIPT
node $SCRIPT 
