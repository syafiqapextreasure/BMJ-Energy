export type Language = 'ms' | 'en';

export type RouteId = 'home' | 'about' | 'services' | 'painting' | 'portfolio' | 'rental' | 'contact';

export interface AssetCoordinate {
  id: string;
  row: number;
  col: number;
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  category: string;
  profileRef?: string;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  titleMs: string;
  titleEn: string;
  shortDescMs: string;
  shortDescEn: string;
  scopeMs: string[];
  scopeEn: string[];
  assetIds: string[];
  primaryAssetId: string;
  iconName: string;
}

export interface EquipmentItem {
  id: string;
  nameMs: string;
  nameEn: string;
  typeMs: string;
  typeEn: string;
  assetIds: string[];
  primaryAssetId: string;
  descriptionMs: string;
  descriptionEn: string;
  highlightsMs: string[];
  highlightsEn: string[];
  termsMs: string;
  termsEn: string;
}

export interface ProjectRecord {
  id: string;
  code: string;
  titleMs: string;
  titleEn: string;
  client: string;
  dateStr: string;
  dateType: 'contract' | 'document' | 'completion_claim' | 'appointment';
  category: 'drainage' | 'maintenance' | 'building' | 'supply' | 'road' | 'appointment';
  pdfRef: string;
  assetIds?: string[];
  scopeMs: string;
  scopeEn: string;
  type: 'completed' | 'supporting' | 'photo_only';
  attributionNoteMs?: string;
  attributionNoteEn?: string;
  isPublic: boolean;
}

export interface OrgNode {
  id: string;
  name: string;
  roleMs: string;
  roleEn: string;
  assetId?: string;
  branch?: string;
  children?: OrgNode[];
}

export interface FaqItem {
  qMs: string;
  qEn: string;
  aMs: string;
  aEn: string;
}
