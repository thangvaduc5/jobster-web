import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/BigSidebar'
import { Logo } from './index'
import NavLinks from './NavLinks'
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
