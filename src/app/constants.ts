import { ɵConsole } from '@angular/core'
import { UrlMatcher, UrlMatchResult, UrlSegment } from '@angular/router'

export { COUNTRY_NAMES_TO_COUNTRY_CODES } from './constants-country-codes'

// Custom email REGEXP
// https://regex101.com/r/jV4aN7/16
// tslint:disable-next-line: max-line-length
export const EMAIL_REGEXP = /^([^@\s]|(".+"))+@([^@\s\."'\(\)\[\]\{\}\\/,:;]+\.)+([^@\s\."'\(\)\[\]\{\}\\/,:;]{2,})+$/

export const EMAIL_REGEXP_GENERIC = /^\s*?(.+)@(.+?)\s*$/
// https://regex101.com/r/9MXmdl/1
export const ORCID_REGEXP = /(\d{4}[- ]{0,}){3}\d{3}[\dX]$/i
// https://regex101.com/r/V95col/6
// tslint:disable-next-line: max-line-length
export const ORCID_URI_REGEXP = /(orcid\.org\/|qa\.orcid\.org\/|sandbox\.orcid\.org\/|dev\.orcid\.org\/|localhost.*)(\d{4}[- ]{0,}){3}\d{3}[\dX]$/i
// https://www.regextester.com/94502
export const URL_REGEXP = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
// https://www.regextester.com/96577
export const ILLEGAL_NAME_CHARACTERS_REGEXP = /([@\$!])/
// https://regex101.com/r/aoHxNo/1
export const HAS_NUMBER = /(?=.*[0-9]).*/
// https://regex101.com/r/NNIuKQ/1
export const HAS_LETTER_OR_SYMBOL = /(?=.*[^\d\s]).*/
// https://regex101.com/r/HqpnrM/1 strips params for OJS links
export const REDIRECT_URI_REGEXP = /(?=redirect_uri=)(.*?)(?=orcidapi)|(?=redirect_uri=)(.*?)$/

export const ApplicationRoutes = {
  myOrcid: 'my-orcid',
  myOrcidTEMP: 'qa/my-orcid',
  twoFactor: '2fa-signin',
  institutionalLinking: 'institutional-linking',
  social: 'social-linking',
  institutional: 'institutional-signin',
  inbox: 'inbox',
  login: 'login',
  signin: 'signin',
  authorize: 'oauth/authorize',
  search: 'orcid-search/search',
  resetPassword: 'reset-password',
  register: 'register',
  home: '',
}

export const HeadlessOnOauthRoutes = [
  ApplicationRoutes.twoFactor,
  ApplicationRoutes.social,
  ApplicationRoutes.institutionalLinking,
  ApplicationRoutes.institutional,
  ApplicationRoutes.login,
  ApplicationRoutes.signin,
  ApplicationRoutes.authorize,
  ApplicationRoutes.resetPassword,
  ApplicationRoutes.register,
]

export const PerformanceMarks = {
  navigationStartPrefix: 'start_',
  navigationEndPrefix: 'ends_',
}

export function isValidOrcidFormat(id) {
  const regExp = new RegExp('([0-9]{4}-){3}[0-9]{4}')
  return id && regExp.test(id)
}

export function getOrcidNumber(userId) {
  const orcidPattern = ORCID_REGEXP
  const extId = orcidPattern.exec(userId)
  if (extId != null) {
    userId = extId[0].toString().replace(/ /g, '')
    userId = userId.toString().replace(/-/g, '')
    const temp = userId.toString().replace(/(.{4})/g, '$1-')
    const length = temp.length
    userId = temp.substring(0, length - 1).toUpperCase()
  }
  return userId
}

export const URL_PRIVATE_PROFILE = 'myorcid'

// LAYOUT DEFINITIONS

export const GRID_GUTTER = {
  desktop: 12,
  tablet: 8,
  handset: 4,
}

export const GRID_MARGINS = {
  desktop: 200,
  tablet: 16,
  handset: 16,
}

export const GRID_COLUMNS = {
  desktop: 12,
  tablet: 8,
  handset: 4,
}

export const VISIBILITY_OPTIONS = ['PUBLIC', 'LIMITED', 'PRIVATE']

export const AMOUNT_OF_RETRIEVE_NOTIFICATIONS_PER_CALL = 10

export function isRedirectToTheAuthorizationPage(data: { url: string }) {
  return data.url.toLowerCase().includes('oauth/authorize')
}

export function objectToUrlParameters(object: Object) {
  return Object.keys(object)
    .map((key) => `${key}=${encodeURIComponent(object[key])}`)
    .join('&')
}

export function routerPublicPageUrl(segments: UrlSegment[]) {
  if (
    (segments[0] && isValidOrcidFormat(segments[0].path)) ||
    (segments[0] && segments[0].path.toLowerCase() === URL_PRIVATE_PROFILE)
  ) {
    return { consumed: [segments[0]] }
  }
  return {
    consumed: [],
  }
}

export function routerThirdPartySigninMatch(
  segments: UrlSegment[]
): UrlMatchResult {
  if (
    (segments[1] && segments[1].path.match(/third-party-signin-completed/)) ||
    (segments[2] && segments[2].path.match(/third-party-signin-completed/))
  ) {
    return { consumed: segments }
  }
}
