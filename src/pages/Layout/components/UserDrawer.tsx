import { useModel } from '@/.umi/plugin-model';
import Button from '@/components/Button/Button';
import { getUserInfoApi } from '@/services/user';
import { RightOutlined } from '@ant-design/icons';
import { Icon } from '@umijs/max';
import { Drawer, List, QRCode } from 'antd';
import React, { useEffect, useState } from 'react';
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

interface ListItem {
  label: string;
  suffix?: any;
  prefix?: any;
}
const UserContent = (props: { userInfo: any }) => {
  const list1: ListItem[] = [
    {
      label: '消息中心',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:message"
        />
      ),
    },
    {
      label: '云贝中心',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:clound_bei"
        />
      ),
    },
    {
      label: '创作者中心',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:creator"
        />
      ),
    },
  ];
  const list2: ListItem[] = [
    {
      label: '趣测',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '云村有票',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '多多西西口袋',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '商城',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: 'Beat专区',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '音乐收藏家',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
  ];
  const list3: ListItem[] = [
    {
      label: '设置',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '深色模式',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '定时关闭',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '个性装扮',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '边听边存',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '在线听歌免流量',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '音乐黑名单',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '青少年模式',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
    {
      label: '音乐闹钟',
      prefix: (
        <Icon
          width="16px"
          height="16px"
          className="mr-[4px]"
          icon="local:setting"
        />
      ),
    },
  ];
  const list4: ListItem[] = [
    {
      label: '我的客服',
    },
    {
      label: '我的订单',
    },
    {
      label: '优惠卷',
    },
    {
      label: '分享网易云音乐',
    },
    {
      label: '个人信息收集与使用清单',
    },
    {
      label: '个人信息第三方共享清单',
    },
    {
      label: '个人信息与隐私保护',
    },
    {
      label: '关于',
    },
  ];
  return (
    <div className="p-[12px]">
      <div className="flex items-center">
        <img
          className="rounded-full w-[32px] mr-[8px]"
          src={props.userInfo.profile.avatarUrl}
          alt=""
        />
        <div className="text-[14px] font-bold">
          {props.userInfo.profile.nickname}
        </div>
        <RightOutlined />
      </div>
      <div className="h-[116px] p-[12px] w-full bg-gradient-to-r from-[#393737] to-[#5e5150] mt-[12px] rounded-xl">
        <div className="text-[#e0cdc9] font-medium flex justify-between items-center">
          <span className="text-[16px] tracking-wide"> 黑胶VIP·肆</span>
          <span>
            <Button>会员中心</Button>
          </span>
        </div>
        <div className="text-[#8c7f7c] flex items-center text-[12px] mt-[12px]">
          有 79 成长值待领取 <RightOutlined />{' '}
        </div>
        <div className="h-[1px] bg-[#554c4b] mt-[12px]"> </div>
        <div className="mt-[12px] text-[#8e817e]">
          最后一天！ 双十一免费送黑胶VIP！
        </div>
      </div>
      <List
        className="mt-[12px]"
        bordered
        dataSource={list1}
        renderItem={(item) => (
          <List.Item>
            <div className="flex items-center">
              <div className="flex items-center flex-1">
                {item.prefix}
                {item.label}
              </div>
              <div>{item.suffix}</div>
            </div>
          </List.Item>
        )}
      ></List>
      <List
        className="mt-[12px]"
        bordered
        dataSource={list2}
        renderItem={(item) => (
          <List.Item>
            {' '}
            <div className="flex items-center">
              <div className="flex items-center flex-1">
                {item.prefix}
                {item.label}
              </div>
              <div>{item.suffix}</div>
            </div>
          </List.Item>
        )}
      ></List>
      <List
        className="mt-[12px]"
        bordered
        dataSource={list3}
        renderItem={(item) => (
          <List.Item>
            {' '}
            <div className="flex items-center">
              <div className="flex items-center flex-1">
                {item.prefix}
                {item.label}
              </div>
              <div>{item.suffix}</div>
            </div>
          </List.Item>
        )}
      ></List>
      <List
        className="mt-[12px]"
        bordered
        dataSource={list4}
        renderItem={(item) => (
          <List.Item>
            <div className="flex items-center">
              <div className="flex items-center flex-1">
                {item.prefix}
                {item.label}
              </div>
              <div>{item.suffix}</div>
            </div>
          </List.Item>
        )}
      ></List>
      <List
        className="mt-[12px]"
        bordered
        dataSource={['退出登录']}
        renderItem={(item) => (
          <List.Item>
            <div className="w-full flex justify-center text-[#e42007]">
              {item}
            </div>
          </List.Item>
        )}
      ></List>
    </div>
  );
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
  const { loginStatus, setUserInfo, userInfo, userId } = useModel('user');
  useEffect(() => {
    if (loginStatus) {
      getUserInfoApi(userId as number).then((res) => {
        setUserInfo(res);
      });
    }
  }, []);
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
        <UserContent userInfo={userInfo} />
      ) : (
        <LoginContent status={props.status} qrUrl={props.qrUrl} />
      )}
    </Drawer>
  );
});

export default UserDrawer;
