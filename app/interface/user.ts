import { IPSA } from "./performance_standard";

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  position: string;
  performanceStandard: {
    id: number,
    psa: IPSA[]
  };
  hasPerformanceStandard: boolean;
}

export interface UserWithCount {
  users: User[];
  count: number
}

