# get the previous tag => https://gist.github.com/kjantzer/98dfa5138ad6e741c24f
PREVIOUS_TAG=$(git describe --abbrev=0 --tags `git rev-list --tags --skip=1 --max-count=1`)

TRAVIS_TAG=v1.2
echo $PREVIOUS_TAG

# get the changed files since the last tag
for dir in libraries/*
do
  # do we need to bump the library versions
  # bump the libraries if necessary
  if [ $(git --no-pager diff --name-only $TRAVIS_TAG $PREVIOUS_TAG -- $dir) ]
  then
    $(cd $dir && npm publish --access public)
  fi
done

# build docker containers
TAG=$TRAVIS_TAG yarn build:containers

# update the kubernetes scripts
TAG=$TRAVIS_TAG yarn build:kubernetes

# update kubernetes
yarn update:kubernetes
