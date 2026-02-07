export default class SessionManager {
  private _isPlaying = false;
  private _playingBlocked = true;

  get isPlaying() {
    return this._isPlaying;
  }

  set isPlaying(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  get playingBlocked() {
    return this._playingBlocked;
  }

  set playingBlocked(playingBlocked: boolean) {
    this._playingBlocked = playingBlocked;
  }
}
