import { HeaderContainer, HeaderContent, NewTransActionButton } from './styles'

import LogoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImg} alt="" />
          <NewTransActionButton>Nova Transação</NewTransActionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
