# Privacy Policy

**Last Updated:** September 2026

Bayou is an app for using Bluesky and the AT Protocol on iPhone, iPad, and Mac. This policy explains what information Bayou handles, where it goes, and the choices you have.

**The short version:** Your posts, likes, follows, and messages travel directly between your device and the Bluesky service that hosts your account. The only server Bayou runs is a gateway that delivers push notifications, and it's only involved if you turn notifications on. Subscriptions are managed through RevenueCat.

---

## Your Bluesky Account

### Signing in
You sign in with your existing Bluesky account through your provider's own sign-in page, using the AT Protocol's OAuth standard. Bayou never sees your password. After you sign in, your provider gives Bayou access tokens, which are stored in your device's Keychain and stay on that device.

### What you do on Bluesky
Everything you do in Bayou that involves your account, such as reading feeds, posting, liking, following, blocking, muting, messaging, and changing your Bluesky settings, is sent directly from your device to your account's host (your Personal Data Server, usually run by Bluesky Social, PBC) and to the Bluesky services your account uses. Bayou doesn't copy or keep this data on any server of ours.

**Posts are public.** Most of what you do on Bluesky, including posts, likes, reposts, follows, blocks, and your profile, is public on the AT Protocol network and visible to anyone, in any app. Direct messages aren't public, but they're handled by Bluesky's chat service. Bluesky's [Privacy Policy](https://bsky.social/about/support/privacy-policy) and [Terms of Service](https://bsky.social/about/support/tos) apply to your account and your content.

### Media and link previews
- **Images** you attach are resized on your device and uploaded to your account's host.
- **Videos** are uploaded to Bluesky's video service for processing.
- **Link previews:** when you add a link to a post, Bayou asks Bluesky's link card service to fetch the page's title, description, and image.

### Account identity
To sign you in and show profiles, Bayou looks up account identifiers (DIDs and handles) through the public AT Protocol directory (plc.directory) and the domains people use as handles.

---

## Push Notifications (Optional)

If you allow notifications, Bayou registers your device with its push gateway at push.bayouapp.space. The request goes through your Bluesky account's host, so the gateway never sees your device's IP address.

**The gateway stores:**
- Your device's push token from Apple
- Your account's identifier (DID)
- Which kinds of notifications you've turned on
- When the registration was created and last updated

**To decide what to send, the gateway also:**
- Watches the public Bluesky network for replies, mentions, quotes, follows, likes, reposts, and verifications that involve your account
- Keeps a list of the accounts you've blocked, drawn from your public block records, so it never notifies you about them
- Looks up the display name and post text a notification shows, holding them in memory for up to an hour. This text is included in the notification sent through Apple's Push Notification service and isn't written to disk.

**Logs:** the gateway keeps operational logs, which include account identifiers, the kind of each notification, and block and verification events. Push tokens are redacted in logs. Logs are used only to run and troubleshoot the gateway, and are deleted periodically.

**Turning it off:** turning a kind of notification off in Bayou's settings stops the gateway from sending it. Signing out of an account removes that device's registration from the gateway entirely, and registrations that Apple reports as no longer valid are removed automatically. You can also email us to ask for your data to be deleted.

Direct messages don't generate push notifications from Bayou.

---

## Information Stored on Your Device

- **Settings and preferences**, such as appearance, notification choices, swipe actions, and recent searches, are stored on your device.
- **Drafts** of posts are stored on your device only.
- **Sign-in tokens** and any **AI provider API keys** you enter are stored in your device's Keychain and never leave it, except when they're sent to the service they belong to.
- **Pins, sidebar order, and timed mutes** (the feeds, people, likes, searches, and conversations you pin, how you arrange your sidebar, and accounts you've muted for a set time) sync between your devices through your iCloud account, using Apple's iCloud key-value storage. Apple's [Privacy Policy](https://www.apple.com/legal/privacy/) applies.

---

## Subscriptions (RevenueCat)

Bayou's premium subscription and free trial are sold through the App Store and managed with [RevenueCat](https://www.revenuecat.com/privacy/), which keeps track of what you've purchased so Bayou knows which features to unlock. RevenueCat also gives us aggregate subscription analytics, such as how many people finish onboarding, see the subscription screen, start a trial, subscribe, renew, or cancel. To do that, Bayou tells RevenueCat when you finish onboarding, when the subscription screen appears, and which plan you choose or back out of. That's the only analytics Bayou uses. RevenueCat processes your purchase history, an anonymous identifier created for Bayou, basic device information such as model, OS version, and app version, and your IP address. Apple handles payment itself; neither Bayou nor RevenueCat receives your payment details.

Purchase records are kept as long as needed for billing, accounting, and legal compliance.

By making in-app purchases, you consent to our sharing information about your use of purchased features with Apple when you request a refund, so Apple can make an informed decision about it. This is done only as needed to process your request and in line with Apple's policies.

---

## Optional Features That Use Other Services

### GIF search (Klipy)
When you search for a GIF, your search terms, your device's region setting, and a random identifier created on your device are sent to [Klipy](https://klipy.com/support/privacy-policy), which provides the results. When you choose a GIF, Klipy is told which one you picked. The identifier isn't linked to your Bluesky account. A GIF you post is published on Bluesky as a link to the GIF.

### Automatic alt text
Bayou can suggest descriptions for images you attach, if you turn this on in Settings. You choose the provider:
- **Apple Intelligence** runs on your device, or on Apple's Private Cloud Compute, which is designed so your data isn't stored or accessible to Apple.
- **OpenAI, Google Gemini, or an OpenAI-compatible server** you configure with your own API key. The image and a short instruction are sent to that provider under your own account and their terms: [OpenAI](https://openai.com/policies/privacy-policy), [Google](https://policies.google.com/privacy). Bayou asks for local network access only to reach a server you run on your own network.

---

## Permissions

- **Notifications:** to deliver push notifications, as described above.
- **Photos (Add Only):** to save images from posts to your photo library. Bayou can't read your library. When you attach photos, you pick them with the system photo picker, which only gives Bayou the photos you choose.
- **Local Network:** only if you set up an AI provider running on your own network.

You can change any of these at any time in Settings on your device.

---

## Advertising and Sharing

Bayou has no advertising. We never sell, rent, or share your information, or track you across apps or websites.

We may disclose the limited data the push gateway holds if required by law.

---

## Children

Bayou is meant for people who meet Bluesky's minimum age requirements. We don't knowingly collect information from children.

---

## Your Rights

Depending on where you live, including under the GDPR and California law, you may have the right to access, correct, delete, or object to processing of your personal data.

- **For your Bluesky account and content,** use Bluesky's own tools or contact Bluesky, or your account's host.
- **For push notification data** held by our gateway, sign out in Bayou, or email us and we'll delete it.
- **For purchase records,** contact us and we'll work with RevenueCat on your request.
- **For iCloud, Klipy, or an AI provider,** see that provider's privacy policy.

**Legal bases (GDPR):** we process push notification data and purchase records to provide the notifications and subscription you ask for (contract), and keep logs to keep the service running and secure (legitimate interests). Optional features are used only when you turn them on (consent).

---

## Security

Sign-in tokens and API keys are kept in the Keychain, protected by your device's passcode or biometrics. Connections to Bluesky, the push gateway, and other services use encrypted HTTPS.

---

## Changes to This Policy

We'll update this page when Bayou's handling of information changes, and change the date at the top.

---

## Contact Us

Questions or requests? Email [hello@bayouapp.space](mailto:hello@bayouapp.space).
