export const PAINTING_SERVICE_IMAGES = {
  hero: '/images/services/painting/paint-hero.jpg',
  tools: '/images/services/painting/paint-tools.jpg',
  ceilingSteel: '/images/services/painting/ceiling-steel.jpg',
  ceilingFinished: '/images/services/painting/ceiling-finished.jpg',
  waterproofingRoof: '/images/services/painting/waterproofing-roof.jpg',
  wallExterior: '/images/services/painting/wall-exterior.jpg',
  apartmentFacade: '/images/services/painting/apartment-facade.jpg',
  floorCoating: '/images/services/painting/floor-coating.jpg',
  toiletRepair: '/images/services/painting/toilet-repair.jpg',
  paintBrands: '/images/services/painting/paint-brands.jpg',
};

export const PAINTING_PROJECTS = [
  {
    titleMs: 'Mengecat Siling Kompleks Sukan TLDM Lumut',
    titleEn: 'Ceiling Painting at TLDM Lumut Sports Complex',
    image: PAINTING_SERVICE_IMAGES.ceilingSteel,
  },
  {
    titleMs: 'Mengecat Siling Masjid An-Nur TLDM Lumut',
    titleEn: 'Ceiling Painting at Masjid An-Nur TLDM Lumut',
    image: PAINTING_SERVICE_IMAGES.ceilingFinished,
  },
  {
    titleMs: 'Lapisan Epoxy Coating Floor System, SK Seri Bayu',
    titleEn: 'Epoxy Floor Coating System at SK Seri Bayu',
    image: PAINTING_SERVICE_IMAGES.floorCoating,
  },
  {
    titleMs: 'PU Waterproofing Coating, Wisma Samudera TLDM Lumut',
    titleEn: 'PU Waterproofing Coating at Wisma Samudera TLDM Lumut',
    image: PAINTING_SERVICE_IMAGES.waterproofingRoof,
  },
  {
    titleMs: 'Mengecat Bangunan Persekutuan Gerik & Teluk Intan',
    titleEn: 'Federal Building Repainting in Gerik & Teluk Intan',
    image: PAINTING_SERVICE_IMAGES.wallExterior,
  },
  {
    titleMs: 'Mengecat Bangunan Apartmen Pulau Pangkor',
    titleEn: 'Apartment Building Painting at Pulau Pangkor',
    image: PAINTING_SERVICE_IMAGES.apartmentFacade,
  },
];

const paintingPhoto = (project: number, stage: 'before' | 'after', image: number) =>
  `/images/services/painting/extracted-projects/project-${String(project).padStart(2, '0')}/${stage}-${String(image).padStart(2, '0')}.jpg`;

