import { testApi } from '@/services/playlist';
import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import { useEffect } from 'react';

const getBanner = async () => {
  await testApi().then((res) => {
    console.log(res);
  });
};
const AccessPage: React.FC = () => {
  useEffect(() => {
    getBanner();
  }, []);
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
