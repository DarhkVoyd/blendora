import VideoPlayer from '../components/VideoPlayer'

interface YTPlayerData {
  videoID: string
}

export default class YTPlayer extends VideoPlayer {
  private readonly _videoID: string

  constructor (videoElement: HTMLVideoElement, data: YTPlayerData) {
    super(videoElement)
    this._videoID = data.videoID
  }

  get videoID (): string {
    return this._videoID
  }
}