export const PAINTING_CATALOG_PROJECTS = [
  {
    titleMs: 'Projek Mengecat Siling di Kompleks Sukan TLDM Lumut',
    titleEn: 'Ceiling Painting at TLDM Lumut Sports Complex',
    beforeImages: [paintingPhoto(1, 'before', 1), paintingPhoto(1, 'before', 2), paintingPhoto(1, 'before', 3), paintingPhoto(1, 'before', 4), paintingPhoto(1, 'before', 5), paintingPhoto(1, 'before', 6)],
    afterImages: [paintingPhoto(1, 'after', 1), paintingPhoto(1, 'after', 2), paintingPhoto(1, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Siling di Masjid An-Nur TLDM Lumut',
    titleEn: 'Ceiling Painting at Masjid An-Nur TLDM Lumut',
    beforeImages: [paintingPhoto(2, 'before', 1), paintingPhoto(2, 'before', 2), paintingPhoto(2, 'before', 3), paintingPhoto(2, 'before', 4), paintingPhoto(2, 'before', 5), paintingPhoto(2, 'before', 6)],
    afterImages: [paintingPhoto(2, 'after', 1), paintingPhoto(2, 'after', 2), paintingPhoto(2, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Lapisan Epoxy Coating Floor System di SK Seri Bayu',
    titleEn: 'Epoxy Floor Coating System at SK Seri Bayu',
    beforeImages: [paintingPhoto(3, 'before', 1), paintingPhoto(3, 'before', 2), paintingPhoto(3, 'before', 3), paintingPhoto(3, 'before', 4), paintingPhoto(3, 'before', 5), paintingPhoto(3, 'before', 6)],
    afterImages: [paintingPhoto(3, 'after', 1), paintingPhoto(3, 'after', 2), paintingPhoto(3, 'after', 3)],
  },
  {
    titleMs: 'Projek Menyapu 2 Lapisan PU Waterproofing Coating di Wisma Samudera TLDM Lumut',
    titleEn: 'Two-Layer PU Waterproofing Coating at Wisma Samudera TLDM Lumut',
    beforeImages: [paintingPhoto(4, 'before', 1), paintingPhoto(4, 'before', 2), paintingPhoto(4, 'before', 3), paintingPhoto(4, 'before', 4), paintingPhoto(4, 'before', 5), paintingPhoto(4, 'before', 6)],
    afterImages: [paintingPhoto(4, 'after', 1), paintingPhoto(4, 'after', 2), paintingPhoto(4, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Bangunan Persekutuan Gerik, Perak',
    titleEn: 'Federal Building Painting at Gerik, Perak',
    beforeImages: [paintingPhoto(5, 'before', 1), paintingPhoto(5, 'before', 2), paintingPhoto(5, 'before', 3), paintingPhoto(5, 'before', 4), paintingPhoto(5, 'before', 5), paintingPhoto(5, 'before', 6)],
    afterImages: [paintingPhoto(5, 'after', 1), paintingPhoto(5, 'after', 2), paintingPhoto(5, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Bangunan Rumah Apartmen di Pulau Pangkor',
    titleEn: 'Apartment Building Painting at Pulau Pangkor',
    beforeImages: [paintingPhoto(6, 'before', 1), paintingPhoto(6, 'before', 2), paintingPhoto(6, 'before', 3), paintingPhoto(6, 'before', 4), paintingPhoto(6, 'before', 5), paintingPhoto(6, 'before', 6)],
    afterImages: [paintingPhoto(6, 'after', 1), paintingPhoto(6, 'after', 2), paintingPhoto(6, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Kesan Air Meleleh di Blok A-30 Markas Pangkalan TLDM Lumut',
    titleEn: 'Water Stain Painting at Block A-30, TLDM Lumut Base',
    beforeImages: [paintingPhoto(7, 'before', 1), paintingPhoto(7, 'before', 2), paintingPhoto(7, 'before', 3), paintingPhoto(7, 'before', 4), paintingPhoto(7, 'before', 5), paintingPhoto(7, 'before', 6)],
    afterImages: [paintingPhoto(7, 'after', 1), paintingPhoto(7, 'after', 2), paintingPhoto(7, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Kesan Air Meleleh di KD Seri Manjung, Markas Pangkalan TLDM Lumut',
    titleEn: 'Water Stain Painting at KD Seri Manjung, TLDM Lumut Base',
    beforeImages: [paintingPhoto(8, 'before', 1), paintingPhoto(8, 'before', 2), paintingPhoto(8, 'before', 3), paintingPhoto(8, 'before', 4), paintingPhoto(8, 'before', 5), paintingPhoto(8, 'before', 6)],
    afterImages: [paintingPhoto(8, 'after', 1), paintingPhoto(8, 'after', 2), paintingPhoto(8, 'after', 3)],
  },
  {
    titleMs: 'Projek Membaikpulih Waterproofing Menggunakan Sika di Tandas Blok A-31 TLDM Lumut',
    titleEn: 'Sika Waterproofing Repair at Block A-31 Toilet, TLDM Lumut',
    beforeImages: [paintingPhoto(9, 'before', 1), paintingPhoto(9, 'before', 2), paintingPhoto(9, 'before', 3), paintingPhoto(9, 'before', 4), paintingPhoto(9, 'before', 5), paintingPhoto(9, 'before', 6)],
    afterImages: [paintingPhoto(9, 'after', 1), paintingPhoto(9, 'after', 2), paintingPhoto(9, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Bangunan Persekutuan Teluk Intan, Perak',
    titleEn: 'Federal Building Painting at Teluk Intan, Perak',
    beforeImages: [paintingPhoto(10, 'before', 1), paintingPhoto(10, 'before', 2), paintingPhoto(10, 'before', 3), paintingPhoto(10, 'before', 4), paintingPhoto(10, 'before', 5), paintingPhoto(10, 'before', 6)],
    afterImages: [paintingPhoto(10, 'after', 1), paintingPhoto(10, 'after', 2), paintingPhoto(10, 'after', 3)],
  },
  {
    titleMs: 'Projek Mengecat Bangunan Persekutuan Ipoh',
    titleEn: 'Federal Building Painting at Ipoh',
    beforeImages: [paintingPhoto(11, 'before', 1), paintingPhoto(11, 'before', 2), paintingPhoto(11, 'before', 3), paintingPhoto(11, 'before', 4), paintingPhoto(11, 'before', 5), paintingPhoto(11, 'before', 6)],
    afterImages: [paintingPhoto(11, 'after', 1), paintingPhoto(11, 'after', 2), paintingPhoto(11, 'after', 3)],
  }
];

export const PAINTING_SCOPE_MS = [
  'Pengecatan dalaman dan luaran untuk rumah, pejabat, fasiliti awam dan bangunan komersial.',
  'Kerja siling, dinding, besi, kayu, konkrit, plaster dan permukaan bertekstur.',
  'Epoxy floor coating, PU waterproofing coating dan kemasan perlindungan permukaan.',
  'Persediaan permukaan: cucian, scraping, skim, primer, touch-up dan kemasan akhir.',
  'Kaedah kerja selamat dengan pemilihan bahan mengikut keadaan tapak dan bajet pelanggan.',
];

export const PAINTING_SCOPE_EN = [
  'Interior and exterior painting for homes, offices, public facilities and commercial buildings.',
  'Ceiling, wall, steel, timber, concrete, plaster and decorative surface finishing.',
  'Epoxy floor coating, PU waterproofing coating and protective surface systems.',
  'Surface preparation including cleaning, scraping, skim coat, primer, touch-up and final finish.',
  'Safe work methods with material selection based on site condition and customer budget.',
];
