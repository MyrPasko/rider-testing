import { saveComment } from "../index";
import { SAVE_COMMENT } from "../types";

describe('saveComment', () => {
  it('should has the correct type', function () {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('should has the correct payload', function () {
    const action = saveComment('new comment');

    expect(action.payload).toEqual('new comment');
  });
})
