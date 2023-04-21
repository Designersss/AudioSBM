import {makeAutoObservable} from "mobx";

export default class MusicStore {
    constructor() {
        this._music = []
        makeAutoObservable(this)
    }
    setMusic (music) {
        this._music = music
    }
    get music () {
        return this._music
    }
}