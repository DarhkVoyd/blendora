// The minimum playback rate allowed for videos
export const MIN_PLAYBACK_RATE = 0.0625

// The maximum playback rate allowed for videos
export const MAX_PLAYBACK_RATE = 16.0

declare global {
  interface HTMLVideoElement {
    getPlaybackSpeed: () => number
    setPlaybackSpeed: (speed: number) => { status: 'SUCCESS' | 'ERROR', response: string }
    getCurrentTime: () => number
    setCurrentTime: (seconds: number) => { status: 'SUCCESS' | 'ERROR', response: string }
    getDuration: () => number
    seekCurrentTime: (direction: 'forward' | 'backward', seconds: number) => { status: 'SUCCESS' | 'ERROR', response: string }
  }
}

const extendHTMLVideoElement = (): void => {
  HTMLVideoElement.prototype.getPlaybackSpeed = function (): number {
    return this.playbackRate
  }

  HTMLVideoElement.prototype.setPlaybackSpeed = function (speed: number): { status: 'SUCCESS' | 'ERROR', response: string } {
    if (speed >= MIN_PLAYBACK_RATE && speed <= MAX_PLAYBACK_RATE) {
      this.playbackRate = speed
      return { status: 'SUCCESS', response: `Current Speed: ${speed}` }
    } else {
      return { status: 'ERROR', response: 'Invalid Speed' }
    }
  }

  HTMLVideoElement.prototype.getCurrentTime = function (): number {
    return this.currentTime
  }

  HTMLVideoElement.prototype.setCurrentTime = function (seconds: number): { status: 'SUCCESS' | 'ERROR', response: string } {
    this.currentTime = seconds
    return { status: 'SUCCESS', response: `Current Time: ${seconds} seconds` }
  }

  HTMLVideoElement.prototype.getDuration = function (): number {
    return this.duration
  }

  HTMLVideoElement.prototype.seekCurrentTime = function (direction: 'forward' | 'backward', seconds: number): { status: 'SUCCESS' | 'ERROR', response: string } {
    if (direction === 'forward') {
      this.currentTime += seconds
      return {
        status: 'SUCCESS',
        response: `Current Time: ${this.currentTime} seconds`
      }
    } else if (direction === 'backward') {
      this.currentTime -= seconds
      return {
        status: 'SUCCESS',
        response: `Current Time: ${this.currentTime} seconds`
      }
    } else {
      return {
        status: 'ERROR',
        response: 'Invalid Direction'
      }
    }
  }
}

export default extendHTMLVideoElement
