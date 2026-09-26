import { ProjectRecord } from "@/src/types";

export interface PhotoOnlyGallery {
  id: string;
  titleMs: string;
  titleEn: string;
  category: string;
  assetIds: string[];
  descMs: string;
  descEn: string;
  sourceNoteMs: string;
  sourceNoteEn: string;
}

export const COMPLETED_PROJECTS: ProjectRecord[] = [
  {
    id: "P01",
    code: "P01",
    titleMs: "Pembersihan Longkang Zon 2 (Fasa 1), Kawasan Kampung Koh",
    titleEn: "Drainage Cleaning Zone 2 (Phase 1), Kampung Koh Area",
    client: "Majlis Perbandaran Manjung (MPM)",
    dateStr: "2025",
    dateType: "document",
    category: "drainage",
    pdfRef: "Profil p. 28",
    scopeMs: "Kerja-kerja pembersihan longkang Zon 2 (Fasa 1) melibatkan pembuangan kelodak, sampah sarap dan melancarkan aliran saliran awam di kawasan Kampung Koh.",
    scopeEn: "Drainage clearing works in Zone 2 (Phase 1) comprising silt removal, debris clearing, and public watercourse unblocking in Kampung Koh area.",
    assetIds: ["ILL-excavator"],
    type: "completed",
    isPublic: true
  },
  {
    id: "P02",
    code: "P02",
    titleMs: "Senggaraan & Pembaikan Keseluruhan Siling Terkopek / Usang di Martial Hat, Kompleks Sukan",
    titleEn: "Maintenance & Complete Repair of Peeling/Worn Ceiling at Martial Hat, Sports Complex",
    client: "Markas Pangkalan Lumut (TLDM)",
    dateStr: "Mac 2025",
    dateType: "document",
    category: "maintenance",
    pdfRef: "Profil ms. 29–30",
    scopeMs: "Kerja penggantian dan pembaikan siling yang terkopek dan usang di fasiliti Martial Hat, Kompleks Sukan Pangkalan TLDM Lumut.",
    scopeEn: "Comprehensive replacement and repair of deteriorated/peeling ceiling panels at Martial Hat facility, Lumut Naval Base Sports Complex.",
    assetIds: ["ILL-epoxy"],
    type: "completed",
    isPublic: true
  },
  {
    id: "P03",
    code: "P03",
    titleMs: "Pembaikan Pagar / Tiang SK Pangkalan II serta Siling, Cat Tandas Lelaki & Paip Tangki Utama Masjid An-Nur",
    titleEn: "Perimeter Fence Repairs at SK Pangkalan II & Ceiling, Male Toilet Painting and Main Tank Piping at An-Nur Mosque",
    client: "Markas Pangkalan Lumut (TLDM)",
    dateStr: "November 2024",
    dateType: "document",
    category: "building",
    pdfRef: "Profil ms. 31–33",
    scopeMs: "Pembaikan tiang dan pagar sekolah SK Pangkalan II; penggantian siling dan pengecatan tandas lelaki serta pembaharuan paip tangki utama Masjid An-Nur, Pangkalan TLDM Lumut.",
    scopeEn: "Repair of perimeter fencing/posts at SK Pangkalan II; ceiling renewals and male washroom repainting plus main water tank piping at An-Nur Mosque, Lumut Naval Base.",
    assetIds: ["ILL-concreteYard"],
    type: "completed",
    isPublic: true
  },
  {
    id: "P04",
    code: "P04",
    titleMs: "Pembekalan Minyak Outboard Motor Gear GL-4",
    titleEn: "Supply of Outboard Motor Gear GL-4 Lubricant",
    client: "Depot Bantuan Barat, TLDM Lumut",
    dateStr: "September 2024",
    dateType: "document",
    category: "supply",
    pdfRef: "Profil ms. 34–35",
    scopeMs: "Pembekalan minyak pelincir marin gred Outboard Motor Gear GL-4 mengikut spesifikasi perolehan pertahanan.",
    scopeEn: "Procurement and delivery of Outboard Motor Gear GL-4 marine-grade lubricant per naval supply specifications.",
    assetIds: ["ILL-plantationRoad"],
    type: "completed",
    isPublic: true
  },
  {
    id: "P05",
    code: "P05",
    titleMs: "Pembekalan & Penghantaran Sudut Anugerah KD Malaya, Carta Organisasi Piket Bomba, Sel JKPP & MKPL serta Papan Dasar KKP",
    titleEn: "Supply & Delivery of KD Malaya Award Corner, Fire Picket Org Charts, JKPP & MKPL Technical Office Panels and OSH Policy Boards",
    client: "Markas Pangkalan Lumut (TLDM)",
    dateStr: "Ogos 2023",
    dateType: "document",
    category: "supply",
    pdfRef: "Profil ms. 36–38",
    scopeMs: "Fabrikasi, pembekalan dan pemasangan papan paparan berbingkai termasuk Sudut Anugerah KD Malaya, carta organisasi dan papan dasar keselamatan & kesihatan pekerjaan.",
    scopeEn: "Fabrication, delivery, and mounting of framed display units including KD Malaya Award showcase, organization charts, and Occupational Safety & Health (OSH) noticeboards.",
    assetIds: ["ILL-concreteYard"],
    type: "completed",
    isPublic: true
  },
  {
    id: "P06",
    code: "P06",
    titleMs: "Senggaraan Jubin Lantai Bilik Sejuk Beku, Bilik Sejuk Dingin & Lobi KD Mahawangsa",
    titleEn: "Floor Tile Maintenance for Freezer Room, Cold Storage & Lobby of KD Mahawangsa",
    client: "Markas Pemerintahan Armada Barat",
    dateStr: "Julai 2023",
    dateType: "document",
    category: "maintenance",
    pdfRef: "Profil ms. 39–44",
    scopeMs: "Kerja penggantian dan penyelenggaraan jubin lantai tahan lasak bagi kawasan bilik sejuk beku, ruang sejuk dingin dan lobi kapal tentera laut KD Mahawangsa.",
    scopeEn: "Heavy-duty commercial floor tiling removal, substrate leveling, and non-slip hygienic tile installation across cold storage, freezer compartments, and lobby on naval vessel KD Mahawangsa.",
    assetIds: ["ILL-epoxy"],
    type: "completed",
    isPublic: true
  },
  {
    id: "P07",
    code: "P07",
    titleMs: "Penyenggaraan Jalan-Jalan Persekutuan di Negeri Perak, Pakej Rutin MJG-1",
    titleEn: "Maintenance of Federal Roads in Perak State, Routine Package MJG-1",
    client: "Belati Wangsa (M) Sdn. Bhd.",
    dateStr: "20 Mac 2023 – 28 Feb 2024",
    dateType: "contract",
    category: "road",
    pdfRef: "Profil ms. 48 (Surat Setuju Terima: 6 Mac 2023)",
    scopeMs: "Kerja-kerja penyenggaraan rutin jalan persekutuan bagi pakej daerah Manjung (MJG-1) merangkumi penyelenggaraan turapan premix, perparitan dan keselamatan jalan.",
    scopeEn: "Routine federal highway maintenance for Manjung district package (MJG-1), including asphalt premix patching, drainage maintenance, and road reserve upkeep.",
    assetIds: ["ILL-heroBg"],
    type: "completed",
    attributionNoteMs: "Tarikh yang dinyatakan adalah tarikh tempoh kontrak (20 Mac 2023 – 28 Februari 2024) berpandukan dokumen Surat Setuju Terima bertarikh 6 Mac 2023.",
    attributionNoteEn: "Stated dates reflect contractual term (20 March 2023 – 28 February 2024) based on Letter of Acceptance dated 6 March 2023.",
    isPublic: true
  }
];

