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