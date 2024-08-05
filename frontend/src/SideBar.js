import React from 'react'

function SideBar({ onClick }) {
  return (
    <div className="sidebar">
      <h4>Filters</h4>
      <button onClick={() => onClick('completed')}>
        Complete filter
      </button>
      <button onClick={() => onClick('due')}>
        Due filter
      </button>
      <button onClick={() => onClick('created')}>
        Created filter
      </button>
    </div>
  )
}

export default SideBar;