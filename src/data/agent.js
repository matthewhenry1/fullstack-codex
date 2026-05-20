export const seedMessages = [
  {
    author: "Agent",
    message:
      "I found two unmatched returns in the ACH batch. The exposure is low because both accounts have positive reserves.",
  },
  {
    author: "You",
    message: "Prepare a summary for the risk review.",
  },
  {
    author: "Agent",
    message:
      "Drafted: Batch #8421 settled with 2 exceptions totaling $14,280. Recommended action: hold release until customer support confirms updated account details.",
  },
];

export const promptButtons = [
  { label: "Check exceptions", prompt: "Check open exceptions" },
  { label: "Draft update", prompt: "Draft customer update" },
  { label: "Explain risk", prompt: "Explain the risk score" },
];

export const agentReplies = [
  "I checked the batch context and found no new high-severity items. The next useful step is to verify the two customer account updates before releasing funds.",
  "The current risk score is driven by return volume, transaction size, and reserve coverage. Reserve coverage is healthy, so the score remains low.",
  "I drafted a customer-safe update: We are reviewing two payment exceptions and will confirm settlement timing after account details are verified.",
];

export const getAgentReply = (message) => {
  const normalized = message.toLowerCase();

  if (normalized.includes("exception")) return agentReplies[0];
  if (normalized.includes("risk")) return agentReplies[1];
  if (normalized.includes("draft") || normalized.includes("update")) return agentReplies[2];

  return "I can help with this batch. I would start by checking exceptions, exposure, reserve coverage, and the latest audit event.";
};
