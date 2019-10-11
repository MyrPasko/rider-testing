import tv4 from 'tv4';
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) => next => action => {
  next(action);

  const valid = tv4.validate(getState(), stateSchema);

  if (!valid) {
    console.error('[Invalid state schema detected]');
  }

}
