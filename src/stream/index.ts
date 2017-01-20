
export interface Stream<T> {
  set (val: T): void
  get (): T | undefined
  subscribe (subscriber: Subscription<T>): void
  unsubscribe (subscriber: Subscription<T>): boolean
  removeSubscribers (): void
  dispose (): void
}

export interface Subscription<T> {
  (value: T): void
}

export function newStream<T>(initialValue: T | undefined): Stream<T> {
  let _subscribers: Subscription<T>[] = []
  let _state = initialValue

  function notify(value) {
    for(let i = 0, subs; subs = _subscribers[i]; i++) {
      subs(value)
    }
  }
  return {
    set (value) {
      _state = value
      notify(value)
    },
    get () {
      return _state
    },
    removeSubscribers () {
      _subscribers = []
    },
    unsubscribe (subscriber) {
      let index = _subscribers.indexOf(subscriber)
      if (index != -1) {
        _subscribers.splice(index, 1)
        return true
      } else {
        return false
      }
    },
    subscribe (subscriber) {
      _subscribers.push(subscriber)
    },
    dispose () {
      _subscribers = null
      _state = null
      for (let prop in this) {
        this[prop] = null
      }
    },
  }
}