export type OpenRole = {
  title: string;
  department: string;
  location: string;
  type: string;
};

export const OPEN_ROLES: OpenRole[] = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer (Node.js)", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Remote", type: "Full-time" },
  { title: "AI/ML Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Project Manager", department: "Operations", location: "San Francisco, CA", type: "Full-time" },
  { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Contract" },
];

export const DEPARTMENTS = ["All", "Engineering", "Design", "Operations"] as const;