export const SUPPORTING_RECORDS: ProjectRecord[] = [
  {
    id: "R01",
    code: "R01",
    titleMs: "Membaik Pulih / Menyelenggara Kedai Pejabat, Stor, Pasar Majlis & Kerja Berkaitan di Sitiawan",
    titleEn: "Refurbishment / Maintenance of Office Lots, Stores, Municipal Markets & Related Works in Sitiawan",
    client: "Majlis Perbandaran Manjung (MPM)",
    dateStr: "Julai 2023",
    dateType: "document",
    category: "maintenance",
    pdfRef: "Profil ms. 45",
    scopeMs: "Kerja baik pulih dan penyenggaraan kemudahan awam pihak berkuasa tempatan di Sitiawan.",
    scopeEn: "Refurbishment and facility maintenance of municipal lots and market premises in Sitiawan.",
    type: "supporting",
    attributionNoteMs: "Nota Sumber: Dokumen perolehan ini dialamatkan kepada BMJ MAJU 77 ENTERPRISE, bukan BMJ Energy Service And Trading. Dokumen ini tidak membuktikan hubungan antara kedua-dua entiti. Rekod ini bukan kontrak BMJ Energy.",
    attributionNoteEn: "Source Note: This procurement document is addressed to BMJ MAJU 77 ENTERPRISE, not BMJ Energy Service And Trading. It does not establish a relationship between the two entities. This record is not a BMJ Energy contract.",
    isPublic: true
  },
  {
    id: "R02",
    code: "R02",
    titleMs: "Pesanan Sekolah, SK Seri Bayu, Kompleks Sekolah Wawasan Manjung",
    titleEn: "School Purchase Order, SK Seri Bayu, Kompleks Sekolah Wawasan Manjung",
    client: "SK Seri Bayu, Manjung",
    dateStr: "Rekod Dalaman",
    dateType: "document",
    category: "maintenance",
    pdfRef: "Profil ms. 46",
    scopeMs: "Pesanan penyelenggaraan / pembekalan sekolah.",
    scopeEn: "School facility maintenance / supplies order.",
    type: "supporting",
    attributionNoteMs: "Butiran skop dan tarikh cetakan asal terlalu kabur untuk pengesahan mutlak; disimpan sebagai rujukan arkib data sahaja.",
    attributionNoteEn: "Original scope and date print is too faint for definitive verification; kept as internal reference.",
    isPublic: false
  },
  {
    id: "R03",
    code: "R03",
    titleMs: "Pelantikan Kontraktor Pembekalan Barangan & Perkhidmatan Am Lumut Maritime Terminal",
    titleEn: "General Goods & Services Contractor Appointment, Lumut Maritime Terminal Sdn. Bhd.",
    client: "Lumut Maritime Terminal Sdn. Bhd.",
    dateStr: "1 Julai 2024",
    dateType: "appointment",
    category: "appointment",
    pdfRef: "Profil ms. 47",
    scopeMs: "Surat pendaftaran dan pelantikan sebagai kontraktor pembekalan barangan dan perkhidmatan am di Lumut Maritime Terminal.",
    scopeEn: "Registration and appointment letter as a qualified contractor for general goods and services with Lumut Maritime Terminal.",
    type: "supporting",
    attributionNoteMs: "Kategori Rekod: Surat pelantikan kontraktor berkelayakan, bukan laporan siap projek fizikal tertentu.",
    attributionNoteEn: "Record Classification: Approved contractor registration letter, not a specific completed physical project.",
    isPublic: true
  }
];

