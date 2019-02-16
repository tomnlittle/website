I just arrived in San Francisco a couple of days again. I have been discussing with my Jackson that it would be really beneficial for the project if the kubernetes configurations were templated using some templating library such as Helm.

## Why is this beneficial
Currently the development, staging and production kubernetes configurations are separated due to variations in their configuration. By using helm template we will be able to use the same configuration scripts but be able to retain independent configurations for the various environments.

This brings all the environments closer to together as all micro-services in development will be simple derivatives to their production counter parts.

## Are we going to use the Helm Tiller ?
In the near future we will be moving to a totally stateless production environment, meaning that all state will be managed by third parties, ie Mongo Atlas is an example. The benefit of this approach is that we will no longer manage state, which is good for security and reliability.

The Helm tiller would be another cog in the process of starting one of these stateless systems. Initialising and maintaining a tiller is fine, but we want to minimise the systems we need to manage.

## But the Tiller maintains versions, how are you going to manage container versioning ?
1. Currently our container images are tied to git tags and releases, when a new release is issued, our CI deployment system will build the images and signal to kubernetes to update the images.
2. In the event of a failure we can easily rollback the image version to a previous release
3. All built images are tested first, deployed and then tested again, if an image fails either of these stages the previous version is simply kept for all containers.
4. Starting with Helm v3, there will be no need for a tiller, so we expect when this feature becomes available I will analyse these decisions again.
