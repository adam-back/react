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
  2. Impure
    a. May have side-effects
    b. May mutate arguments
III. More on Reducers
  1. Takes two arguments: state and action
    i. If state is undefined, reducer should return the initial state of the application
  2. If an unknown action is dispatched, return current state
IV. Stores
  1. Binds the three principles of Redux by holding current state, dispatching actions, and receives reducer.
  2. Three methods:
    a. getState
    b. dispatch (actions)
    c. subscribe
      i. Callback triggers any time action has been dispatched
      ii. Used to update UI
