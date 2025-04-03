// 这里按需导入 mock 文件，只有在这里导入并导出，才会执行 mock 拦截
// 跟根据实际开发情况配置
import UserMock from '../../../../mock/user';
import MenusMock from '../../../../mock/system/menus';
import ConsoleMock from '../../../../mock/dashboard/console';

export default [UserMock, MenusMock, ConsoleMock];
