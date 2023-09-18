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
import togglePictureInPictureMode from 'blendora';

await togglePictureInPictureMode();
```

### VideoPlayer Class

The `VideoPlayer` class provides a set of methods to manipulate HTML video elements, allowing you to control playback speed, current time, and seek through video content.

#### `constructor(videoElement: HTMLVideoElement)`

- `videoElement`: The HTMLVideoElement associated with the player.

**Example usage:**

```javascript
import VideoPlayer from 'blendora';

const videoElement = document.getElementById('myVideo');
const videoPlayer = new VideoPlayer(videoElement);
```

#### `getPlaybackSpeed(): number`

This method retrieves the current playback speed of the video.

**Returns:**

- `number`: The current playback speed.

**Example usage:**

```javascript
const playbackSpeed = videoPlayer.getPlaybackSpeed();
console.log(`Current Playback Speed: ${playbackSpeed}`);
```

#### `setPlaybackSpeed(speed: number): { status: 'SUCCESS' | 'ERROR', response: string }`

This method sets the playback speed of the video.

- `speed`: The desired playback speed.

**Returns:**

- `{ status: 'SUCCESS' | 'ERROR', response: string }`: An object indicating the status of the operation. If successful, it returns 'SUCCESS' and a response message. If the speed value is invalid, it returns 'ERROR' and an error message.

**Example usage:**

```javascript
const result = videoPlayer.setPlaybackSpeed(2.0);
if (result.status === 'SUCCESS') {
  console.log(result.response);
} else {
  console.error(result.response);
}
```

#### `getCurrentTime(): number`

This method retrieves the current playback time of the video in seconds.

**Returns:**

- `number`: The current playback time in seconds.

**Example usage:**

```javascript
const currentTime = videoPlayer.getCurrentTime();
console.log(`Current Time: ${currentTime} seconds`);
```

#### `setCurrentTime(seconds: number): { status: 'SUCCESS' | 'ERROR', response: string }`

This method sets the current playback time of the video to the specified time in seconds.

- `seconds`: The desired playback time in seconds.

**Returns:**

- `{ status: 'SUCCESS' | 'ERROR', response: string }`: An object indicating the status of the operation. If successful, it returns 'SUCCESS' and a response message. If the time value is invalid, it returns 'ERROR' and an error message.

**Example usage:**

```javascript
const result = videoPlayer.setCurrentTime(30);
if (result.status === 'SUCCESS') {
  console.log(result.response);
} else {
  console.error(result.response);
}
```

#### `getDuration(): number`

This method retrieves the total duration of the video in seconds.

**Returns:**

- `number`: The total duration of the video in seconds.

**Example usage:**

```javascript
const duration = videoPlayer.getDuration();
console.log(`Video Duration: ${duration} seconds`);
```

#### `seekCurrentTime(direction: 'forward' | 'backward', seconds: number): { status: 'SUCCESS' | 'ERROR', response: string }`

This method seeks the current playback time of the video in the specified direction (forward or backward) by the specified number of seconds.

- `direction`: The direction to seek, either 'forward' or 'backward'.
- `seconds`: The number of seconds to seek.

**Returns:**

- `{ status: 'SUCCESS' | 'ERROR', response: string }`: An object indicating the status of the operation. If successful, it returns 'SUCCESS' and a response message. If the direction or time value is invalid, it returns 'ERROR' and an error message.

**Example usage:**

```javascript
const result = videoPlayer.seekCurrentTime('forward', 10);
if (result.status === 'SUCCESS') {
  console.log(result.response);
} else {
  console.error(result.response);
}

### YouTube Player (YTPlayer)

Blendora offers a YTPlayer class that extends the VideoPlayer class and is specialized for YouTube video manipulation.

#### `YTPlayer(videoElement: HTMLVideoElement, data: YTPlayerData)`

This class extends the VideoPlayer and allows you to work with YouTube-specific video player features.

- `videoElement`: The HTMLVideoElement associated with the player.
- `data`: An object containing YouTube-specific data, such as `videoID`.

Example usage:

```javascript
import YTPlayer from 'blendora';

const videoElement = document.getElementById('myVideo');
const data = {
  videoID: 'youtube-video-id',
};

const youtubePlayer = new YTPlayer(videoElement, data);

console.log(`Video ID: ${youtubePlayer.videoID}`);
```

## License

Blendora is released under the [MIT License](https://raw.githubusercontent.com/your-repo/main/LICENSE).

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## Authors

- DV <business.darhkvoyd@gmail.com>
