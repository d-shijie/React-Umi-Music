import { Drawer, QRCode } from 'antd';
import React, { useState } from 'react';

interface Props {
  qrUrl: string;
}
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
  return (
    <Drawer
      placement="left"
      closable={false}
      open={open}
      onClose={onClose}
      width={358}
      key="left"
    >
      <section className="flex justify-center">
        <QRCode size={200} value={props.qrUrl} />
      </section>
    </Drawer>
  );
});
export default UserDrawer;
