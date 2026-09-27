# bayouapp.space

GitHub Pages source for Bayou's website and ATProto OAuth client metadata.

## Pages

- `index.html`: the landing page
- `privacy.html` and `terms.html`: the privacy policy and terms of use. Their text lives in `privacy.md` and `terms.md`; `legal.js` renders the markdown with [marked](https://marked.js.org). Edit the `.md` files and update the "Last Updated" date.
- `styles.css`: shared styles, with light and dark modes following the visitor's system setting.

## Images

Everything in `assets/` is generated from the Bayou repo's App Store screenshot pipeline, so the site matches the store:

```sh
cd ../Bayou
python3 Screenshots/site_assets.py   # writes ../bayouapp.space/assets
```

It exports the hero backgrounds, iPhone screens, Mac windows, the app icon (without its beta ribbon), and the link preview image. Retake the screenshots (`Screenshots/capture.py`) first if the app has changed.

## OAuth client metadata

`client-metadata.json` is Bayou's OAuth client ID, and must stay reachable at `https://bayouapp.space/client-metadata.json` over HTTPS, with no redirects or authentication. Changing it invalidates every signed-in session; see `CUTOVER.md` for the domain history and cutover steps.
