import { ExternalIdentifier, MonthDayYearDate, Value } from './common.endpoint'

export interface Citation {
  citation: Value
  citationType: Value
  errors: any[]
  getRequiredMessage?: any
  required: boolean
}

export enum WorkCategories {
  publication = 'publication',
  conference = 'conference',
  intellectual_property = 'intellectual_property',
  other_output = 'other_output',
}

export enum WorkPublicationTypes {
  book = 'book',
  bookChapter = 'book-chapter',
  bookReview = 'book-review',
  dictionaryEntry = 'dictionary-entry',
  dissertationThesis = 'dissertation-thesis',
  editedBook = 'edited-book',
  encyclopediaEntry = 'encyclopedia-entry',
  journalArticle = 'journal-article',
  journalIssue = 'journal-issue',
  magazineArticle = 'magazine-article',
  manual = 'manual',
  newsletterArticle = 'newsletter-article',
  newspaperArticle = 'newspaper-article',
  onlineResource = 'online-resource',
  preprint = 'preprint',
  report = 'report',
  researchTool = 'research-tool',
  supervisedStudentPublication = 'supervised-student-publication',
  test = 'test',
  translation = 'translation',
  website = 'website',
  workingPaper = 'working-paper',
}

export enum WorkConferenceTypes {
  conferenceAbstract = 'conference-abstract',
  conferencePaper = 'conference-paper',
  conferencePoster = 'conference-poster',
}

export enum WorkIntellectualPropertyTypes {
  disclosure = 'disclosure',
  license = 'license',
  patent = 'patent',
  registeredCopyright = 'registered-copyright',
  trademark = 'trademark',
}

export enum WorkOtherOutputTypes {
  annotation = 'annotation',
  artisticPerformance = 'artistic-performance',
  dataManagementPlan = 'data-management-plan', //
  dataSet = 'data-set',
  invention = 'invention',
  lectureSpeech = 'lecture-speech',
  other = 'other',
  physicalObject = 'physical-object',
  researchTechnique = 'research-technique',
  software = 'software', //
  spinOffCompany = 'spin-off-company',
  standardsAndPolicy = 'standards-and-policy',
  technicalStandard = 'technical-standard',
}

export const WorkCategoriesLabel = {
  [WorkCategories.conference]: $localize`:@@works.conference:Conference`,
  [WorkCategories.intellectual_property]: $localize`:@@works.intellectual:Intellectual property`,
  [WorkCategories.other_output]: $localize`:@@works.other:Other output`,
  [WorkCategories.publication]: $localize`:@@works.publication:Publication`,
}

