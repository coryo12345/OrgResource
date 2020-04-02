#!/bin/sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "$DIR/storage.json"

export GOOGLE_APPLICATION_CREDENTIALS="$DIR/storage.json"
