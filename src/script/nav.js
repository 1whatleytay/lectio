let state = { }

export function getState() {
  return state
}

export class NavState {
  constructor() {
    this.state = 'Normal'
    this.color = 'bg-lectio'
    this.user = 'User'

    state = this
  }
}