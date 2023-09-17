# Blendora

Blendora is a powerful TypeScript library designed to streamline the integration of custom components into widely-used web applications such as YouTube, Facebook, Instagram, and more. It excels in harmoniously blending your web components with the existing design, simplifying DOM manipulation, and elevating browser API interaction. This empowers developers to concentrate on scripting while achieving a cohesive and polished user experience. Blendora is the ideal tool for browser extension creators and web developers seeking to enhance the functionality and aesthetics of their web applications.

## Installation

To use Blendora in your project, simply install it via npm:

```shell
npm install blendora
```

## Features

### YouTube DOM Manipulation

Blendora provides a set of functions for manipulating the DOM of YouTube web pages.

#### `createPanelHeader(customHeader: CustomPanelHeader): HTMLDivElement`

This function creates a custom header for YouTube player menus.

- `customHeader`: An object containing customization options for the header. The object should have properties like `panelId`, `panelClass`, `btnLabel`, `btnOnClick`, `panelTitle`, `panelOptions`, and `options`.

Example usage:

```javascript
import { createPanelHeader } from 'blendora';

const customHeader = {
  panelId: 'custom-panel',
  panelClass: 'custom-panel-class',
  btnLabel: 'Back',
  btnOnClick: (event) => { /* Custom event handler */ },
  panelTitle: 'Custom Panel Title',
  panelOptions: {
    optionsTitle: 'Options',
    optionsOnClick: (event) => { /* Custom event handler */ }
  },
  options: (panelHeaderElement) => { /* Customize options container */ }
};

const panelHeader = createPanelHeader(customHeader);
```

#### `createMenuItem(customItem: CustomMenuItem): HTMLDivElement`

This function creates a custom menu item for YouTube player menus.

- `customItem`: An object containing customization options for the menu item. The object should have properties like `itemId`, `itemClass`, `hasAriaPopUp`, `hasAriaChecked`, `itemRole`, `itemTabIndex`, `itemIconPath`, `itemLabel`, `itemContent`, `itemOnClick`, and `options`.

Example usage:

```javascript
import { createMenuItem } from 'blendora';

const customItem = {
  itemId: 'custom-item',
  itemClass: 'custom-item-class',
  hasAriaPopUp: 'menu',
  itemRole: 'menuitem',
  itemTabIndex: '0',
  itemIconPath: 'M12 3L17 17H7L12 3Z',
  itemLabel: 'Custom Menu Item',
  itemOnClick: (event) => { /* Custom event handler */ },
  options: (menuItemElement) => { /* Customize options container */ }
};

const menuItem = createMenuItem(customItem);
```

#### `createMetadataSection(customMetadataSection: CustomMetadataSection): HTMLDivElement`

This function creates a custom metadata section in the metadata action bar on YouTube.

- `customMetadataSection`: An object containing customization options for the metadata section. The object should have properties like `sectionId`, `sectionClass`, `headerIcon`, `headerTitle`, `items`, and `options`.

Example usage:

```javascript
import { createMetadataSection } from 'blendora';

const customMetadataSection = {
  sectionId: 'custom-metadata-section',
  sectionClass: 'custom-metadata-section-class',
  headerIcon: 'path/to/icon.svg',
  headerTitle: 'Custom Metadata Section',
  items: [ /* Array of section items */ ],
  options: (metadataSectionElement) => { /* Customize section wrapper */ }
};

const customMetadataSectionElement = createMetadataSection(customMetadataSection);
```

#### `createSectionItem(customSectionItem: CustomSectionItem): HTMLDivElement`

This function creates a custom section item for use within other Blendora functions.

- `customSectionItem`: An object containing customization options for the section item. The object should have properties like `id`, `className`, `children`, and `options`.

Example usage:

```javascript
import { createSectionItem } from 'blendora';

const customSectionItem = {
  id: 'custom-section-item',
  className: 'custom-section-item-class',
  children: [ /* Array of child elements */ ],
  options: (sectionItemElement) => { /* Customize section item */ }
};

const sectionItemElement = createSectionItem(customSectionItem);
```

### Picture-in-Picture Mode

Blendora provides a function for toggling the Picture-in-Picture mode for the primary video element.

#### `togglePictureInPictureMode(): Promise<void>`

This function toggles the Picture-in-Picture mode for the primary video element. If the primary video is already in Picture-in-Picture mode, it will exit the mode. If the primary video is not in Picture-in-Picture mode, it will request to enter the mode.

Example usage:

```javascript
import { togglePictureInPictureMode } from 'blendora';

await togglePictureInPictureMode();
```

### HTMLVideoElement Extension

Blendora extends the HTMLVideoElement prototype with additional methods for enhanced video control.

#### `getPlaybackSpeed(): number`

This method retrieves the current playback speed of the HTMLVideoElement.

Example usage:

```javascript
const videoElement = document.getElementById('myVideo');
const playbackSpeed = videoElement.getPlaybackSpeed();
console.log(`Playback speed: ${playbackSpeed}`);
```

#### `setPlaybackSpeed(speed: number): { status: 'SUCCESS' | 'ERROR', response: string }`

This method sets the playback speed of the HTMLVideoElement.

- `speed`: The desired playback speed value.

Example usage:

```javascript
const videoElement = document.getElementById('myVideo');
const result = videoElement.setPlaybackSpeed(1.5);
console.log(result);
```

#### `getCurrentTime(): number`

This method retrieves the current playback time of the HTMLVideoElement.

Example usage:

```javascript
const videoElement = document.getElementById('myVideo');
const currentTime = videoElement.getCurrentTime();
console.log(`Current time: ${currentTime} seconds`);
```

#### `setCurrentTime(seconds: number): { status: 'SUCCESS' | 'ERROR', response: string }`

This method sets the current playback time of the HTMLVideoElement.

- `seconds`: The desired playback time in seconds.

Example usage:

```javascript
const videoElement = document.getElementById('myVideo');
videoElement.setCurrentTime(60);
```

#### `getDuration(): number`

This method retrieves the duration of the HTML video.

Example usage:

```javascript
const videoElement = document.getElementById('myVideo');
const duration = videoElement.getDuration();
console.log(`Video duration: ${duration} seconds`);
```

#### `seekCurrentTime(direction: 'forward' | 'backward', seconds: number): { status: 'SUCCESS' | 'ERROR', response: string }`

This method seeks the current playback time of the HTMLVideoElement by a specified amount.

- `direction`: The direction to seek, either `'forward'` or `'backward'`.
- `seconds`: The amount of time to seek in seconds.

Example usage:

```javascript
const videoElement = document.getElementById('myVideo');
videoElement.seekCurrentTime('forward', 10);
```

## License

Blendora is released under the [MIT License](https://raw.githubusercontent.com/your-repo/main/LICENSE).

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## Authors

- DV <business.darhkvoyd@gmail.com>