# Roadmap: from web app to App Store & Google Play

## ✅ Phase 1: Web app (done)
- Listen, Song and Metronome modes
- Bass-focused beat detection, live BPM
- Adjustable buzz strength and sensitivity; gentle visual pulse
- Optional screen flash behind a photosensitivity warning
- Installable (Add to Home Screen) and works offline
- Privacy policy, logo and store copy

## ✅ Phase 1.5: Better feel (done)
- Buzz length follows how hard each beat hits
- **Bass** feel: the buzz follows the bass line
- Metronome beats per bar, beat dots and tap tempo
- Help sheet with a vibration test and tips; opens on first launch
- Settings are remembered
- Hosted on Netlify

## Phase 2: Native apps (in progress)
The existing app is wrapped with **[Capacitor](https://capacitorjs.com)** so the same code is a real iOS and Android app. See [native/README.md](native/README.md).

| Step | What | Status |
|---|---|---|
| 1 | Add Capacitor and generate the `ios/` and `android/` projects | ✅ Done (`native/`) |
| 2 | Use the **Capacitor Haptics** plugin (Taptic Engine on iPhone, vibration motor on Android) for **full vibration on iPhone**, which websites can't do | ✅ Done |
| 3 | Microphone permission text (`NSMicrophoneUsageDescription`: "Feel The Beat uses the microphone to feel the beat of music around you. Audio is never recorded or stored.") | ✅ Done |
| 4 | Keep the screen on while it's running | ✅ Done |
| 5 | Build both apps on every push (GitHub Actions), with a downloadable Android test APK | ✅ Done |
| 6 | Test on real phones (TestFlight / Play internal testing) and tune buzz strength | Next |
| 7 | Keep running with the screen off (background audio) | Later |
| 8 | Richer iPhone haptics (Core Haptics patterns with intensity, for a longer buzz than a tap) | Later |

**What you need**
- **Apple Developer Program:** $99/year (needed to publish on the App Store). Building for iPhone needs a **Mac with Xcode**, or a cloud Mac build service.
- **Google Play Console:** $25 one-time fee.
- Store assets: app icon (`brand/app-icon.png`, 1024×1024), screenshots, privacy policy URL, description (`STORE_LISTING.md`).

## Phase 3: Features to consider
- **Haptic patterns:** different feels for kick, snare and bass
- **Apple Watch / Wear OS:** feel the beat on your wrist
- **Camera flash mode:** use the phone's flashlight as a beat light (with safety limits)
- **Group mode:** sync the beat to several phones at a party or class
- **Streaming service integration**
- **Onboarding for new users**, in plain language and with ASL-friendly visuals
- **Community testing** with Deaf and hard-of-hearing users and organizations

## Open questions
- Free, one-time purchase, or free with a paid "Pro"?
- Partner with Deaf organizations or schools for feedback and launch?
