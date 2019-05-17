import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { withRouter } from 'next/router';
import '../header/header.css';

const { Header } = Layout;

const linkStyle = {
    marginRight: 15
}

class MyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: []
        }
    }

    componentDidMount() {
        // 注意需要执行一次 res.json() 方法才能获取数据
        fetch('/api/menu')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    menuList: data.data
                })
            })
            .catch(e => console.log('err', e))
        
    }

    render() {
        return (
            // <div>
            //     <Link href="/">
            //         <a style={linkStyle}>Home</a>
            //     </Link>
            //     <Link href="/about">
            //         <a style={linkStyle}>About</a>
            //     </Link>
            // </div>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}>
                    {this.state.menuList.map(( item ) => {
                        return (
                            <Menu.Item key={item.id}
                                onClick={(() => {this.props.router.push(item.hre)}).bind(this)}>
                                {/* <Link href={item.hre}><a>{item.name}</a></Link> */}
                                {item.name}
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Header>
        )
    }
}

export default withRouter(MyHeader);
