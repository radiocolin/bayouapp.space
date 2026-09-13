# bayouapp.space

GitHub Pages source for Bayou's website and ATProto OAuth client metadata.

Before cutting the app over, confirm both of these URLs serve the committed
content over HTTPS:

- `https://bayouapp.space/`
- `https://bayouapp.space/client-metadata.json`

The app must change its OAuth client ID, redirect URI, and registered URL
scheme together. Existing OAuth sessions are tied to the old client ID and
will need to authenticate again after that release.

The production app intentionally remains configured for `bluesy.space` until
the domain and Pages certificate are ready and the cutover is explicitly
requested.
