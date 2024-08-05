import React from 'react'

function SideBar() {
  return (
    <div className="sidebar">
      <h4>Filters</h4>
      <button>
        Complete filter
      </button>
      <button>
        Due filter
      </button>
      <button>
        Created filter
      </button>
    </div>
  )
}

export default SideBar;