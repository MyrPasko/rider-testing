export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its 'Pyload' property
  // If yes, than wait for it's resolve
  // If no, then send the action on to the mext middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the promise to resolve
  // (get its data!!) and then crate a new action
  // with that data and dispatch it
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };

    dispatch(newAction);
  })
}
