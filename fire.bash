#! /bin/bash

clear

echo "building distribution directory"
grunt build

wait

echo 'Completed building distribution folder'
echo 'Starting server'

cp -r app/styles dist/styles
cp -r app/images dist/images

cd dist
firebase init
firebase deploy

cd ..

echo 'done building and deploying to firebase'