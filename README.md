# ultimate-guitar-extension

## Description

This extension does useful stuff, with a few caveats:

1. As of 1/7/2024, only Firefox supports modifying browser requests from extensions, so this only works in Firefox. *[Source](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData#browser_compatibility)*
2. This isn't gonna be submitted to the Firefox Addon store, so you need to install it as a developer extension. **That means you might need to re-install the extension when Firefox restarts.**

## Setup Instructions

1. Clone this repo to your machine
2. Open Firefox and navigate to the URL **`about:debugging#/runtime/this-firefox`**
3. Click on the button that says "**Load Temporary Add-on...**"
4. When the file browser opens, navigate to the recently-cloned repo and select the **`manifest.json`** file
  > The manifest.json file will automatically load the other dependencies for the extension
5. Browse ultimate-guitar as usual, and you should see the changes!