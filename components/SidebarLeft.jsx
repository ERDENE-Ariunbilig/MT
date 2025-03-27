function SidebarLeft() {
  return (
    <div className="sidebar-left">
      <div className="logo">
        <svg viewBox="0 0 24 24" className="x-logo">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </div>
      <nav>
        <a href="#" className="nav-item"><span>Home</span></a>
        <a href="#" className="nav-item"><span>Explore</span></a>
        <a href="#" className="nav-item"><span>Notifications</span></a>
        <a href="#" className="nav-item"><span>Messages</span></a>
        <a href="#" className="nav-item"><span>Lists</span></a>
        <a href="#" className="nav-item"><span>Bookmarks</span></a>
        <a href="#" className="nav-item"><span>Communities</span></a>
        <a href="#" className="nav-item"><span>Premium</span></a>
        <a href="#" className="nav-item"><span>Profile</span></a>
        <a href="#" className="nav-item"><span>More</span></a>
        <button className="post-btn">Post</button>
      </nav>
    </div>
  )
}

export default SidebarLeft 