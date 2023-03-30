import { HeaderContainer, HeaderContent, NewTransActionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransActionButton>Nova Transação</NewTransActionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
