import { Image , Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
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
    src="https://cdn.discordapp.com/attachments/1038479593146957919/1096109508457144441/image0.jpg"
   
  />
          </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          minHeight: '100vh',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        {/* <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div> */}
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
