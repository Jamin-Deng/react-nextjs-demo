import React from 'react'
import MyHeader from '../header/header';

import { Layout } from 'antd';

const HomeContent = (props) => {
    const {Component} = props;
    return (
        <Layout style={{width:'100%', height: '100%'}}>
            <MyHeader />
            <Component />
        </Layout>
    )
}

export default HomeContent;