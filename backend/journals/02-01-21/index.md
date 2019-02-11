# Local Docker SSL Server

[<svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
](https://github.com/tomnlittle/local-ssl-server)

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
