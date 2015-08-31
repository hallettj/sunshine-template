/* @flow */

import { Record } from 'immutable'
import { field } from 'safety-lens/immutable'

import type { Lens_ } from 'safety-lens'

export type AppState = Record<{
  greeting: string
}>

var AppStateRecord = Record({
  greeting: 'Hello, Sunshine!'
})

var initialState: AppState = new AppStateRecord()

var greetingLens: Lens_<AppState,string> = field('greeting')

export {
  initialState,
  greetingLens,
}
