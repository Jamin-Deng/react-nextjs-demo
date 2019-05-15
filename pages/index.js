import Link from 'next/link';
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <Layout>
        <h1>Marvel TV Shows</h1>
        <ul>
            {props.shows.map(({ show }) => {
                return (
                    <li key={show.id}>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
    const data = await res.json();
    return {
        shows: data
    }
}

export default Index;

