#!/bin/bash

set -e

APP_URL="http://localhost:8000/"

trap 'kill $p1 $p2' SIGINT

webpack --config webpack.config.js --watch &
$(cd static && python -m SimpleHTTPServer) &

if [ -n "$BROWSER" ]; then
  "$BROWSER" "$APP_URL"
elif [ -x "$(which sensible-browser)" ]; then
  sensible-browser "$APP_URL"
elif [ -x "$(which open)" ]; then
  open "$APP_URL"
fi

wait
