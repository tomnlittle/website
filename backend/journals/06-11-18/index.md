# STEMN Kubernetes Update

Whilst in San Francisco, I will be updating the kubernetes configurations so they can be templated using the helm templating engine.

I have considered using Helm's server tiller but for our use case we should be able to manage the pod versions using the commit sha's they are associated with as they are tied to the images and the labels.