export const PHOTO_ONLY_ARCHIVES: PhotoOnlyGallery[] = [
  {
    id: "display-boards",
    titleMs: "Sudut Anugerah & Papan Paparan KD Malaya",
    titleEn: "KD Malaya Award Corner & Display Boards",
    category: "Pembekalan",
    assetIds: ["A018", "A019", "A020", "A021", "A022", "A023", "A024", "A025"],
    descMs: "Foto papan paparan berbingkai dan kerja pemasangan di lokasi. Rekod visual ini diasingkan daripada kontrak bertarikh.",
    descEn: "Original photographs of framed display boards and on-site installation, presented separately from dated contract records.",
    sourceNoteMs: "Rekod visual papan paparan.",
    sourceNoteEn: "Display-board visual record."
  },
  {
    id: "mosaic-floor-maintenance",
    titleMs: "Penyelenggaraan Lantai Mozek",
    titleEn: "Mosaic Floor Maintenance",
    category: "Penyelenggaraan",
    assetIds: ["A026", "A027", "A028", "A029", "A030", "A031", "A032", "A033"],
    descMs: "Persediaan permukaan dan kerja lantai dalam ruang dalaman, termasuk keadaan sebelum dan selepas kerja.",
    descEn: "Interior floor preparation and maintenance, showing work in progress and finished surfaces.",
    sourceNoteMs: "Rekod visual penyelenggaraan lantai.",
    sourceNoteEn: "Floor-maintenance visual record."
  },
  {
    id: "industrial-floor-repair",
    titleMs: "Senggaraan Mozek KD Mahawangsa, TLDM Lumut",
    titleEn: "KD Mahawangsa Mosaic Maintenance, TLDM Lumut",
    category: "Penyelenggaraan",
    assetIds: ["A034", "A035", "A036", "A037", "A038", "A039", "A040", "A041"],
    descMs: "Kerja pembaikan lantai, penyediaan bahan dan kemasan permukaan dalam ruang industri.",
    descEn: "Floor repair, material preparation and completed surfaces in an industrial interior.",
    sourceNoteMs: "Rekod visual pembaikan lantai.",
    sourceNoteEn: "Floor-repair visual record."
  },
  {
    id: "mpm-road-patching",
    titleMs: "Kerja Tampalan Jalan Asfalt (MPM)",
    titleEn: "Road Asphalt Patching Works (MPM Area)",
    category: "Jalan Raya",
    assetIds: ["A042", "A043", "A044", "A045"],
    descMs: "Dokumentasi fotografi kerja pemotongan tepi jalan, hamparan asfalt premix panas, dan pemadatan menggunakan tandem roller di kawasan Majlis Perbandaran Manjung.",
    descEn: "Photographic log showing asphalt edge sawing, hot premix laying, and compaction using tandem roller across MPM jurisdiction.",
    sourceNoteMs: "Foto lampiran profil syarikat ms. 56 (A042–A045). Disimpan sebagai rekod visual tersendiri.",
    sourceNoteEn: "Company profile appendix photos p. 56 (A042–A045). Preserved as standalone visual documentation."
  },
  {
    id: "mpm-road-humps",
    titleMs: "Pengecatan Bonggol Jalan Berpantul (Road Hump Markings)",
    titleEn: "Reflective Road Hump Markings",
    category: "Jalan Raya",
    assetIds: ["A046", "A047", "A048", "A049"],
    descMs: "Aplikasi cat termoplastik dan pemantul cahaya warna kuning & putih bercorak chevron pada bonggol jalan bagi meningkatkan tahap keselamatan lalu lintas.",
    descEn: "Application of high-visibility yellow and white reflective chevron marking paint on road calming humps for traffic safety.",
    sourceNoteMs: "Foto lampiran profil syarikat ms. 57 (A046–A049).",
    sourceNoteEn: "Company profile appendix photos p. 57 (A046–A049)."
  },
  {
    id: "mpm-door-repairs",
    titleMs: "Pembaikan Pintu & Perkakasan Fasiliti",
    titleEn: "Facility Door & Hardware Maintenance",
    category: "Penyelenggaraan",
    assetIds: ["A050", "A051", "A052", "A053"],
    descMs: "Kerja menukar engsel, meratakan bingkai pintu, memasang tombol kunci keselamatan, serta kemasan cat perlindungan pintu premis.",
    descEn: "Hinges realignment, frame leveling, heavy-duty lockset installations, and protective paint finishing for institutional facility doors.",
    sourceNoteMs: "Foto lampiran profil syarikat ms. 58 (A050–A053).",
    sourceNoteEn: "Company profile appendix photos p. 58 (A050–A053)."
  },
  {
    id: "mpm-wall-socket",
    titleMs: "Pembaikan Dinding & Pendawaian Soket",
    titleEn: "Wall Plastering & Socket Electrical Repairs",
    category: "Penyelenggaraan",
    assetIds: ["A054", "A055", "A056", "A057"],
    descMs: "Kerja menampal rekahan dinding batu, pemasangan konduit pendawaian elektrik tersembunyi, penggantian soket suis, dan mengecat semula permukaan.",
    descEn: "Masonry crack patching, concealed electrical conduit chasing, socket replacement, and surface refinishing.",
    sourceNoteMs: "Foto lampiran profil syarikat ms. 59 (A054–A057).",
    sourceNoteEn: "Company profile appendix photos p. 59 (A054–A057)."
  },
  {
    id: "mpm-traffic-mirrors",
    titleMs: "Pemasangan Cermin Keselamatan Simpang (Traffic Convex Mirrors)",
    titleEn: "Convex Safety Traffic Mirror Installations",
    category: "Keselamatan Jalan",
    assetIds: ["A058", "A059", "A060", "A061"],
    descMs: "Pemasangan tiang besi tahan karat, asas tapak konkrit, dan pelekap cermin cembung cembung akrilik di persimpangan jalan bagi menghapuskan titik buta kenderaan.",
    descEn: "Installation of galvanized steel posts, concrete footing, and heavy-duty outdoor convex mirrors at blind corners for traffic visibility.",
    sourceNoteMs: "Foto lampiran profil syarikat ms. 60 (A058–A061).",
    sourceNoteEn: "Company profile appendix photos p. 60 (A058–A061)."
  }
];

