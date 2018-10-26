import { observable, action } from 'mobx'

class RootStore {
  @observable language
  constructor() {
    this.language = localStorage.getItem('language') || 'en'
  }

  @action
  setLocale = lang => {
    this.language = lang
    localStorage.setItem('language', lang)
  }
}

export default new RootStore()
