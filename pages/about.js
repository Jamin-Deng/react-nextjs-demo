import { withRouter } from 'next/router';

const About = withRouter((proos) => (
    <div>{proos.router.query.id}关于</div>
))

export default About;