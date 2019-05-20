import MySider from '../../components/sider/sider';
import { Layout, Breadcrumb } from 'antd';
import Option1 from './option1';
 
const { Content } = Layout;

const Home = (props) => {
    const {Component} = props;
    //如果没有点击home下的子目录进入下面或者是传了自己的时候
    if (Object.keys(props).length == 0 || Component['name'] == 'Home') {
        return (<Layout>
            <MySider />
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>subnav1</Breadcrumb.Item>
                    <Breadcrumb.Item>option1</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    }}
                >
                    <Option1 />
                </Content>
            </Layout>
        </Layout>)
    } else {
        return (<Layout>
            <MySider />
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>subnav1</Breadcrumb.Item>
                    <Breadcrumb.Item>option1</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    }}
                >
                    <Component />
                </Content>
            </Layout>
        </Layout>)
    }
}

export default Home;