import React from 'react'
import MyHeader from '../header/header';
import Home from '../../pages/home/index';
import { withRouter } from 'next/router';

import { Layout } from 'antd';

const HomeContent = (props) => {
    const {Component} = props;
    //如果是home目录或者子目录进入home页面
    if (props.router.asPath.indexOf("home") != -1) {
        return (
            <Layout style={{width:'100%', height: '100%'}}>
                <MyHeader />
                <Home Component={Component}/>
            </Layout>
        )
    } else {
        return (
            <Layout style={{width:'100%', height: '100%'}}>
                <MyHeader />
                <Component />
            </Layout>
        )   
    }
}

export default withRouter(HomeContent);