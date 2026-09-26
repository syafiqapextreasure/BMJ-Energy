import { ServiceItem } from "@/src/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "road-construction", num: "01",
    titleMs: "Pembinaan & Penyelenggaraan Jalan Raya", titleEn: "Road Construction & Maintenance",
    shortDescMs: "Penurapan premix, pembaikan tampalan, bahu jalan dan saliran jalan raya.",
    shortDescEn: "Premix resurfacing, pavement patching, road shoulders and roadside drainage.",
    scopeMs: ["Penurapan semula jalan dengan premix", "Pembaikan jalan berlubang dan tampalan turapan", "Pembinaan dan penyelenggaraan bahu jalan", "Pembersihan dan pembinaan longkang tepi jalan"],
    scopeEn: ["Premix road resurfacing", "Pothole repairs and pavement patching", "Road shoulder construction and maintenance", "Roadside drain cleaning and construction"],
    assetIds: ["SVC01"], primaryAssetId: "SVC01", iconName: "Truck"
  },
  {
    id: "plantation-roads", num: "02",
    titleMs: "Jalan Pertanian / Perladangan & Kerja Tanah", titleEn: "Agricultural / Plantation Roads & Earthworks",
    shortDescMs: "Pembinaan dan pemulihan laluan pertanian serta perladangan, kerja tanah dan kawalan hakisan.",
    shortDescEn: "Agricultural and plantation road construction and rehabilitation, earthworks and erosion control.",
    scopeMs: ["Pembersihan tapak dan kerja tanah", "Penyediaan dan pemadatan subgred", "Hamparan crusher run atau laterit", "Penurapan mengikut keperluan dan spesifikasi projek", "Pembinaan saliran dan pemasangan pembetung", "Kawalan hakisan dan penyelenggaraan berkala"],
    scopeEn: ["Site clearing and earthworks", "Subgrade preparation and compaction", "Crusher-run or laterite surfacing", "Paving to project requirements and specifications", "Drainage construction and culvert installation", "Erosion control and periodic maintenance"],
    assetIds: ["SVC02"], primaryAssetId: "SVC02", iconName: "Trees"
  },
  {
    id: "gabion-structures", num: "03",
    titleMs: "Struktur Gabion & Kawalan Hakisan", titleEn: "Gabion Structures & Erosion Control",
    shortDescMs: "Struktur gabion untuk kawalan hakisan tebing sungai, kestabilan cerun dan dinding penahan.",
    shortDescEn: "Gabion structures for riverbank erosion control, slope stabilization and retaining walls.",
    scopeMs: ["Penyediaan tapak struktur gabion", "Pemasangan sangkar gabion dan pengisian batu", "Perlindungan tebing sungai dan cerun", "Pembinaan dinding penahan mengikut reka bentuk dan spesifikasi projek"],
    scopeEn: ["Gabion site preparation", "Gabion basket installation and stone filling", "Riverbank and slope protection", "Retaining wall construction to project design and specifications"],
    assetIds: ["SVC03"], primaryAssetId: "SVC03", iconName: "Shield"
  },
  {
    id: "drain-excavation", num: "04",
    titleMs: "Pengorekan & Pemulihan Saliran", titleEn: "Drain Excavation & Rehabilitation",
    shortDescMs: "Pengorekan saliran, pembersihan kelodak, pembentukan semula tebing dan pembuangan sisa korekan.",
    shortDescEn: "Drain excavation, desilting, channel reprofiling and removal of excavated material.",
    scopeMs: ["Pembersihan kelodak, tumbuhan dan halangan dalam parit", "Mendalamkan dan memperlebar saliran", "Pembaikan serta pemadatan tebing yang rosak", "Pengangkutan dan pelupusan sisa korekan"],
    scopeEn: ["Removal of silt, vegetation and obstructions", "Drain deepening and widening", "Repair and compaction of damaged banks", "Transport and disposal of excavated material"],
    assetIds: ["SVC04"], primaryAssetId: "SVC04", iconName: "Waves"
  },
  {
    id: "culverts", num: "05",
    titleMs: "Pembinaan Pembetung (Culverts)", titleEn: "Culvert Construction",
    shortDescMs: "Pembetung paip konkrit bertetulang (RCP), pembetung kotak serta struktur headwall dan wing wall.",
    shortDescEn: "Reinforced concrete pipe (RCP) and box culverts, with headwalls and wing walls.",
    scopeMs: ["Pengorekan dan penyediaan asas pembetung", "Pemasangan pembetung paip atau kotak mengikut reka bentuk", "Pembinaan headwall dan wing wall", "Penimbusan semula berlapis dan pemadatan", "Penyambungan saliran dan perlindungan hakisan"],
    scopeEn: ["Excavation and culvert foundation preparation", "Pipe or box culvert installation to the design", "Headwall and wing wall construction", "Layered backfilling and compaction", "Drainage connections and erosion protection"],
    assetIds: ["SVC05"], primaryAssetId: "SVC05", iconName: "Layers"
  },
  {
    id: "coring-tests", num: "06",
    titleMs: "Ujian Coring Jalan Raya", titleEn: "Road Coring Test",
    shortDescMs: "Pengambilan sampel teras turapan untuk pemeriksaan ketebalan, ujian makmal dan laporan teknikal.",
    shortDescEn: "Pavement core sampling for thickness checks, laboratory tests and technical reporting.",
    scopeMs: ["Penandaan lokasi ujian coring", "Penggerudian dan pengambilan sampel teras asfalt atau konkrit", "Pengukuran ketebalan lapisan turapan mengikut spesifikasi projek", "Pengambilan sampel untuk ujian makmal yang ditetapkan", "Penampalan semula lubang coring", "Penyediaan laporan teknikal"],
    scopeEn: ["Marking coring test locations", "Drilling and extraction of asphalt or concrete cores", "Pavement layer thickness measurement against project specifications", "Sampling for the specified laboratory tests", "Reinstatement of core holes", "Technical report preparation"],
    assetIds: ["SVC06"], primaryAssetId: "SVC06", iconName: "CheckCircle2"
  },
  {
    id: "concrete-paving", num: "07",
    titleMs: "Laman / Tapak Konkrit & Turapan", titleEn: "Concrete Yards & Paving",
    shortDescMs: "Penyediaan asas, tetulang, tuangan dan kemasan konkrit untuk laman, tapak dan laluan.",
    shortDescEn: "Base preparation, reinforcement, concrete placement and finishing for yards, hardstands and access routes.",
    scopeMs: ["Penyediaan tapak dan asas crusher run", "Pemasangan kepingan polietilena", "Pemasangan tetulang dan acuan mengikut reka bentuk", "Tuangan, perataan dan kemasan permukaan konkrit mengikut spesifikasi", "Pembentukan sambungan dan pengawetan konkrit", "Ujian kawalan kualiti mengikut keperluan projek"],
    scopeEn: ["Site preparation and crusher-run base", "Polyethylene sheet installation", "Reinforcement and formwork to the design", "Concrete placement, levelling and surface finishing to specification", "Joint formation and concrete curing", "Quality-control tests to project requirements"],
    assetIds: ["SVC07"], primaryAssetId: "SVC07", iconName: "SquareCode"
  },
  {
    id: "epoxy-coating", num: "08",
    titleMs: "Salutan Lantai Epoksi (Epoxy Coating)", titleEn: "Epoxy Floor Coating",
    shortDescMs: "Penyediaan permukaan dan aplikasi sistem salutan lantai epoksi mengikut keperluan tapak.",
    shortDescEn: "Surface preparation and epoxy floor coating systems to suit site requirements.",
    scopeMs: ["Penyediaan dan pengisaran permukaan lantai", "Pembaikan retakan dan kerosakan permukaan", "Aplikasi lapisan primer", "Aplikasi lapisan asas (base coat) dan lapisan kemasan (topcoat) mengikut spesifikasi sistem"],
    scopeEn: ["Floor surface preparation and grinding", "Crack and surface damage repairs", "Primer application", "Base coat and topcoat application to the coating system specification"],
    assetIds: ["SVC08"], primaryAssetId: "SVC08", iconName: "Paintbrush"
  },
  {
    id: "general-construction", num: "09",
    titleMs: "Pembinaan Am & Ubah Suai", titleEn: "General Construction & Renovation",
    shortDescMs: "Reka dan bina, ubah suai, kerja awam dan pemulihan semula.",
    shortDescEn: "Design and build, renovation, civil works and reinstatement.",
    scopeMs: ["Reka dan bina", "Kerja ubah suai", "Kerja awam dan jalan raya", "Kerja pemulihan semula (reinstatement)", "Kerja keluli mengikut reka bentuk dan spesifikasi"],
    scopeEn: ["Design and build", "Renovation works", "Civil and road works", "Reinstatement works", "Steel works to design and specification"],
    assetIds: ["SVC09"], primaryAssetId: "SVC09", iconName: "Building2"
  },
  {
    id: "mechanical-electrical", num: "10",
    titleMs: "Perkhidmatan Mekanikal & Elektrikal (M&E)", titleEn: "Mechanical & Electrical Services",
    shortDescMs: "Kerja mekanikal dan elektrikal bagi premis komersial, kediaman dan industri.",
    shortDescEn: "Mechanical and electrical works for commercial, residential and industrial premises.",
    scopeMs: ["Kerja M&E komersial", "Kerja M&E kediaman", "Kerja M&E industri", "Pemasangan kelengkapan mengikut skop dan spesifikasi yang dipersetujui"],
    scopeEn: ["Commercial M&E works", "Residential M&E works", "Industrial M&E works", "Fittings installation to the agreed scope and specifications"],
    assetIds: ["SVC10"], primaryAssetId: "SVC10", iconName: "Zap"
  },
  {
    id: "building-maintenance", num: "11",
    titleMs: "Penyelenggaraan & Pembaikan Bangunan", titleEn: "Building Maintenance & Repair",
    shortDescMs: "Pembaikan kebocoran, kerja paip, pemeriksaan saliran dan kalis air bangunan.",
    shortDescEn: "Building leak repairs, plumbing, drain inspection and waterproofing.",
    scopeMs: ["Pengesanan dan pembaikan kebocoran", "Kerja paip semula (re-piping)", "Pembersihan paip bertekanan (jetting) dan pemeriksaan video", "Kerja bilik mandi dan dapur", "Pemasangan pemanas air dan tangki air", "Kerja kalis air (waterproofing)"],
    scopeEn: ["Leak detection and repair", "Re-piping works", "Drain jetting and video inspection", "Bathroom and kitchen works", "Water-heater and water-tank installation", "Waterproofing works"],
    assetIds: ["SVC11"], primaryAssetId: "SVC11", iconName: "Wrench"
  },
  {
    id: "fit-out", num: "12",
    titleMs: "Hiasan Dalaman & Kerja Fit-Out", titleEn: "Interior Fit-Out & Refurbishment",
    shortDescMs: "Lukisan terbina, reka bentuk dalaman, perabot, pertukangan kayu dan pembaharuan ruang.",
    shortDescEn: "As-built drawings, interior design, furniture, carpentry and refurbishment.",
    scopeMs: ["Penyediaan lukisan terbina (as-built drawings)", "Reka bentuk dalaman", "Perabot dan kelengkapan", "Perabot tempahan khas dan kerja pertukangan kayu", "Kerja pembaharuan ruang (refurbishment)"],
    scopeEn: ["As-built drawing preparation", "Interior design", "Furniture and fittings", "Custom furniture and carpentry", "Refurbishment works"],
    assetIds: ["SVC12"], primaryAssetId: "SVC12", iconName: "Hammer"
  }
];
