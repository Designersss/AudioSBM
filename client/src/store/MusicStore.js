import {makeAutoObservable} from "mobx";

export default class MusicStore {
    constructor() {
        this._music = []
        this._musicGenres = []
        makeAutoObservable(this)
    }
    setMusic (music) {
        this._music = music
    }

    setMusicGenres (musicGenres) {
        this._musicGenres = musicGenres
    }

    get music () {
        return this._music
    }

    get musicGenres () {
        return this._musicGenres
    }

}