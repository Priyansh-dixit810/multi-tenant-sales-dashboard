"use client";

import useTenantStore from "@/store/useTenantStore";

export default function CallLogsList() {
  const tenantData = useTenantStore((s) => s.getTenantData());

  return (
    <div className="border rounded p-4">
      <h2 className="text-lg font-medium mb-3">Call Logs</h2>

      {tenantData.calls.length === 0 ? (
        <p className="text-sm text-gray-500">No call logs available</p>
      ) : (
        <div className="space-y-2">
          {tenantData.calls.map((call) => (
            <div key={call.id} className="border-b pb-1">
              <p className="font-medium">{call.leadName}</p>
              <p className="text-xs text-gray-500">
                {call.duration} • {call.outcome}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
