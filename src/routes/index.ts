import Root from '../views/Root';
import Index from '../views/Index';
import Counter from '../views/Counter';
import NotFound from '../views/NotFound';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index,
      },
      {
        path: '/counter',
        exact: true,
        component: Counter,
      },
      {
        path: '*',
        component: NotFound,
      }
    ],
  },
];
