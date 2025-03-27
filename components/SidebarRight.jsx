function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <div className="premium-box">
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button>Subscribe</button>
      </div>
      <div className="trending">
        <h2>What's happening</h2>
        <div className="trending-item">
          <span className="category">Trending in Mongolia</span>
          <h3>soohyun</h3>
          <span className="posts">55.6k posts</span>
        </div>
      </div>
    </div>
  )
}

export default SidebarRight 