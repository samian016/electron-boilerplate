import React from 'react';
import { Provider } from 'react-redux';
import store from '@renderer/reduxRoot/store';
import { AuthProvider } from '@renderer/Context/AuthProvider';
import { GlobalProvider } from '@renderer/Context/GlobalProvider';
import { ApiProvider } from '../api/ApiProvider';

export default function Context({ children }) {
  return (
    <ApiProvider>
      <Provider store={store}>
        <GlobalProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </GlobalProvider>
      </Provider>
    </ApiProvider>
  );
}