## Why
We had recently moved to a SSL development environment at work, and a number of machines had not been configured correctly and were experiencing issues. Notably my own laptop upon running the configuration scripts continued to encounter an Invalid Common name issue.

I decided to investigate, by setting up my own local server with SSL.

## In Summary

### Invalid Common Name
Now, for legacy reasons, the common name on a certificate should refer to the web address that is being accessed. Traditionally if you wanted to support other addresses prefixed to the main root address you would need to use a wildcard.

For example, if you owned ```www.my-website.com``` you would set this as the common name. If you had an admin page hosted at ```admin.my-website.com``` you would need to set the common name to ```*.my-website.com``` to enable prefixes to you website to be authorised to use the certificate.

Currently however we no longer use common names and have moved towards SANS.

### Subject Alternative Name (SANs)
SANS allow specific domain addresses, such as ```admin.my-website.com``` as well as ```www.my-website.com``` to be authorised for a certificate.

The problem at work was that these addresses were not being correctly configured for the certificates, and the SANs were not appearing on the sites certificate so any subdomain was being invalidated.

## My Setup
I first began by creating a root certificate for my local machine which granted me the ability to generate site-side certificates.

You can see how I do this [here](https://github.com/tomnlittle/local-ssl-server/blob/master/setup-rootCA.sh)

Once I have generated the root certificate authority and imported it into my Mac's keychain, and trusted it; I can begin to create my SSL certificate.

You can see how I do this [here](https://github.com/tomnlittle/local-ssl-server/blob/master/setup-local-domain-certificate.sh).

Essentially I first create certificate signing request, which takes the root certificate key, and a configuration such as :

```
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn

[dn]
C=US
ST=RandomState
L=RandomCity
O=RandomOrganization
OU=RandomOrganizationUnit
emailAddress=hello@example.com
CN = localhost
```

The certificate signing request acts as the means to apply for a certificate.

Then on line 27 of [my certificate script](https://github.com/tomnlittle/local-ssl-server/blob/master/setup-local-domain-certificate.sh) I generate the certificate and import the following configuration.

```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
DNS.2 = api
```

The Alternate names are at the bottom. DNS alt names are prefixed with DNS whilst ip addresses with IP, like the following for example:

```
[alt_names]
DNS.1 = localhost
DNS.2 = api
IP.1 = 192.123.22.22
IP.2 = 192.134.22.22
```
