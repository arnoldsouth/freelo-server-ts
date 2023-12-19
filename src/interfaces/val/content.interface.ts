export interface ContentDto {
  version: string;
  characters: ContentItemDto[];
  maps: ContentItemDto[];
  chromas: ContentItemDto[];
  skins: ContentItemDto[];
  skinLevels: ContentItemDto[];
  equips: ContentItemDto[];
  gameModes: ContentItemDto[];
  sprays: ContentItemDto[];
  sprayLevels: ContentItemDto[];
  charm: ContentItemDto[];
  charmLevels: ContentItemDto[];
  playerCards: ContentItemDto[];
  playerTitles: ContentItemDto[];
  acts: ActDto[];
}

export interface ContentItemDto {
  name: string;
  localizedNames: LocalizedNamesDto;
  id: string;
  assetName: string;
  assetPath: string;
}

export interface ActDto {
  name: string;
  localizedNames: LocalizedNamesDto;
  id: string;
  isActive: boolean;
}

export interface LocalizedNamesDto {
  ar_AE: string;
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  id_ID: string;
  it_IT: string;
  ja_JP: string;
  ko_KR: string;
  pl_PL: string;
  pt_BR: string;
  ru_RU: string;
  th_TH: string;
  tr_TR: string;
  vi_VN: string;
  zh_CN: string;
  zh_TW: string;
  // ar_AE: 'ar-AE';
  // de_DE: 'de-DE';
  // en_GB: 'en-GB';
  // en_US: 'en-US';
  // es_ES: 'es-ES';
  // es_MX: 'es-MX';
  // fr_FR: 'fr-FR';
  // id_ID: 'id-ID';
  // it_IT: 'it-IT';
  // ja_JP: 'ja-JP';
  // ko_KR: 'ko-KR';
  // pl_PL: 'pl-PL';
  // pt_BR: 'pt-BR';
  // ru_RU: 'ru-RU';
  // th_TH: 'th-TH';
  // tr_TR: 'tr-TR';
  // vi_VN: 'vi-VN';
  // zh_CN: 'zh-CN';
  // zh_TW: 'zh-TW';
}
