import React from 'react'
import { Typography } from 'design-system-fitbank/dist/src/components/Typography'
import { Icon } from 'design-system-fitbank/dist/src/components/Icon'
import { Button } from 'design-system-fitbank/dist/src/components/Button'
import { OperationType } from 'components/TransactionDay/OperationType'

import * as Styled from './style'
import { maskMoney } from '_utils/number'
import { TransactionDayProps } from 'components/TransactionDay'

export interface TransactionProps {
  transactions?: Transaction
}

export type Transaction = {
  title: string
  value: number
  establishment: string
  operationType: OperationType
}

export const Transaction: React.FC<TransactionProps> = ({ transactions }) => {
  const isCredit = transactions?.value! > 0

  const maskMoney = (value: string) => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100)
    return 'R$ ' + result
  }

  const operationType = (operationType?: number) => {
    switch (operationType) {
      case 2:
        return 'Pagamento de boleto'

      case 3:
        return 'Transferência'

      case 6:
        return 'Transferência Interna'

      case 8:
        return 'GARE'

      case 11:
        return 'FGTS'

      case 12:
        return 'DARJ'

      case 13:
        return 'Transferência SMS'

      case 23:
        return 'Saque Digital'

      case 37:
        return 'Recarga'

      case 40:
        return 'PIX Enviado'

      case 41:
        return 'PIX Recebido'

      case 42:
        return 'Devolução PIX'

      case 44:
        return 'QRCode'
    }
  }

  return (
    <Styled.Container data-testid='container'>
      <Styled.IconMoney data-testid='iconMoney' isCredit={isCredit}>
        <Icon name={isCredit ? 'moneyln' : 'moneyOut'} width={36} height={36} />
      </Styled.IconMoney>
      <Styled.Details data-testid='details'>
        <Typography variant='bodySmall'>{transactions?.title}</Typography>
        {transactions?.establishment && <Typography variant='bodyLarge'>{transactions?.establishment}</Typography>}
        {transactions?.operationType && (
          <Styled.OperationType>
            <Typography variant='bodySmall'>{`Via ${operationType(transactions?.operationType)}`}</Typography>
          </Styled.OperationType>
        )}
      </Styled.Details>
      <Styled.Button data-testid='button'>
        <Typography variant='bodyLarge'>{maskMoney(transactions?.value.toString()!)}</Typography>
        <Button icon='details' onClick={() => {}} size='small' type='tertiary'>
          Ver
        </Button>
      </Styled.Button>
    </Styled.Container>
  )
}
