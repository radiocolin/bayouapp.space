# bayouapp.space cutover checklist

The website repository and GitHub Pages configuration are ready. Bayou still
uses `bluesy.space`; do not remove the old site until the app migration is
released and existing users have had time to update.

## 1. Configure DNS

Add these `A` records for the apex `bayouapp.space` domain:

```text
@  185.199.108.153
@  185.199.109.153
@  185.199.110.153
@  185.199.111.153
```

Optional IPv6 records:

```text
@  2606:50c0:8000::153
@  2606:50c0:8001::153
@  2606:50c0:8002::153
@  2606:50c0:8003::153
```

Keep the existing `push.bayouapp.space` record pointing to Bayou's push
gateway. Do not create a wildcard record that overrides it.

## 2. Finish GitHub Pages setup

- Wait for GitHub's DNS check to succeed in repository **Settings → Pages**.
- Wait for GitHub to provision the TLS certificate.
- Enable **Enforce HTTPS**.
- Confirm both URLs return successfully over HTTPS:
  - `https://bayouapp.space/`
  - `https://bayouapp.space/client-metadata.json`
- Confirm the served OAuth metadata contains:
  - `client_id`: `https://bayouapp.space/client-metadata.json`
  - `client_uri`: `https://bayouapp.space`
  - `redirect_uris`: `space.bayouapp:/oauth/callback`

## 3. Cut Bayou over in one release

These values must change together:

- In `Bayou/Core/Auth/OAuthClientConfiguration.swift`:
  - Change `clientID` to `https://bayouapp.space/client-metadata.json`.
  - Change `redirectURI` to `space.bayouapp:/oauth/callback`.
  - Change `redirectURLScheme` to `space.bayouapp`.
- In the root `Info.plist`:
  - Replace the `space.bluesy` URL scheme with `space.bayouapp`.
  - Update its URL type name from `space.bluesy.oauth` to
    `space.bayouapp.oauth`.
- Update the OAuth-domain documentation in `CLAUDE.md`.
- Update or add OAuth configuration tests for the new client ID and callback.

Changing the OAuth client ID invalidates the app's existing grants. Expect
signed-in users to authenticate again after installing this release.

## 4. Validate before release

- Verify the hosted metadata remains reachable without redirects or
  authentication.
- Complete sign-in through a production build and confirm the callback opens
  Bayou through `space.bayouapp:/oauth/callback`.
- Confirm token refresh and sign-out/sign-in work with the new client ID.
- Confirm the old production build can still authenticate through
  `bluesy.space` while the new release rolls out.

## 5. Retire the old site later

After the migrated app has been available long enough for users to update:

- Keep `bluesy.space/client-metadata.json` available for any older app builds
  that are still supported.
- When older builds are no longer supported, replace the old landing page
  with a permanent redirect to `https://bayouapp.space`.
- Archive `radiocolin/bluesy.space` only after the old OAuth metadata is no
  longer needed.
