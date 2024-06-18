const routes = [
  {
    path: '/',
    label: 'landing',
  },
  {
    path: '/home',
    label: 'home',
    protected: true,
  },
  {
    path: '/signin',
    label: 'signin',
  },
];

const _routes = routes;

export const protectedPaths = _routes.filter((r) => r.protected).map((r) => r.path);