export const FAQS_DATA = [
  {
    qMs: "Bagaimanakah cara untuk mendapatkan sebut harga projek atau sewaan jentera?",
    qEn: "How do I request a quotation for a project or machinery rental?",
    aMs: "Isi borang di laman web ini untuk membuka draf mesej WhatsApp atau klik butang WhatsApp rasmi kami. Nyatakan jenis kerja atau jentera, lokasi tapak dan tempoh yang dicadangkan. Semua permintaan tertakluk kepada semakan dan pengesahan.",
    aEn: "Use the website form to open a WhatsApp message draft or click our official WhatsApp button. Specify the work or equipment, site location and proposed timeline. All requests are subject to review and confirmation."
  },
  {
    qMs: "Di manakah liputan kawasan perkhidmatan BMJ Energy?",
    qEn: "What areas are covered by BMJ Energy?",
    aMs: "BMJ Energy berpangkalan di Manjung, Perak. Hubungi kami dengan lokasi dan skop projek anda; liputan tapak tertakluk kepada semakan dan pengesahan.",
    aEn: "BMJ Energy is based in Manjung, Perak. Enquire with your site location and project scope; site coverage is subject to review and confirmation."
  },
  {
    qMs: "Adakah sewaan jentera berat disediakan bersama pemandu / operator?",
    qEn: "Is heavy equipment rental provided with an operator?",
    aMs: "Nyatakan keperluan operator semasa membuat pertanyaan. Ketersediaan jentera, aturan operator dan syarat sewaan perlu disemak dan disahkan oleh BMJ Energy.",
    aEn: "Specify your operator requirements when enquiring. Equipment availability, operator arrangements and rental terms must be reviewed and confirmed by BMJ Energy."
  },
  {
    qMs: "Bagaimanakah prosedur penghantaran jentera ke tapak bina?",
    qEn: "How is machinery mobilized to the job site?",
    aMs: "Kongsi lokasi tapak, keadaan akses dan jentera yang diperlukan. Kaedah pengangkutan, ketersediaan dan sebarang caj mobilisasi tertakluk kepada semakan serta pengesahan dalam sebut harga.",
    aEn: "Share the site location, access conditions and equipment required. Transport arrangements, availability and any mobilisation charges are subject to review and confirmation in the quotation."
  },
  {
    qMs: "Adakah BMJ Energy berdaftar dengan Suruhanjaya Syarikat Malaysia?",
    qEn: "Is BMJ Energy legally registered in Malaysia?",
    aMs: "Ya, BMJ Energy Service And Trading berdaftar secara sah dengan nombor pendaftaran perniagaan 202103068069 (NS0249805-T), ditubuhkan pada 9 Mac 2021 di Manjung, Perak.",
    aEn: "Yes, BMJ Energy Service And Trading is fully registered under business registration number 202103068069 (NS0249805-T), established on 9 March 2021 in Manjung, Perak."
  }
];
