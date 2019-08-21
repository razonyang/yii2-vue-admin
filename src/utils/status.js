import { STATUS_INACTIVE, STATUS_ACTIVE } from '@/constants/status'
import i18n from '@/lang'

export function getStatuses() {
  return [
    {
      value: STATUS_ACTIVE,
      label: i18n.t('common.active')
    },
    {
      value: STATUS_INACTIVE,
      label: i18n.t('common.inactive')
    }
  ]
}

export function getStatusName(status) {
  switch (status) {
    case STATUS_INACTIVE:
      return i18n.t('common.inactive')
    case STATUS_ACTIVE:
      return i18n.t('common.active')
    default:
      return i18n.t('common.unknown')
  }
}
