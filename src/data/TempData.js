export const tenants = {
  orgA: {
    name: "Organization A",
    leads: [
      {
        id: 1,
        name: "Virat",
        phone: "1234567890",
        status: "New" //status can be New,Contacted,Interested,Converted,Lost
      },
      {
        id: 2,
        name: "Rohit",
        phone: "0987654321",
        status: "Contacted"
      },
      {
        id: 3,
        name: "Anushka",
        phone: "9876543210",
        status: "Converted"
      }
    ],
    calls: [
      {
        id: 1,
        leadId: 2,
        leadName: "Rohit",
        duration: "2m",
        outcome: "Spoke, follow-up required"
      },
      {
        id: 2,
        leadId: 3,
        leadName: "Anushka",
        duration: "5m",
        outcome: "Converted to customer"
      }
    ]
  },

  orgB: {
    name: "Organization B",
    leads: [
      {
        id: 4,
        name: "John",
        phone: "7777777777",
        status: "New"
      },
      {
        id: 5,
        name: "Emily",
        phone: "6666666666",
        status: "Interested"
      }
    ],
    calls: [
      {
        id: 3,
        leadId: 5,
        leadName: "Emily",
        duration: "4m",
        outcome: "Interested, demo scheduled"
      }
    ]
  },
  orgC: {
    name: "Organization C",
    leads: [
      {
        id: 4,
        name: "Smith",
        phone: "7777777777",
        status: "Contacted"
      },
      {
        id: 5,
        name: "Emily",
        phone: "6666666666",
        status: "Interested"
      }
    ],
    calls: [
      
    ]
  }
};
