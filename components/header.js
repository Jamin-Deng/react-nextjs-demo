import Link from 'next/link';
import { Button } from 'antd';

const linkStyle = {
    marginRight: 15
}

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // 注意需要执行一次 res.json() 方法才能获取数据
        fetch('/api/hi')
            .then(res => res.json())
            .then(data => {

            })
            .catch(e => console.log('err', e))
        
    }

    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </div>
        )
    }
}

export default Header;