export const WorkTypesLabels = {
  [WorkCategories.conference]: {
    [WorkConferenceTypes.conferenceAbstract]: $localize`:@@works.abstract:Conference abstract`,
    [WorkConferenceTypes.conferencePaper]: $localize`:@@works.paper:Conference paper`,
    [WorkConferenceTypes.conferencePoster]: $localize`:@@works.poster:Conference poster`,
  },
  [WorkCategories.publication]: {
    [WorkPublicationTypes.bookChapter]: $localize`:@@works.chapter:Book chapter`,
    [WorkPublicationTypes.bookReview]: $localize`:@@works.review:Book review`,
    [WorkPublicationTypes.book]: $localize`:@@works.book:Book`,
    [WorkPublicationTypes.dictionaryEntry]: $localize`:@@works.entry:Dictionary entry`,
    [WorkPublicationTypes.dissertationThesis]: $localize`:@@works.thesis:Dissertation/Thesis`,
    [WorkPublicationTypes.editedBook]: $localize`:@@works.editedBook:Edited book`,
    [WorkPublicationTypes.encyclopediaEntry]: $localize`:@@works.encyclopediaEntry:Encyclopedia entry`,
    [WorkPublicationTypes.journalArticle]: $localize`:@@works.journalArticle:Journal article`,
    [WorkPublicationTypes.journalIssue]: $localize`:@@works.issue:Journal issue`,
    [WorkPublicationTypes.magazineArticle]: $localize`:@@works.magazineArticle:Magazine article`,
    [WorkPublicationTypes.manual]: $localize`:@@works.manual:Manual`,
    [WorkPublicationTypes.newsletterArticle]: $localize`:@@works.newsletterarticle:Newsletter article`,
    [WorkPublicationTypes.newspaperArticle]: $localize`:@@works.newspaperArticle:Newspaper article`,
    [WorkPublicationTypes.onlineResource]: $localize`:@@works.onlineResource:Online resource`,
    [WorkPublicationTypes.preprint]: $localize`:@@works.preprint:Preprint`,
    [WorkPublicationTypes.report]: $localize`:@@works.report:Report`,
    [WorkPublicationTypes.researchTool]: $localize`:@@works.tool:Research tool`,
    [WorkPublicationTypes.supervisedStudentPublication]: $localize`:@@works.studentPublication:Supervised student publication`,
    [WorkPublicationTypes.test]: $localize`:@@works.test:Test`,
    [WorkPublicationTypes.translation]: $localize`:@@works.translation:Translation`,
    [WorkPublicationTypes.website]: $localize`:@@works.website:Website`,
    [WorkPublicationTypes.workingPaper]: $localize`:@@works.working paperAA:Working paper`,
  },

  [WorkCategories.intellectual_property]: {
    [WorkIntellectualPropertyTypes.disclosure]: $localize`:@@works.disclosure:Disclosure`,
    [WorkIntellectualPropertyTypes.license]: $localize`:@@works.license:License`,
    [WorkIntellectualPropertyTypes.patent]: $localize`:@@works.patent:Patent`,
    [WorkIntellectualPropertyTypes.registeredCopyright]: $localize`:@@works.copyright:Registered copyright`,
    [WorkIntellectualPropertyTypes.trademark]: $localize`:@@works.trademark:Trademark`,
  },
  [WorkCategories.other_output]: {
    [WorkOtherOutputTypes.annotation]: $localize`:@@works.annotation:Annotation`,
    [WorkOtherOutputTypes.artisticPerformance]: $localize`:@@works.artisticPerformance:Artistic performance`,
    [WorkOtherOutputTypes.dataManagementPlan]: $localize`:@@works.AAA:Data management plan`,
    [WorkOtherOutputTypes.dataSet]: $localize`:@@works.plan:Data set`,
    [WorkOtherOutputTypes.invention]: $localize`:@@works.invention:Invention`,
    [WorkOtherOutputTypes.lectureSpeech]: $localize`:@@works.speech:Lecture speech`,
    [WorkOtherOutputTypes.physicalObject]: $localize`:@@works.object:Physical object`,
    [WorkOtherOutputTypes.researchTechnique]: $localize`:@@works.technique:Research technique`,
    [WorkOtherOutputTypes.software]: $localize`:@@works.software:software`,
    [WorkOtherOutputTypes.spinOffCompany]: $localize`:@@works.company:Spin off company`,
    [WorkOtherOutputTypes.standardsAndPolicy]: $localize`:@@works.policy:Standards and policy`,
    [WorkOtherOutputTypes.technicalStandard]: $localize`:@@works.standard:Technical Standard`,
    [WorkOtherOutputTypes.other]: $localize`:@@works.other:Other`,
  },
}

export enum WorksTitleName {
  publisher = 'publisher',
  conferenceTitle = 'conferenceTitle',
  bookTitle = 'bookTitle',
  journalTitle = 'journalTitle',
  magazineTitle = 'magazineTitle',
  newsletterTitle = 'newsletterTitle',
  institution = 'institution',
  custodian = 'custodian',
  trademark = 'trademark',
}

