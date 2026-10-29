# Feel The Beat: iPhone and Android apps

The native apps are the same web app (`../index.html`) inside a [Capacitor](https://capacitorjs.com) shell. The big difference is vibration:

| | Website | Native app |
|---|---|---|
| **iPhone** | No vibration motor. Light taps on iOS 18–26.4 only. | ✅ **Full haptics** (Taptic Engine) on every beat |
| **Android** | ✅ Full vibration | ✅ Full vibration |

The app calls the [Haptics plugin](https://capacitorjs.com/docs/apis/haptics) straight from `index.html` (heavy taps on iPhone, timed buzzes on Android). It also uses [Keep Awake](https://github.com/capacitor-community/keep-awake) to keep the screen on while it's running.

## Get the Android app without installing anything

Every push builds the apps on GitHub ([Native apps workflow](../.github/workflows/native-apps.yml)).

1. Open the repo's **Actions** tab → **Native apps** → the latest green run.
2. Download **feel-the-beat-android** (a zip with `app-debug.apk`).
3. Copy the APK to an Android phone, open it, and allow installing from this source.

This is a test build. Google Play needs a signed release build (below).

## Build it yourself

You need **Node.js 22+**, plus:
- **iPhone:** a Mac with **Xcode 26** or newer
- **Android:** **Android Studio** (2025.2.1 or newer), which brings Java 21 and the Android SDK

```bash
cd native
npm install
npm run ios       # copies the web app in, then opens Xcode
npm run android   # copies the web app in, then opens Android Studio
```

- **iPhone:** in Xcode, pick your Apple ID under *Signing & Capabilities* (team), plug in your iPhone, and press ▶. Vibration only works on a real iPhone, not the Simulator.
- **Android:** in Android Studio, plug in your phone (USB debugging on) and press ▶.

After you change `index.html`, run `npm run sync` (or `npm run ios` / `npm run android` again) to copy it into both apps.

## What's set up

| | |
|---|---|
| App ID | `com.johnwood.feelthebeat` (change it in `capacitor.config.json` *before* the first store upload; it can't change afterwards) |
| Name | Feel The Beat |
| Microphone | iPhone: `NSMicrophoneUsageDescription` in `ios/App/App/Info.plist`. Android: `RECORD_AUDIO` in `android/app/src/main/AndroidManifest.xml` |
| Vibration | Haptics plugin; Android `VIBRATE` permission |
| Devices | iPhone only (iPads have no vibration motor), portrait |
| Look | Black background, white status bar text, brand icon and splash screen (sources in `assets/`) |

To change the icon or splash screen, replace the PNGs in `assets/` and run `npx @capacitor/assets generate`.

## Publishing

- **App Store:** join the Apple Developer Program ($99/year). In Xcode, choose *Product → Archive*, then upload to App Store Connect and test with TestFlight.
- **Google Play:** create a Play Console account ($25 once). In Android Studio, choose *Build → Generate Signed App Bundle*, then upload the `.aab`. Keep the signing key safe: you need it for every update.

Store text is in [`../STORE_LISTING.md`](../STORE_LISTING.md) and the privacy policy in [`../PRIVACY.md`](../PRIVACY.md).
