TAG=${1:-v1}

helm template \
  --set tag=$TAG \
  --name website \
  --namespace default \
  --values ./config.yaml \
  --output-dir ./templates \
  ./chart
