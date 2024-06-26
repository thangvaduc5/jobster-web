import { IoBarChart } from 'react-icons/io5'
import { MdOutlineQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChart />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: '/all-jobs',
    icon: <MdOutlineQueryStats />,
  },
  {
    id: 3,
    text: 'add job',
    path: '/add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'profile',
    path: '/profile',
    icon: <ImProfile />,
  },
]

export default links
