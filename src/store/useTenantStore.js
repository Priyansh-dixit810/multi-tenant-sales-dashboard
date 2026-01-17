import { create } from "zustand";
import { tenants } from "@/data/TempData";

const useTenantStore = create((set, get) => ({
  currentTenant: "orgA",
  role: "admin",

  switchTenant: (tenant) => set({ currentTenant: tenant }),
  switchRole: (role) => set({ role }),

  getTenantData: () => {
    const tenantKey = get().currentTenant;
    return tenants[tenantKey];
  }
}));

export default useTenantStore;
