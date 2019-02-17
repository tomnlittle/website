helm template \
  --name website \
  --namespace default \
  --values ./config.yaml \
  --output-dir ./templates \
  ./chart
