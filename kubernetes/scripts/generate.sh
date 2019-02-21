mkdir $PWD/templates

helm template \
  --set tag=$TAG \
  --name website \
  --namespace default \
  --values $PWD/config.yaml \
  --output-dir $PWD/templates \
  $PWD/chart
