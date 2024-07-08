import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <nav className='navbar'>
        <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            =
          </label>
          <label className="logo"><Link to='/'>Noname Academy</Link></label>
          <ul>
            <Link to='/course'><li>Course</li></Link>
            <Link to='/project'><li>Project</li></Link>
            <Link to='/about'><li>About</li></Link>
            
          </ul>
          <Link to='/signin'>
            <button className='btn-1'>SignIn</button>
          </Link>
      </nav>

      <div className="bubbles">
        <img src="bubble.png" />
        <img src="bubble.png" />
        <img src="bubble.png" />
        <img src="bubble.png" />
        <img src="bubble.png" />
        <img src="bubble.png" />
        <img src="bubble.png" />
        <img src="bubble.png" />

      </div>
    </>
  )
}

export default Header