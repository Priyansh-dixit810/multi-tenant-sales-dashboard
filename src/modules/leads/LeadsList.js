"use client";

import { useState } from "react";
import useTenantStore from "@/store/useTenantStore";

export default function LeadsList() {
  const tenantData = useTenantStore((s) => s.getTenantData());
  const role = useTenantStore((s) => s.role);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredLeads = statusFilter === "All"? tenantData.leads: tenantData.leads.filter((lead) => lead.status === statusFilter);

  return (
    <div className="border rounded p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-medium">Leads</h2>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Interested">Interested</option>
          <option value="Converted">Converted</option>
          <option value="Lost">Lost</option>
        </select>
      </div>

      {filteredLeads.length === 0 ? (
        <p className="text-sm text-gray-500">No leads found</p>
      ) : (
        <div className="space-y-2">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="flex justify-between items-center border-b pb-1"
            >
              <div>
                <p className="font-medium">{lead.name}</p>
                <p className="text-xs text-gray-500">
                  {lead.phone} • {lead.status}
                </p>
              </div>

              {role === "admin" && (
                <button className="text-xs border px-2 py-1 rounded hover:bg-gray-100">
                  Edit
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
