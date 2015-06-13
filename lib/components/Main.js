/* @flow */

import * as Sunshine    from 'sunshine/react'
import React            from 'react'
import { greetingLens } from '../state'
import * as Event       from '../event'

import type { AppState } from '../state'

type Props = {
  app: Sunshine.App<AppState>
}

type State = {
  greeting: string
}

export default class Main extends Sunshine.Component<{},Props,State> {
  getSubscribers(subscribe: Sunshine.Subscribe<AppState>): State {
    return {
      greeting: subscribe(greetingLens)
    }
  }

  render(): React.Element {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <input
          type="text"
          value={this.state.greeting}
          onChange={this.changeGreeting.bind(this)}
          ref="input"
          />
      </div>
    )
  }

  changeGreeting() {
    var input = React.findDOMNode(this.refs.input)
    this.emit(new Event.GreetingChange(input.value))
  }
}