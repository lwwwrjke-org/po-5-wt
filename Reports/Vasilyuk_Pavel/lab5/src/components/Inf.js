const Profile = ( {dataUser} ) => {
    return (
        <div>
            <div>
                <img class="Img" src={dataUser.avatar_url}/>
            </div>
            <div class="name"> {dataUser.name} </div>
            <div class="login"> {dataUser.login} </div>
            <div class="language"> {dataUser.bio} </div>
            <div class="follow">                   
                <b> {dataUser.followers} </b> followers 
                <b> {dataUser.following} </b> following
            </div>
            <div class="location"> {dataUser.location} </div>
        </div>
    )
}

export default Profile;