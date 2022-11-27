const UserInfo = ({ user }) => {
    const { name, username, email, phone } = user || {};
    return user ? (
        <>
            <h1>Name : {name}</h1>
            <p> username : {username} </p>
            <p> phone : {phone} </p>
            <p> email : {email} </p>
        </>
    ) : <p>Loading ...</p>;
};

export default UserInfo;
