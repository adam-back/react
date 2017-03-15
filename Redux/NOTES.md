Redux on Egghead.io

I. Principals of Redux
  1. State tree
    a Object which Holds all state in application
    b. Is redundant
  2. Actions
    a. Plain JavaScript object describing how to change state
    b. Minimally, must have type key, but can have more
    c. To change state, dispatch action
  3. Reducer
    a. State mutations must be described by pure functions
    b. With knowledge of previous state, receives an action, returns the next state for the whole application
II. Pure vs. Impure Functions
  1. Pure
    a. Return value solely depends on inputs
      i. No side-effects, like API or database calls
      ii. Call fn with same set of arguments, get the same return
    b. Does not mutate arguments
    c. Ways to avoid mutation
      i. Objects: Object.assign, spread (...)
      ii. Arrays: concat, slice, spread, map
  2. Impure
    a. May have side-effects
    b. May mutate arguments
III. More on Reducers
  1. Takes two arguments: state and action
    a. If state is undefined, reducer should return the initial state of the application
  2. If an unknown action is dispatched, return current state
  3. Composition
    a. Different reducers to update different parts of the state tree
    b. Still one single, top-level reducer
    c. Redux provides fn called combineReducers to accomplish this
      i. Takes object as argument with keys for state mapped to reducers:
      { todos: todos, visibilityFilter: visibilityFilter }, where todos key is the name of the state and todos value is name of the reducer
IV. Stores
  1. Created by Redux.createStore fn
  2. Binds the three principles of Redux by holding current state, dispatching actions, and receives reducer.
  3. Three methods:
    a. getState
    b. dispatch (actions)
    c. subscribe
      i. Callback triggers any time action has been dispatched
      ii. Used to update UI
V. Testing Resources
  1. deepFreeze to dedect mutations
  2. expect by Michael Jackson
VI. Refactor
  1. Presentational components
    a. For example, a component which is only concerned with rendering, how it looks. onClick will be passed in by a prop.
  2. Container components
    a. Specify functionality, like callbacks for clicks.

Next, watch video 27.