export const WorksTitleNameLabel = {
  [WorksTitleName.publisher]: $localize`:@@works.AAA:Publisher`,
  [WorksTitleName.conferenceTitle]: $localize`:@@works.AAA:Conference title`,
  [WorksTitleName.bookTitle]: $localize`:@@works.AAA:Book title`,
  [WorksTitleName.journalTitle]: $localize`:@@works.AAA:Journal title`,
  [WorksTitleName.magazineTitle]: $localize`:@@works.AAA:Magazine title`,
  [WorksTitleName.newsletterTitle]: $localize`:@@works.AAA:Newsletter title`,
  [WorksTitleName.institution]: $localize`:@@works.AAA:Institution`,
  [WorksTitleName.custodian]: $localize`:@@works.AAA:Custodian`,
  [WorksTitleName.trademark]: $localize`:@@works.AAA:Trademark`,
}

export const WorkTypesTitle = {
  [WorkCategories.conference]: {
    [WorkConferenceTypes.conferenceAbstract]: WorksTitleName.conferenceTitle,
    [WorkConferenceTypes.conferencePaper]: WorksTitleName.conferenceTitle,
    [WorkConferenceTypes.conferencePoster]: WorksTitleName.conferenceTitle,
  },
  [WorkCategories.publication]: {
    [WorkPublicationTypes.book]: WorksTitleName.publisher,
    [WorkPublicationTypes.bookChapter]: WorksTitleName.bookTitle,
    [WorkPublicationTypes.bookReview]: WorksTitleName.publisher,
    [WorkPublicationTypes.dictionaryEntry]: WorksTitleName.publisher,
    [WorkPublicationTypes.editedBook]: WorksTitleName.publisher,
    [WorkPublicationTypes.dissertationThesis]: WorksTitleName.journalTitle,
    [WorkPublicationTypes.encyclopediaEntry]: WorksTitleName.publisher,
    [WorkPublicationTypes.journalArticle]: WorksTitleName.journalTitle,
    [WorkPublicationTypes.journalIssue]: WorksTitleName.journalTitle,
    [WorkPublicationTypes.magazineArticle]: WorksTitleName.magazineTitle,
    [WorkPublicationTypes.manual]: WorksTitleName.publisher,
    [WorkPublicationTypes.newsletterArticle]: WorksTitleName.newsletterTitle,
    [WorkPublicationTypes.newspaperArticle]: WorksTitleName.newsletterTitle,
    [WorkPublicationTypes.onlineResource]: WorksTitleName.publisher,
    [WorkPublicationTypes.preprint]: WorksTitleName.journalTitle,
    [WorkPublicationTypes.report]: WorksTitleName.institution,
    [WorkPublicationTypes.researchTool]: WorksTitleName.institution,
    [WorkPublicationTypes.supervisedStudentPublication]:
      WorksTitleName.institution,
    [WorkPublicationTypes.test]: WorksTitleName.institution,
    [WorkPublicationTypes.translation]: WorksTitleName.publisher,
    [WorkPublicationTypes.website]: WorksTitleName.publisher,
    [WorkPublicationTypes.workingPaper]: WorksTitleName.publisher,
  },

  [WorkCategories.intellectual_property]: {
    [WorkIntellectualPropertyTypes.disclosure]: WorksTitleName.publisher,
    [WorkIntellectualPropertyTypes.license]: WorksTitleName.publisher,
    [WorkIntellectualPropertyTypes.patent]: WorksTitleName.publisher,
    [WorkIntellectualPropertyTypes.registeredCopyright]:
      WorksTitleName.publisher,
    [WorkIntellectualPropertyTypes.trademark]: WorksTitleName.trademark,
  },
  [WorkCategories.other_output]: {
    [WorkOtherOutputTypes.annotation]: WorksTitleName.custodian,
    [WorkOtherOutputTypes.artisticPerformance]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.dataManagementPlan]: WorksTitleName.journalTitle,
    [WorkOtherOutputTypes.dataSet]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.invention]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.lectureSpeech]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.physicalObject]: WorksTitleName.custodian,
    [WorkOtherOutputTypes.researchTechnique]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.software]: WorksTitleName.journalTitle,
    [WorkOtherOutputTypes.spinOffCompany]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.standardsAndPolicy]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.technicalStandard]: WorksTitleName.publisher,
    [WorkOtherOutputTypes.other]: WorksTitleName.publisher,
  },
}

