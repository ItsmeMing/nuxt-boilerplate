#!/usr/bin/env bash

SERVER="future-tech"

DEPLOY_PATH="/root"
SOURCE_FOLDER_NAME=".output/public"
DEPLOY_SOURCE_FOLDER_NAME="/var/www/staging.sixth-admin.ftech.ltd"
FILE_NAME="spa.tar.gz"

# yarn
yarn generate    
rm -rf $FILE_NAME
tar -zcvf $FILE_NAME $SOURCE_FOLDER_NAME
echo "=================================="
echo "Upload source..."
scp $FILE_NAME $SERVER:$DEPLOY_PATH
echo "=================================="
echo "Deploying..."

SCRIPT1="mkdir -p $DEPLOY_SOURCE_FOLDER_NAME && tar -xzvf $FILE_NAME"
SCRIPT2="rm -rf $DEPLOY_SOURCE_FOLDER_NAME/!\(uploads\)"
SCRIPT3="rsync -a $SOURCE_FOLDER_NAME/* $DEPLOY_SOURCE_FOLDER_NAME/"
SCRIPT4="rm -rf $SOURCE_FOLDER_NAME"
SCRIPT5="rm $FILE_NAME"
ssh $SERVER "$SCRIPT1 && $SCRIPT2 && $SCRIPT3 && $SCRIPT4 && $SCRIPT5"

echo "=================================="
rm -rf $FILE_NAME
rm -rf $SOURCE_FOLDER_NAME
echo "Done"
