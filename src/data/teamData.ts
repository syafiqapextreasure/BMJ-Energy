export interface TeamMember {
  name: string;
  roleMs: string;
  roleEn: string;
  assetId?: string;
  level: number;
}

export interface OrgBranch {
  branchTitleMs: string;
  branchTitleEn: string;
  head: TeamMember;
  secondary?: TeamMember;
  staff: TeamMember[];
}

export const ORG_CHART_DIRECTOR: TeamMember = {
  name: "Zahid Nawawi",
  roleMs: "Pengarah Urusan (Director)",
  roleEn: "Managing Director",
  assetId: "A011",
  level: 1,
};

export const ORG_BRANCHES: OrgBranch[] = [
  {
    branchTitleMs: "Cawangan 1: Pengurusan Operasi & Kemahiran",
    branchTitleEn: "Branch 1: Operations Management & Skilled Trades",
    head: {
      name: "Zaihidah Nawawi",
      roleMs: "Penolong Pengurus (Assistant Manager)",
      roleEn: "Assistant Manager",
      assetId: "A012",
      level: 2,
    },
    secondary: {
      name: "Syazaharul",
      roleMs: "Juruteknik (Technician)",
      roleEn: "Technician",
      level: 3,
    },
    staff: [
      {
        name: "Harusani",
        roleMs: "Pekerja Mahir (Skilled Worker)",
        roleEn: "Skilled Worker",
        level: 4,
      },
      {
        name: "Meor Muzamil",
        roleMs: "Pekerja Mahir (Skilled Worker)",
        roleEn: "Skilled Worker",
        level: 4,
      },
    ],
  },
  {
    branchTitleMs: "Cawangan 2: Penyeliaan Tapak & Operasi Jentera",
    branchTitleEn: "Branch 2: Site Supervision & Machinery Operations",
    head: {
      name: "Azam Jamil",
      roleMs: "Penyelia Tapak (Site Supervisor)",
      roleEn: "Site Supervisor",
      level: 2,
    },
    secondary: {
      name: "Wira Shazani",
      roleMs: "Kakitangan Teknikal (Technical Staff)",
      roleEn: "Technical Staff",
      level: 3,
    },
    staff: [
      {
        name: "Ridzuan Khusaini",
        roleMs: "Pemandu Jengkaut (Excavator Driver)",
        roleEn: "Excavator Driver",
        level: 4,
      },
    ],
  },
  {
    branchTitleMs: "Cawangan 3: Pengurusan Projek & Pemasaran",
    branchTitleEn: "Branch 3: Project Management & Commercial",
    head: {
      name: "Khairul Anwar",
      roleMs: "Pengurus Projek (Project Manager)",
      roleEn: "Project Manager",
      level: 2,
    },
    secondary: {
      name: "Ezaireen Abdullah",
      roleMs: "Pentadbiran (Admin)",
      roleEn: "Admin",
      level: 3,
    },
    staff: [
      {
        name: "Wan Salmah",
        roleMs: "Pengurus Jualan (Sales Manager)",
        roleEn: "Sales Manager",
        level: 4,
      },
      {
        name: "Noor Shahirah",
        roleMs: "Eksekutif Pemasaran (Marketing)",
        roleEn: "Marketing Executive",
        level: 4,
      },
    ],
  },
];
