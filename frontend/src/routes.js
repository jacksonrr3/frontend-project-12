const apiPath = '/api/v1';

export default {
  rootPage: () => '/',
  loginPage: () => '/login',
  apiLoginPath: () => [apiPath, 'login'].join('/'),
  apiUsersPath: () => [apiPath, 'data'].join('/'),
};
