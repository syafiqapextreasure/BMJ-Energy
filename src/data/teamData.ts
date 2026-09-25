export interface TeamMember {
  name: string;
  roleMs: string;
  roleEn: string;
  assetId?: string;
  level: number;
}

export interface OrgBranch {
  head: TeamMember;
  secondary?: TeamMember;
  staff: TeamMember[];
}

// Names and reporting relationships preserved from the profile chart (physical P8).
// P7 supplies the full assistant-manager display name.
export const ORG_CHART_DIRECTOR: TeamMember = {
  name: "Zahid Nawawi", roleMs: "Pengarah", roleEn: "Director", assetId: "A011", level: 1,
};

export const ORG_BRANCHES: OrgBranch[] = [
  {
    head: { name: "Zaihidah Nawawi", roleMs: "Penolong Pengurus", roleEn: "Assistant Manager", assetId: "A012", level: 2 },
    secondary: { name: "Syazaharul", roleMs: "Juruteknik", roleEn: "Technician", level: 3 },
    staff: [
      { name: "Harusani", roleMs: "Pekerja Mahir", roleEn: "Skilled Worker", level: 4 },
      { name: "Meor Muzamil", roleMs: "Pekerja Mahir", roleEn: "Skilled Worker", level: 4 },
    ],
  },
  {
    head: { name: "Azam Jamil", roleMs: "Penyelia Tapak", roleEn: "Site Supervisor", level: 2 },
    secondary: { name: "Wira Shazani", roleMs: "Kakitangan Teknikal", roleEn: "Technical Staff", level: 3 },
    staff: [
      { name: "Ridzuan Khusaini", roleMs: "Pemandu Jengkaut", roleEn: "Excavator Driver", level: 4 },
    ],
  },
  {
    head: { name: "Khairul Anwar", roleMs: "Pengurus Projek", roleEn: "Project Manager", level: 2 },
    secondary: { name: "Ezaireen Abdullah", roleMs: "Pentadbiran", roleEn: "Admin", level: 3 },
    staff: [
      { name: "Wan Salmah", roleMs: "Pengurus Jualan", roleEn: "Sales Manager", level: 4 },
      { name: "Noor Shahirah", roleMs: "Pemasaran", roleEn: "Marketing", level: 4 },
    ],
  },
];
