helm template \
  --set tag=$TAG \
  --name website \
  --namespace default \
  --values ./config.yaml \
  --output-dir ./templates \
  ./chart
