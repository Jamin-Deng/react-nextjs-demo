const User = (props) => (
    <div>
        我们{props.id}
    </div>
)

User.getInitialProps =  async function (context) {
    const id  = context.query;
    return id 
}

export default User;