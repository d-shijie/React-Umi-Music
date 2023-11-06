import { useModel } from '@/.umi/plugin-model';
import { Drawer, QRCode } from 'antd';
import React, { useState } from 'react';

interface Props {
  qrUrl: string;
  status: number;
}
const LoginContent = (props: Props) => {
  return (
    <section className="flex justify-center">
      <QRCode
        status={
          props.status === 800 || props.status === 802 ? 'expired' : 'active'
        }
        size={200}
        value={props.qrUrl}
      />
    </section>
  );
};

const UserContent = () => {
  return <div>user content</div>;
};
const UserDrawer = React.forwardRef((props: Props, ref) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const onOpen = (): void => {
    setOpen(true);
  };
  React.useImperativeHandle(ref, () => ({
    onOpen,
  }));
  const { loginStatus } = useModel('user');
  return (
    <Drawer
      placement="left"
      closable={false}
      open={open}
      onClose={onClose}
      width={358}
      key="left"
    >
      {loginStatus ? (
        <UserContent />
      ) : (
        <LoginContent status={props.status} qrUrl={props.qrUrl} />
      )}
    </Drawer>
  );
});

export default UserDrawer;
