function MainContent() {
  return (
    <main className="main-content">
      <div className="header">
        <h2>Home</h2>
        <div className="tabs">
          <a href="#" className="active">For you</a>
          <a href="#">Following</a>
        </div>
      </div>
      <div className="post-box">
        <img src="https://scontent.fuln4-2.fna.fbcdn.net/v/t1.15752-9/462563852_573079991755593_4405495855407206641_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=GQ7NfHInxKgQ7kNvgErJ3qw&_nc_oc=AdmDJp71sRwhjxRb0e5rwsztgtNzuk8v2_ajxwiaPkMx0aZqYndibMfUZFfRAZsa6Ew&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln4-2.fna&oh=03_Q7cD1wEYV_AlVzjYk27vKO24mhlZxe5aOjjOglL58G65S0uZog&oe=6803A087" alt="Profile" className="avatar" />
        <div className="post-content">
          <input type="text" placeholder="What's happening?" />
          <div className="post-actions">
          </div>
        </div>
      </div>

      <div className="posts-feed">
        <div className="post">
          <img src="https://scontent.fuln4-3.fna.fbcdn.net/v/t1.15752-9/484633816_1314736046428079_8007317070646407214_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pyj1LDqs5zoQ7kNvgE2t4s_&_nc_oc=AdmCugSgycmmfcIhewhm8qhaNktDsev8gttjq0K8hKcMMxIOHUrYschOn78SyVny2lQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln4-3.fna&oh=03_Q7cD1wGNF_smolxGPq6uVrLTbXC31Msw8MF8Qh7NjqXdDxlY9g&oe=68039CEB" alt="User Avatar" className="avatar" />
          <div className="post-content">
            <div className="post-header">
              <span className="user-name">Bataa</span>
              <span className="user-handle">@Bat</span>
              <span className="post-time">2h</span>
            </div>
            <div className="post-text">
              Horvooooooo Amaryaaaaaaaa
            </div>
            <div className="post-interactions">
              <span>💬 24</span>
              <span>🔄 12</span>
              <span>❤️ 45</span>
            </div>
          </div>
        </div>

        <div className="post">
          <img src="https://scontent.fuln4-3.fna.fbcdn.net/v/t1.15752-9/483865092_507819542401755_8517422971671091364_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=y2SXXhHhPZQQ7kNvgEVxXVQ&_nc_oc=AdnOx5sUsz48ts3lO97LrnB-VLVDmPJYwmDhbkeXSJ_L9RSNqzH9w6PlZQfbRQ2Oj8I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln4-3.fna&oh=03_Q7cD1wFlTwGPmQ3lS0BAnRYr4LVA0JXKcCw9HdvWkOn3YAD1WQ&oe=68039E9A" alt="User Avatar" className="avatar" />
          <div className="post-content">
            <div className="post-header">
              <span className="user-name">Misheel</span>
              <span className="user-handle">@Durak</span>
              <span className="post-time">5h</span>
            </div>
            <div className="post-text">
              zuvshdeeee amaryaaa
            </div>
            <div className="post-interactions">
              <span>💬 56</span>
              <span>🔄 89</span>
              <span>❤️ 234</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent 