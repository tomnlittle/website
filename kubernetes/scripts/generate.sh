mkdir $PWD/templates

helm template \
  --set tag=$TAG,backend.dropboxAccessToken=$DROPBOX_ACCESS_TOKEN \
  --name website \
  --namespace default \
  --values $PWD/config.yaml \
  --output-dir $PWD/templates \
  $PWD/chart
