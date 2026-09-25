import { ServiceItem } from "@/src/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "road-construction",
    num: "01",
    titleMs: "Pembinaan & Penyelenggaraan Jalan Raya",
    titleEn: "Road Construction & Maintenance",
    shortDescMs: "Perkhidmatan menurap asfalt premix, kerja pembaikan tampalan jalan (patching), bahu jalan, serta sistem perparitan jalan raya.",
    shortDescEn: "Asphalt premix resurfacing, pothole and pavement patching, road shoulders, and integrated road drainage works.",
    scopeMs: [
      "Penurapan semula premix (resurfacing) untuk laluan perumahan, industri dan komersial",
      "Kerja tampalan jalan berlubang (patching) dengan pemadatan jentera",
      "Penyelenggaraan dan penurapan bahu jalan (road shoulders)",
      "Pembersihan dan pembinaan longkang tepi jalan"
    ],
    scopeEn: [
      "Premix resurfacing for residential, commercial, and industrial roads",
      "Pothole patching with roller compaction and edge sealing",
      "Road shoulder construction, grading, and routine maintenance",
      "Roadside drainage reprofiling and culvert transitions"
    ],
    assetIds: ["A068", "A069", "A070"],
    primaryAssetId: "A068",
    iconName: "Truck"
  },
  {
    id: "plantation-roads",
    num: "02",
    titleMs: "Jalan Pertanian / Perladangan & Kerja Tanah",
    titleEn: "Agricultural / Plantation Roads & Earthworks",
    shortDescMs: "Pembinaan dan pemulihan laluan ladang sawit, perataan subgred, hamparan batu crusher run atau laterit, serta kawalan hakisan.",
    shortDescEn: "Construction and rehabilitation of estate and farm access roads, subgrade preparation, crusher run/laterite compaction, and erosion repairs.",
    scopeMs: [
      "Penjajaran laluan dan pembersihan tapak ladang",
      "Penyediaan dan pemadatan subgred tanah asal",
      "Hamparan dan pemadatan batu crusher run atau laterit tahan lasak",
      "Lapisan premix atau konkrit bagi seksyen cerun dan laluan utama",
      "Sistem saliran ladang dan pembaikan runtuhan hakisan jalan"
    ],
    scopeEn: [
      "Alignment setting and site clearing for agricultural access routes",
      "Subgrade grading and heavy compaction",
      "Crusher run or laterite spreading and rolling for all-weather access",
      "Premix or concrete paving on steep inclines and high-traffic sectors",
      "Plantation drain channels and erosion embankment restoration"
    ],
    assetIds: ["A072", "A073", "A074"],
    primaryAssetId: "A072",
    iconName: "Trees"
  },
  {
    id: "gabion-structures",
    num: "03",
    titleMs: "Struktur Gabion & Kawalan Hakisan",
    titleEn: "Gabion Structures & Erosion Control",
    shortDescMs: "Pemasangan sangkar batu gabion untuk pencegahan hakisan tebing sungai, kestabilan cerun tanah, dan dinding penahan.",
    shortDescEn: "Installation of heavy wire mesh rock gabion boxes for riverbank erosion protection, slope retention, and structural stabilization.",
    scopeMs: [
      "Kawalan hakisan cerun bukit dan tebing sungai",
      "Pemasangan sangkar dawai bersalut PVC/galvanised berketahanan tinggi",
      "Pengisian batu kuari berkualiti secara teratur bagi kestabilan struktur",
      "Pembinaan retaining wall gabion bertingkat mengikut spesifikasi tapak"
    ],
    scopeEn: [
      "Slope and riverbank erosion mitigation",
      "High-durability galvanized or PVC-coated wire gabion box installation",
      "Hand-packed graded quarry stone filling for structural density",
      "Multi-tiered retaining wall construction per engineering specifications"
    ],
    assetIds: ["A075", "A076", "A077"],
    primaryAssetId: "A075",
    iconName: "Shield"
  },
  {
    id: "drain-excavation",
    num: "04",
    titleMs: "Pengorekan & Pemulihan Saliran",
    titleEn: "Drain Excavation & Rehabilitation",
    shortDescMs: "Kerja mendalamkan longkang tanah, membersihkan kelodak (desilting), membentuk tebing longkang, dan pembuangan sisa korekan.",
    shortDescEn: "Excavation and desilting of drainage channels, reprofiling earth canals, bank stabilization, and compliant excavated spoil disposal.",
    scopeMs: [
      "Pembersihan kelodak, semak samun dan halangan di dalam parit",
      "Mendalamkan dan memperlebar saliran (desilting & reprofiling)",
      "Pembaikan dan pemadatan tebing longkang yang runtuh",
      "Pengangkutan dan pelupusan sisa korekan ke tapak yang dibenarkan"
    ],
    scopeEn: [
      "Debris, silt, and vegetative clearing in monsoon and agricultural drains",
      "Deepening and widening existing channels (desilting & reprofiling)",
      "Excavation and compaction of collapsed embankment slopes",
      "Transport and disposal of dredged material to approved disposal sites"
    ],
    assetIds: ["A078", "A079", "A080"],
    primaryAssetId: "A078",
    iconName: "Waves"
  },
  {
    id: "culverts",
    num: "05",
    titleMs: "Pembinaan Pembetung (Culverts)",
    titleEn: "Culvert Construction",
    shortDescMs: "Pemasangan pembetung paip konkrit (RCP), box culvert, struktur headwall, wing wall, serta kerja penimbusan tanah berperingkat.",
    shortDescEn: "Installation of reinforced concrete pipes (RCP), precast box culverts, headwalls, wing walls, and engineered backfilling.",
    scopeMs: [
      "Pemasangan reinforced concrete pipe (RCP) dan box culvert pelbagai saiz",
      "Pembinaan konkrit headwall dan wing wall untuk kawalan aliran air",
      "Kerja penimbusan semula (backfill) berperingkat dengan pemadatan padat",
      "Penyambungan aliran masuk dan keluar parit yang sempurna"
    ],
    scopeEn: [
      "Reinforced concrete pipe (RCP) and precast box culvert placement",
      "In-situ or precast headwalls and wing walls for scour control",
      "Layer-by-layer granular backfilling and mechanical compaction",
      "Inlet and outlet channel transitions and invert level checks"
    ],
    assetIds: ["A082", "A084", "A085"],
    primaryAssetId: "A082",
    iconName: "Layers"
  },
  {
    id: "coring-tests",
    num: "06",
    titleMs: "Ujian Coring Jalan Raya",
    titleEn: "Road Coring Test",
    shortDescMs: "Pengambilan sampel silinder asfalt dan konkrit menggunakan mesin coring untuk ujian ketebalan, mampatan, dan penyediaan laporan teknikal.",
    shortDescEn: "Extraction of cylindrical asphalt and concrete core samples for thickness measurement, density testing, reinstatement, and technical reports.",
    scopeMs: [
      "Penggerudian sampel teras asfalt dan konkrit di tapak bina",
      "Pemeriksaan ketebalan lapisan turapan mengikut spesifikasi",
      "Kerja penampalan dan pemulihan segera lubang coring (reinstatement)",
      "Penyediaan laporan teknikal sampel untuk semakan pihak berkuasa / perunding"
    ],
    scopeEn: [
      "On-site diamond core drilling of asphalt and concrete pavements",
      "Thickness and compaction compliance verification against project specs",
      "Immediate pothole reinstatement using high-grade premix patch",
      "Technical core log reporting for clients, consultants, and authorities"
    ],
    assetIds: ["A086", "A087", "A088"],
    primaryAssetId: "A086",
    iconName: "CheckCircle2"
  },
  {
    id: "concrete-paving",
    num: "07",
    titleMs: "Laman / Tapak Konkrit & Turapan",
    titleEn: "Concrete Yards & Paving",
    shortDescMs: "Pembinaan tapak konkrit industri, laluan masuk premis, pemasangan tetulang BRC, kemasan permukaan 'power float', serta sambungan kawalan suhu.",
    shortDescEn: "Construction of industrial concrete hardstands, apron slabs, BRC reinforcement, power float finishes, expansion joints, and curing.",
    scopeMs: [
      "Penyediaan tapak asas, lapisan pasir dan membran kalis lembap",
      "Pemasangan tetulang keluli dawai (BRC mesh) dan acuan tepi",
      "Tuangan konkrit gred bersesuaian dengan perataan jentera",
      "Kemasan power float licin atau kemasan berus anti-gelincir",
      "Pemotongan sambungan kawalan (control joints) dan rawatan pengawetan (curing)"
    ],
    scopeEn: [
      "Base preparation, subgrade compaction, and damp-proof membrane",
      "BRC steel wire mesh placement and boundary formwork",
      "Ready-mix concrete pouring, vibrating, and screeding",
      "Smooth power float or anti-slip broom finish texturing",
      "Expansion/crack-control joint saw-cutting and protective curing compound"
    ],
    assetIds: ["A090", "A091", "A092", "A093"],
    primaryAssetId: "A090",
    iconName: "SquareCode"
  },
  {
    id: "epoxy-coating",
    num: "08",
    titleMs: "Salutan Lantai Epoksi (Epoxy Coating)",
    titleEn: "Epoxy Floor Coating",
    shortDescMs: "Sistem salutan lantai epoksi berkualiti tinggi untuk bengkel, kilang, ruang komersial, dan stor penyimpanan kalis habuk.",
    shortDescEn: "Industrial epoxy floor coatings for workshops, factories, cold rooms, and commercial facilities requiring chemical and dust resistance.",
    scopeMs: [
      "Penyediaan permukaan lantai melalui pengisaran (diamond grinding) dan vakum",
      "Pembaikan retakan, lubang dan sambungan lantai konkrit",
      "Aplikasi lapisan primer epoksi bagi ikatan kukuh",
      "Salutan lapisan perantara (body coat) dan lapisan kemasan berkilat (topcoat)"
    ],
    scopeEn: [
      "Surface preparation via mechanical diamond grinding and vacuum extraction",
      "Repair of cracks, spalls, and uneven joints with epoxy mortar",
      "Application of high-adhesion epoxy penetrating primer",
      "Intermediate body coat and durable gloss/matte chemical-resistant topcoat"
    ],
    assetIds: ["A094", "A095", "A096", "A097"],
    primaryAssetId: "A094",
    iconName: "Paintbrush"
  },
  {
    id: "general-construction",
    num: "09",
    titleMs: "Pembinaan Am & Ubah Suai",
    titleEn: "General Construction & Renovation",
    shortDescMs: "Perkhidmatan reka dan bina (design & build), ubah suai bangunan, struktur keluli, dan kerja pemulihan semula premis komersial mahupun kediaman.",
    shortDescEn: "Design-and-build civil construction, interior/exterior renovation, steel structures, and commercial building reinstatement.",
    scopeMs: [
      "Pelaksanaan kerja reka dan bina mengikut bajet pelanggan",
      "Ubah suai dalaman dan luaran premis komersial serta kediaman",
      "Pemasangan struktur keluli, awning dan dinding pemisah",
      "Pemulihan semula premis (reinstatement works)"
    ],
    scopeEn: [
      "Design-and-build civil and structural works aligned with client budget",
      "Commercial office and residential property interior/exterior renovation",
      "Structural steel framing, canopies, and partition installations",
      "Commercial tenancy handover reinstatement works"
    ],
    assetIds: ["A109", "A009"],
    primaryAssetId: "A109",
    iconName: "Building2"
  },
  {
    id: "mechanical-electrical",
    num: "10",
    titleMs: "Perkhidmatan Mekanikal & Elektrikal (M&E)",
    titleEn: "Mechanical & Electrical Services",
    shortDescMs: "Pemasangan dan penyenggaraan pendawaian elektrik, lampu industri, kotak agihan (DB), dan kelengkapan soket komersial mahupun kediaman.",
    shortDescEn: "Commercial, industrial, and residential electrical wiring, distribution boards, lighting fixtures, and power outlet installations.",
    scopeMs: [
      "Pemasangan sistem pendawaian elektrik 1-fasa dan 3-fasa",
      "Pembekalan dan pemasangan lampu, suis, soket kuasa dan kelengkapan M&E",
      "Penyelenggaraan papan agihan elektrik (DB box)",
      "Pemeriksaan keselamatan litar dan penggantian perkakasan rosak"
    ],
    scopeEn: [
      "Single-phase and three-phase electrical wiring installations",
      "Supply and mounting of industrial fixtures, switches, and power sockets",
      "Distribution board (DB) inspection, balancing, and maintenance",
      "Electrical circuit fault finding and protective component replacement"
    ],
    assetIds: ["A110", "A055"],
    primaryAssetId: "A110",
    iconName: "Zap"
  },
  {
    id: "building-maintenance",
    num: "11",
    titleMs: "Penyelenggaraan & Pembaikan Bangunan",
    titleEn: "Building Maintenance & Repair",
    shortDescMs: "Penyelesaian komprehensif bagi kebocoran bumbung, paip tersumbat, kerosakan tandas, tangki air, jubin lantai, dan kalis air (waterproofing).",
    shortDescEn: "Comprehensive facility repairs covering roof leaks, drain jetting, re-piping, bathroom renewals, water tanks, and waterproofing.",
    scopeMs: [
      "Pengesanan dan pembaikan kebocoran paip serta kerja paip semula (re-piping)",
      "Pemeriksaan saliran tersumbat dan pembersihan bertekanan",
      "Pembaikan tandas, dapur, pemanas dan sistem tangki utama",
      "Rawatan kalis air (waterproofing) bumbung, balkoni dan bilik basah"
    ],
    scopeEn: [
      "Leak detection, pipe repairs, and comprehensive building re-piping",
      "Drain unclogging, high-pressure jetting, and sewer line inspections",
      "Washroom, kitchen, plumbing tank, and sanitary fitting overhauls",
      "Waterproofing membrane application for roofs, wet areas, and gutters"
    ],
    assetIds: ["A111", "A034", "A050"],
    primaryAssetId: "A111",
    iconName: "Wrench"
  },
  {
    id: "fit-out",
    num: "12",
    titleMs: "Hiasan Dalaman & Kerja Fit-Out",
    titleEn: "Interior Fit-Out & Refurbishment",
    shortDescMs: "Lukisan terbina (as-built), reka bentuk ruang, perabot tempahan khas, kerja pertukangan kayu (carpentry), dan pembaharuan ruang pejabat.",
    shortDescEn: "As-built drawings, interior spatial planning, bespoke custom cabinetry, fine carpentry, and turnkey commercial fit-outs.",
    scopeMs: [
      "Penyediaan lukisan terbina (as-built drawings) dan pelan susun atur",
      "Reka bentuk dalaman dan pembahagian ruang kerja (workstation / bilik mesyuarat)",
      "Pertukangan kayu kustom, kaunter penyambut tetamu dan kabinet terbina dalam",
      "Kerja-kerja penaiktarafan dan kemasan akhir lantai serta siling"
    ],
    scopeEn: [
      "Preparation of architectural as-built drawings and layout proposals",
      "Interior spatial planning for corporate offices, reception, and workstations",
      "Custom bespoke carpentry, built-in storage, and reception joinery",
      "Turnkey ceiling, partition, lighting, and interior surface refurbishment"
    ],
    assetIds: ["A112", "A018", "A022"],
    primaryAssetId: "A112",
    iconName: "Hammer"
  }
];
