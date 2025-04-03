import Mock from 'mockjs';
import { resultSuccess } from '../_util';
import { defineMock } from '@alova/mock';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);
const user = {
  username: 'admin',
};

const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: 'Admin',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  user,
  permissions: [
    {
      label: 'Dashboard',
      value: 'dashboard_console',
    },
    {
      label: 'Monitor',
      value: 'dashboard_monitor',
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
