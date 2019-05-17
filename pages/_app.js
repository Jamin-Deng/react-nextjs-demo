import React from 'react'
import Head from 'next/head'
import App, {Container} from 'next/app'
import HomeContent from '../components/home/homeContent';

class ExpressApp extends App {

    constructor(props) {
        super(props);
    }

    render() {
        const {Component} = this.props;
        return (
            <Container>
                <Head>
                    <title>React-Nextjs-Demo</title>
                    <meta charSet='utf-8'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                    <style>
                        {"#__next {height:100%};"}
                    </style>
                </Head>
                <HomeContent Component={Component}/>
            </Container>
        );
    }
}

export default ExpressApp