export const WorkTypesByCategory = {
  [WorkCategories.conference]: WorkConferenceTypes,
  [WorkCategories.publication]: WorkPublicationTypes,
  [WorkCategories.intellectual_property]: WorkIntellectualPropertyTypes,
  [WorkCategories.other_output]: WorkOtherOutputTypes,
}

export const LanguageMap = {
  Abkhazian: 'ab',
  Afar: 'aa',
  Afrikaans: 'af',
  Akan: 'ak',
  Albanian: 'sq',
  Amharic: 'am',
  Arabic: 'ar',
  Aragonese: 'an',
  Armenian: 'hy',
  Assamese: 'as',
  Avaric: 'av',
  Avestan: 'ae',
  Aymara: 'ay',
  Azerbaijani: 'az',
  Bambara: 'bm',
  Bangla: 'bn',
  Bashkir: 'ba',
  Basque: 'eu',
  Belarusian: 'be',
  Bihari: 'bh',
  Bislama: 'bi',
  Bosnian: 'bs',
  Breton: 'br',
  Bulgarian: 'bg',
  Burmese: 'my',
  Catalan: 'ca',
  Chamorro: 'ch',
  Chechen: 'ce',
  'Chinese (China)': 'zh_CN',
  'Chinese (Taiwan)': 'zh_TW',
  'Church Slavic': 'cu',
  Chuvash: 'cv',
  Cornish: 'kw',
  Corsican: 'co',
  Cree: 'cr',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Divehi: 'dv',
  Dutch: 'nl',
  Dzongkha: 'dz',
  English: 'en',
  Esperanto: 'eo',
  Estonian: 'et',
  Ewe: 'ee',
  Faroese: 'fo',
  Fijian: 'fj',
  Finnish: 'fi',
  French: 'fr',
  Fulah: 'ff',
  Galician: 'gl',
  Ganda: 'lg',
  Georgian: 'ka',
  German: 'de',
  Greek: 'el',
  Guarani: 'gn',
  Gujarati: 'gu',
  'Haitian Creole': 'ht',
  Hausa: 'ha',
  Hebrew: 'iw',
  Herero: 'hz',
  Hindi: 'hi',
  'Hiri Motu': 'ho',
  Hungarian: 'hu',
  Icelandic: 'is',
  Ido: 'io',
  Igbo: 'ig',
  Indonesian: 'in',
  Interlingua: 'ia',
  Interlingue: 'ie',
  Inuktitut: 'iu',
  Inupiaq: 'ik',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Javanese: 'jv',
  Kalaallisut: 'kl',
  Kannada: 'kn',
  Kanuri: 'kr',
  Kashmiri: 'ks',
  Kazakh: 'kk',
  Khmer: 'km',
  Kikuyu: 'ki',
  Kinyarwanda: 'rw',
  Komi: 'kv',
  Kongo: 'kg',
  Korean: 'ko',
  Kuanyama: 'kj',
  Kurdish: 'ku',
  Kyrgyz: 'ky',
  Lao: 'lo',
  Latin: 'la',
  Latvian: 'lv',
  Limburgish: 'li',
  Lingala: 'ln',
  Lithuanian: 'lt',
  'Luba-Katanga': 'lu',
  Luxembourgish: 'lb',
  Macedonian: 'mk',
  Malagasy: 'mg',
  Malay: 'ms',
  Malayalam: 'ml',
  Maltese: 'mt',
  Manx: 'gv',
  Maori: 'mi',
  Marathi: 'mr',
  Marshallese: 'mh',
  Moldavian: 'mo',
  Mongolian: 'mn',
  Nauru: 'na',
  Navajo: 'nv',
  Ndonga: 'ng',
  Nepali: 'ne',
  'North Ndebele': 'nd',
  'Northern Sami': 'se',
  Norwegian: 'no',
  'Norwegian Bokmål': 'nb',
  'Norwegian Nynorsk': 'nn',
  Nyanja: 'ny',
  Occitan: 'oc',
  Odia: 'or',
  Ojibwa: 'oj',
  Oromo: 'om',
  Ossetic: 'os',
  Pali: 'pi',
  Pashto: 'ps',
  Persian: 'fa',
  Polish: 'pl',
  Portuguese: 'pt',
  Punjabi: 'pa',
  Quechua: 'qu',
  Romanian: 'ro',
  Romansh: 'rm',
  Rundi: 'rn',
  Russian: 'ru',
  Samoan: 'sm',
  Sango: 'sg',
  Sanskrit: 'sa',
  Sardinian: 'sc',
  'Scottish Gaelic': 'gd',
  Serbian: 'sr',
  Shona: 'sn',
  'Sichuan Yi': 'ii',
  Sindhi: 'sd',
  Sinhala: 'si',
  Slovak: 'sk',
  Slovenian: 'sl',
  Somali: 'so',
  'South Ndebele': 'nr',
  'Southern Sotho': 'st',
  Spanish: 'es',
  Sundanese: 'su',
  Swahili: 'sw',
  Swati: 'ss',
  Swedish: 'sv',
  Tagalog: 'tl',
  Tahitian: 'ty',
  Tajik: 'tg',
  Tamil: 'ta',
  Tatar: 'tt',
  Telugu: 'te',
  Thai: 'th',
  Tibetan: 'bo',
  Tigrinya: 'ti',
  Tongan: 'to',
  Tsonga: 'ts',
  Tswana: 'tn',
  Turkish: 'tr',
  Turkmen: 'tk',
  Twi: 'tw',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uyghur: 'ug',
  Uzbek: 'uz',
  Venda: 've',
  Vietnamese: 'vi',
  Volapük: 'vo',
  Walloon: 'wa',
  Welsh: 'cy',
  'Western Frisian': 'fy',
  Wolof: 'wo',
  Xhosa: 'xh',
  Yiddish: 'ji',
  Yoruba: 'yo',
}

