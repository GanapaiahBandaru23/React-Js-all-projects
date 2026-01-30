import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: false,
  showLeftNavbar: false,
  showRightNavbar: false,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {},
})

export default ConfigurationContext
