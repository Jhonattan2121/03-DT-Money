import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/Logo.svg'
import { NewTransActionModal } from '../NewTransActionModal'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransActionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