export const YearOption = {
  2031: '2031',
  2030: '2030',
  2029: '2029',
  2028: '2028',
  2027: '2027',
  2026: '2026',
  2025: '2025',
  2024: '2024',
  2023: '2023',
  2022: '2022',
  2021: '2021',
  2020: '2020',
  2019: '2019',
  2018: '2018',
  2017: '2017',
  2016: '2016',
  2015: '2015',
  2014: '2014',
  2013: '2013',
  2012: '2012',
  2011: '2011',
  2010: '2010',
  2009: '2009',
  2008: '2008',
  2007: '2007',
  2006: '2006',
  2005: '2005',
  2004: '2004',
  2003: '2003',
  2002: '2002',
  2001: '2001',
  2000: '2000',
  1999: '1999',
  1998: '1998',
  1997: '1997',
  1996: '1996',
  1995: '1995',
  1994: '1994',
  1993: '1993',
  1992: '1992',
  1991: '1991',
  1990: '1990',
  1989: '1989',
  1988: '1988',
  1987: '1987',
  1986: '1986',
  1985: '1985',
  1984: '1984',
  1983: '1983',
  1982: '1982',
  1981: '1981',
  1980: '1980',
  1979: '1979',
  1978: '1978',
  1977: '1977',
  1976: '1976',
  1975: '1975',
  1974: '1974',
  1973: '1973',
  1972: '1972',
  1971: '1971',
  1970: '1970',
  1969: '1969',
  1968: '1968',
  1967: '1967',
  1966: '1966',
  1965: '1965',
  1964: '1964',
  1963: '1963',
  1962: '1962',
  1961: '1961',
  1960: '1960',
  1959: '1959',
  1958: '1958',
  1957: '1957',
  1956: '1956',
  1955: '1955',
  1954: '1954',
  1953: '1953',
  1952: '1952',
  1951: '1951',
  1950: '1950',
  1949: '1949',
  1948: '1948',
  1947: '1947',
  1946: '1946',
  1945: '1945',
  1944: '1944',
  1943: '1943',
  1942: '1942',
  1941: '1941',
  1940: '1940',
  1939: '1939',
  1938: '1938',
  1937: '1937',
  1936: '1936',
  1935: '1935',
  1934: '1934',
  1933: '1933',
  1932: '1932',
  1931: '1931',
  1930: '1930',
  1929: '1929',
  1928: '1928',
  1927: '1927',
  1926: '1926',
  1925: '1925',
  1924: '1924',
  1923: '1923',
  1922: '1922',
  1921: '1921',
  1920: '1920',
  1919: '1919',
  1918: '1918',
  1917: '1917',
  1916: '1916',
  1915: '1915',
  1914: '1914',
  1913: '1913',
}
export const MonthOption = {
  '01': '01',
  '02': '02',
  '03': '03',
  '04': '04',
  '05': '05',
  '06': '06',
  '07': '07',
  '08': '08',
  '09': '09',
  10: '10',
  11: '11',
  12: '12',
}

