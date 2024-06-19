# Note App

Make sure you have android studio and xcode is setup on you pc.

## Step 1: Connect your device.
Please connect the devices on which you want to run the app. Make sure you enable usb debugging in Android phone.

Run the following command to see if your android device is connected:
```bash
adb devices
```

## Step 2: Start the Metro Server
To start Metro, run the following command from the _root_ of your React Native project:
```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start the application
Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android
```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS
```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```