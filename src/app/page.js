"use client";

import useTenantStore from "@/store/useTenantStore";
import LeadsList from "@/modules/leads/LeadsList";
import CallLogsList from "@/modules/call-logs/CallLogsList";
import { tenants } from "@/data/TempData";
function Home() {
  const currentTenant = useTenantStore((s) => s.currentTenant);
  const role = useTenantStore((s) => s.role);
  const switchTenant = useTenantStore((s) => s.switchTenant);
  const switchRole = useTenantStore((s) => s.switchRole);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow">
        
        <h1 className="text-2xl font-semibold mb-2">
          Multi-Tenant Sales Dashboard
        </h1>

        <p className="text-sm text-gray-600 mb-4">
          Tenant: <strong>{currentTenant}</strong> | Role: <strong>{role}</strong>
        </p>
      <div className="flex flex-wrap gap-2 mb-6">
        
      {Object.keys(tenants).map((key)=>(
        <button key={key} className="cursor-pointer px-3 py-1 border rounded text-sm hover:bg-gray-100" onClick={() => switchTenant(key)}>{tenants[key].name}</button>
      ))}
      <button onClick={() => switchRole("admin")} className="cursor-pointer px-3 py-1 border rounded text-sm hover:bg-gray-100">Admin</button>
      <button onClick={() => switchRole("agent")} className="cursor-pointer px-3 py-1 border rounded text-sm hover:bg-gray-100">Agent</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LeadsList />
          <CallLogsList />
        </div>
    </div>
    </div>
  );
}

export default Home;