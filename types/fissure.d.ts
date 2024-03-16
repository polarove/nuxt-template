import { RELIC_TIER, RELIC_TIER_NUMBER } from '~/apis/enums'

export interface Fissure {
  activation: string
  active: boolean
  enemy: string
  enemyKey: string
  eta: string
  expired: boolean
  expiry: string
  id: string
  isHard: boolean
  isStorm: boolean
  missionKey: string
  missionType: string
  node: string
  nodeKey: string
  startString: string
  tier: RELIC_TIER
  tierNum: RELIC_TIER_NUMBER
}
