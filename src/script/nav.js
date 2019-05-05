const userId = 0
const api = 'http://142.1.5.223:1645'
let state = { }

export function getState() {
  return state
}

export class NavState {
  constructor() {
    this.state = 'Normal'
    this.color = 'bg-lectio'
    this.user = 'User'
    this.userId = userId
    this.api = api

    state = this
  }
}