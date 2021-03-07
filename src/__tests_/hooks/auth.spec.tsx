import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: 'teste',
        name: 'teste',
        email: 'teste@teste.com',
      },
      token: 'token123',
    };

    apiMock.onPost('sessions').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'teste@teste.com',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith('@GoBarber:token', apiResponse.token);
    expect(setItemSpy).toHaveBeenCalledWith('@GoBarber:user', JSON.stringify(apiResponse.user));

    expect(result.current.user.email).toEqual('teste@teste.com');
  });

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@GoBarber:token': return 'token123';
        case '@GoBarber:user': return JSON.stringify({
          id: 'teste',
          name: 'teste',
          email: 'teste@teste.com',
        });
        default: return null;
      }
    });
  });

  const { result } = renderHook(() => useAuth(), {
    wrapper: AuthProvider,
  });

  expect(result.current.user.email).toEqual('teste@teste.com');
});
