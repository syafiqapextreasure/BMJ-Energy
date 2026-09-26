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

const catalogPage = (page: number) => `/images/services/painting/catalog-projects/page-${String(page).padStart(2, '0')}.jpg`;

export const PAINTING_CATALOG_PROJECTS = [
  {
    titleMs: 'Projek Mengecat Siling di Kompleks Sukan TLDM Lumut',
    titleEn: 'Ceiling Painting at TLDM Lumut Sports Complex',
    before: catalogPage(3),
    after: catalogPage(4),
  },
  {
    titleMs: 'Projek Mengecat Siling di Masjid An-Nur TLDM Lumut',
    titleEn: 'Ceiling Painting at Masjid An-Nur TLDM Lumut',
    before: catalogPage(5),
    after: catalogPage(6),
  },
  {
    titleMs: 'Projek Mengecat Lapisan Epoxy Coating Floor System di SK Seri Bayu',
    titleEn: 'Epoxy Floor Coating System at SK Seri Bayu',
    before: catalogPage(7),
    after: catalogPage(8),
  },
  {
    titleMs: 'Projek Menyapu 2 Lapisan PU Waterproofing Coating di Wisma Samudera TLDM Lumut',
    titleEn: 'Two-Layer PU Waterproofing Coating at Wisma Samudera TLDM Lumut',
    before: catalogPage(9),
    after: catalogPage(10),
  },
  {
    titleMs: 'Projek Mengecat Bangunan Persekutuan Gerik, Perak',
    titleEn: 'Federal Building Painting at Gerik, Perak',
    before: catalogPage(11),
    after: catalogPage(12),
  },
  {
    titleMs: 'Projek Mengecat Bangunan Rumah Apartmen di Pulau Pangkor',
    titleEn: 'Apartment Building Painting at Pulau Pangkor',
    before: catalogPage(13),
    after: catalogPage(14),
  },
  {
    titleMs: 'Projek Mengecat Kesan Air Meleleh di Blok A-30 Markas Pangkalan TLDM Lumut',
    titleEn: 'Water Stain Painting at Block A-30, TLDM Lumut Base',
    before: catalogPage(15),
    after: catalogPage(16),
  },
  {
    titleMs: 'Projek Mengecat Kesan Air Meleleh di KD Seri Manjung, Markas Pangkalan TLDM Lumut',
    titleEn: 'Water Stain Painting at KD Seri Manjung, TLDM Lumut Base',
    before: catalogPage(17),
    after: catalogPage(18),
  },
  {
    titleMs: 'Projek Membaikpulih Waterproofing Menggunakan Sika di Tandas Blok A-31 TLDM Lumut',
    titleEn: 'Sika Waterproofing Repair at Block A-31 Toilet, TLDM Lumut',
    before: catalogPage(19),
    after: catalogPage(20),
  },
  {
    titleMs: 'Projek Mengecat Bangunan Persekutuan Teluk Intan, Perak',
    titleEn: 'Federal Building Painting at Teluk Intan, Perak',
    before: catalogPage(21),
    after: catalogPage(22),
  },
  {
    titleMs: 'Projek Mengecat Bangunan Persekutuan Ipoh',
    titleEn: 'Federal Building Painting at Ipoh',
    before: catalogPage(23),
    after: catalogPage(24),
  },
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
