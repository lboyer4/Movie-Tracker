import { fetchUsers } from './fetchUsers';
// import { mockUser } from '../../utils/mockData';

describe('fetchUsers', () => {

  let mockUrl;
  let mockResponse;

  beforeEach(() => {
    mockUrl = 'http://localhost:3000/api/users';

    mockResponse = {
    headers: Headers,
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "cors",
    url: mockUrl
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  });

  it('should return a response if the status is ok', async () => {
    const result = await fetchUsers()
    expect(result).toEqual(mockResponse)
  });

  it.skip('should return an error if status is not ok', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			})
		})
		const result = await fetchUsers()
    expect(result).rejects.toThrow('error')
	});
})