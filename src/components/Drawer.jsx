import PropTypes from 'prop-types'
const Drawer = ({ children }) => {
  return (
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
  )
}

Drawer.propTypes = {
  children: PropTypes.any
}

export default Drawer