export const DayOption = {
  '01': '01',
  '02': '02',
  '03': '03',
  '04': '04',
  '05': '05',
  '06': '06',
  '07': '07',
  '08': '08',
  '09': '09',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  21: '21',
  22: '22',
  23: '23',
  24: '24',
  25: '25',
  26: '26',
  27: '27',
  28: '28',
  29: '29',
  30: '30',
  31: '31',
}

export const CitationTypes = {
  'formatted-apa': 'APA',
  bibtex: 'BIBTEX',
  'formatted-chicago': 'CHICAGO',
  'formatted-harvard': 'HARVARD',
  'formatted-ieee': 'IEEE',
  'formatted-mla': 'MLA',
  ris: 'RIS',
  'formatted-unspecified': 'UNSPECIFIED',
  'formatted-vancouver': 'VANCOUVER',
}

export interface WorkIdType {
  name: string
  description: string
  resolutionPrefix: string
}

export interface WorkIdTypeValidation {
  resolved: boolean
  attemptedResolution: boolean
  generatedUrl: string
  validFormat: boolean
}

export enum WorkRelationships {
  self = 'self',
  'part-of' = 'part-of',
  'version-of' = 'version_of',
  'funded-by' = 'funded_by',
}

export const WorkRelationshipsLabels = {
  self: $localize`:@@works.self:Self`,
  'part-of': $localize`:@@works.partOf:Part of`,
  'version-of': $localize`:@@works.versionOf:Version of`,
  'funded-by': $localize`:@@works.fundedBy:Funded by`,
}

export const WorkRelationshipsHintsLabels = {
  self: $localize`:@@works.selfDescription:The identifier applies to the work itself. For example, a DOI for a book chapter.`,
  'part-of': $localize`:@@works.partOfDescription:The identifier applies to part of a larger work. For example, the ISBN of the book in which the work was published.`,
  'version-of': $localize`:@@works.versionOfDescription:The identifier applies to an alternate version of the work. For example, an earlier draft of an article.`,
  'funded-by': $localize`:@@works.fundedByDescription:The identifier applies to the work that is linked to a funding.`,
}
export interface Work {
  visibility: any
  errors: any[] // TODO is this always empty?
  publicationDate: MonthDayYearDate
  putCode: any
  shortDescription?: Value
  url?: Value
  journalTitle?: Value
  languageCode?: Value
  languageName?: Value
  citation?: Citation
  countryCode?: Value
  countryName?: Value
  contributors?: [any] // TODO is this always empty?
  workExternalIdentifiers: ExternalIdentifier[]
  source: string
  sourceName: string
  title: Value
  subtitle?: Value
  translatedTitle?: any // TODO is this always empty?
  workCategory?: Value
  workType: Value
  dateSortString?: string
  createdDate?: MonthDayYearDate
  lastModified?: MonthDayYearDate
  userSource: boolean
  checked: boolean
}
