import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './users'
import fetchMock from 'fetch-mock';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
import cookie from 'react-cookie';



describe('user actions', () => {

  it('sends user stat events', () => {

  	fetchMock.restore();
    fetchMock.post('*', {success: false, message: 'errmsg123'});


    const store = mockStore({ todos: [] })

    expect(cookie.load('uuid')).toEqual(undefined);
    return store.dispatch(actions.recordEvent("testEventName")).then(() => {
    	let res = fetchMock.lastOptions().body.get("event");
    	expect(res).toEqual("testEventName");

    	//cookie should be set now
    	expect(cookie.load('uuid')).not.toEqual(undefined);
    })
  })
  it("sends another event with same uuid cookie", () => {

  	fetchMock.restore();
    fetchMock.post('*', {success: false, message: 'errmsg123'});

  	const store = mockStore({ todos: [] })

  	expect(cookie.load('uuid')).not.toEqual(undefined);

  	const context = {a: {b: "c"}};
    return store.dispatch(actions.recordEvent("testEventName",context)).then(() => {
    	expect(fetchMock.lastOptions().body.get("event")).toEqual("testEventName");
    	//and context should be json now
    	expect(fetchMock.lastOptions().body.get("context")).toEqual(JSON.stringify(context));

    })
  })
})