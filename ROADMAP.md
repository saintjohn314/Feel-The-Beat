# Roadmap: from web app to App Store & Google Play

## ✅ Phase 1: Web app (done)
- Listen, Song and Metronome modes
- Bass-focused beat detection, live BPM
- Adjustable buzz strength and sensitivity; gentle visual pulse
- Optional screen flash behind a photosensitivity warning
- Installable (Add to Home Screen) and works offline
- Privacy policy, logo and store copy

## Phase 2: Native apps (next)
Wrap the existing app with **[Capacitor](https://capacitorjs.com)** so the same code becomes a real iOS and Android app.

| Step | What | Why |
|---|---|---|
| 1 | Add Capacitor and generate the `ios/` and `android/` projects | One codebase, two native apps |
| 2 | Use the **Capacitor Haptics** plugin (Core Haptics on iPhone, Vibrator on Android) | **Full-strength vibration on iPhone**, which websites can't do |
| 3 | Add microphone permission text (`NSMicrophoneUsageDescription`: "Feel The Beat uses the microphone to detect the beat of music around you. Audio is never recorded or stored.") | Required by Apple |
| 4 | Let it keep running with the screen off (background audio) | Feel a whole concert without keeping the screen on |
| 5 | Test on real phones (TestFlight / Play internal testing) | Tune buzz strength on real hardware |

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
