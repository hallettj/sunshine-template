/* @flow */

import { PathLens } from 'nanoscope'

import type { Lens } from 'nanoscope'

export type AppState = {
  greeting: string,
}

export var initialState: AppState = {
  greeting: 'Hello, Sunshine!',
}

export var greetingLens: Lens<AppState,string> = new PathLens('greeting')
