import { SERVICE_IMAGE_OVERRIDES } from './serviceImageOverrides';
import heroBg from '@/src/assets/images/hero_construction_bg_1790357507939.jpg';
import paverYellow from '@/src/assets/images/asphalt_paver_yellow_1790357522181.jpg';
import paverBlue from '@/src/assets/images/asphalt_paver_blue_1790357540660.jpg';
import roller from '@/src/assets/images/road_roller_compactor_1790357558562.jpg';
import excavator from '@/src/assets/images/excavator_drain_work_1790357573378.jpg';
import gabion from '@/src/assets/images/gabion_retaining_wall_1790357588692.jpg';
import culvert from '@/src/assets/images/culvert_installation_1790357605211.jpg';
import coring from '@/src/assets/images/road_coring_test_1790357620747.jpg';
import concreteYard from '@/src/assets/images/concrete_yard_slab_1790357633326.jpg';
import epoxy from '@/src/assets/images/epoxy_flooring_1790357647162.jpg';
import zahidPortrait from '@/src/assets/images/zahid_nawawi_md_1790357661108.jpg';
import zaihidahPortrait from '@/src/assets/images/zaihidah_nawawi_1790357677152.jpg';
import lorry from '@/src/assets/images/tipper_lorry_truck_1790357694837.jpg';
import plantationRoad from '@/src/assets/images/plantation_farm_road_1790357709214.jpg';

export const PHOTO_REGISTRY = {
  heroBg,
  paverYellow,
  paverBlue,
  roller,
  excavator,
  gabion,
  culvert,
  coring,
  concreteYard,
  epoxy,
  zahidPortrait,
  zaihidahPortrait,
  lorry,
  plantationRoad,
};

/**
 * Returns the relevant real photographic asset for any asset ID or fallback category.
 */
export function getPhotoForAsset(assetId: string, category?: string): string {
  if (SERVICE_IMAGE_OVERRIDES[assetId]) return SERVICE_IMAGE_OVERRIDES[assetId];
  // Direct ID mappings
  switch (assetId) {
    case 'A011':
      return zahidPortrait;
    case 'A012':
      return zaihidahPortrait;
    case 'A014':
    case 'A103':
      return paverYellow;
    case 'A015':
    case 'A064':
    case 'A104':
      return roller;
    case 'A016':
    case 'A063':
      return paverBlue;
    case 'A017':
    case 'A106':
      return excavator;
    case 'A102':
    case 'A105':
    case 'A107':
      return lorry;

    // Road construction & premix
    case 'A068':
    case 'A069':
    case 'A070':
    case 'A071':
      return heroBg;

    // Plantation / farm roads
    case 'A072':
    case 'A073':
    case 'A074':
      return plantationRoad;

    // Gabion structures
    case 'A075':
    case 'A076':
    case 'A077':
      return gabion;

    // Drain excavation
    case 'A078':
    case 'A079':
    case 'A080':
    case 'A081':
      return excavator;

    // Culvert works
    case 'A082':
    case 'A084':
    case 'A085':
      return culvert;

    // Road coring test
    case 'A086':
    case 'A087':
      return coring;

    // Concrete yards & paving
    case 'A088':
    case 'A089':
    case 'A092':
    case 'A093':
      return concreteYard;

    // Epoxy floor coating
    case 'A090':
    case 'A091':
      return epoxy;

    // M&E and building fitout
    case 'A094':
    case 'A095':
      return epoxy;
    case 'A096':
    case 'A097':
      return concreteYard;
    case 'A098':
    case 'A100':
    case 'A101':
      return epoxy;

    // Hero & brochure decorative
    case 'A004':
    case 'A005':
      return heroBg;
    case 'A006':
      return paverYellow;
    case 'A007':
      return excavator;
    case 'A008':
      return roller;
    case 'A009':
      return gabion;
    case 'A010':
      return culvert;
  }

  // Category fallback mappings
  if (category) {
    if (category.includes('road') || category.includes('patching') || category.includes('hump')) {
      return heroBg;
    }
    if (category.includes('farm') || category.includes('plantation')) {
      return plantationRoad;
    }
    if (category.includes('gabion')) {
      return gabion;
    }
    if (category.includes('drain')) {
      return excavator;
    }
    if (category.includes('culvert')) {
      return culvert;
    }
    if (category.includes('coring')) {
      return coring;
    }
    if (category.includes('concrete')) {
      return concreteYard;
    }
    if (category.includes('epoxy') || category.includes('fitout')) {
      return epoxy;
    }
    if (category.includes('team')) {
      return zahidPortrait;
    }
    if (category.includes('rental')) {
      return paverYellow;
    }
  }

  // Numerical grouping fallback for portfolio items (A018 - A062)
  const num = parseInt(assetId.replace(/\D/g, ''), 10);
  if (!isNaN(num)) {
    if (num >= 18 && num <= 27) return heroBg; // road patching
    if (num >= 28 && num <= 35) return paverYellow; // speed humps & premix
    if (num >= 36 && num <= 43) return gabion; // gabion works
    if (num >= 44 && num <= 51) return excavator; // drain excavation
    if (num >= 52 && num <= 57) return culvert; // culverts
    if (num >= 58 && num <= 62) return concreteYard; // concrete slabs
  }

  return heroBg;
}
