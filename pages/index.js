import React from 'react';
import { withRouter } from 'next/router';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //默认跳转到home
        this.props.router.push('/home')
    }

    render() {
        return(
            <div>lodding</div>
        )
    }

}

export default withRouter(Index);

