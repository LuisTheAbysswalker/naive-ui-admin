import Mock from 'mockjs';
import { resultSuccess } from '../_util';
import { defineMock } from '@alova/mock';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);
const user = {
  userId: 'xxx',
  username: 'admin',
};

const adminInfo = {
  username: 'admin',
  avatar: Random.image(),
  token,
  user,
  permissions: [
    {
      label: 'Dashboard',
      value: 'dashboard_console',
    },
    {
      label: 'Workplace',
      value: 'dashboard_workplace',
    },
  ],
};

export default defineMock({
  '[POST]/login': () => resultSuccess({ token, user }),
  '/admin_info': () => resultSuccess(adminInfo),
});
