import fetch from 'isomorphic-unfetch';
// import { withRouter } from 'next/router';
import Layout from '../components/layout';

// const Post = withRouter((props) => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </Layout>
// ));

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    return { show };
}

export default Post;
