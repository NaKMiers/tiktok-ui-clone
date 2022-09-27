import PropTypes from 'prop-types'

import Header from '../components/Header'

function OnlyHeader({ children }) {
   return (
      <div>
         <Header />
         <div className='container'>
            <div className='content'>{children}</div>
         </div>
      </div>
   )
}

OnlyHeader.propTypes = {
   children: PropTypes.node.isRequired,
}

export default OnlyHeader
