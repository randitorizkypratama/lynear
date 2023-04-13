import { Breadcrumb, Image , Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      label: 'Navigation One',
      key: 'mail',
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      children: [
        {
          label: 'Item 1',
          key: 'Item',
        },
      ],
      },
    ];
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: '#B4E4FF',
        }}
      >
        <div
          style={{
            float: 'left',
            margin: '5px 24px 16px 0',
          }}
        >
        <Image
        style={{
          width: 60,
          height: 60,
        }}
        // preview={{ visible: true }}
    src="https://cdn.discordapp.com/attachments/1038479593146957919/1096109508457144441/image0.jpg"
   
  />
          </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          // items={new Array(3).fill(null).map((_, index) => ({
          //   key: String(index + 1),
          //   label: `nav ${index + 1}`,
          // }))}
          items={items}
          style={{
          backgroundColor: '#B4E4FF',
        }}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          minHeight: '100vh',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Lynear ©2023
      </Footer>
    </Layout>
  )
}
