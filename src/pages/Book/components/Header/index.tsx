import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shade } from 'polished'
import { Link } from 'react-router-dom'
import Switch from 'react-switch'

import { useTheme } from '../../../../shared/hooks'
import { Container } from './styles'

const Header = () => {
  const [type, setType, theme] = useTheme()

  return (
    <Container>
      <Link to="/">
        <FontAwesomeIcon icon={['fas', 'chevron-left']} size="2x" />
      </Link>
      {theme && (
        <Switch
          onChange={() => setType(type === 'dark' ? 'light' : 'dark')}
          checked={type === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={theme.colors.primary}
          onColor={theme.colors.secundary}
          offHandleColor={shade(0.2, theme.colors.primary)}
          onHandleColor={shade(0.2, theme.colors.secundary)}
        />
      )}
    </Container>
  )
}

export default Header
