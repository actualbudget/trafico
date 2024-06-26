export const TraficoDefaults = {
  wipRegex: /^\s*(\[WIP\]\s*|WIP:\s*|WIP\s+)+\s*/i,
  labels: {
    wip: {
      name: "🚧 WIP",
      color: "#FBCA04",
      description:
        "Still work-in-progress, please don't review and don't merge",
      ignore: false
    },
    unreviewed: {
      name: "🔍 Ready for Review",
      color: "#334796",
      description: "Pull Request is not reviewed yet",
      ignore: false
    },
    approved: {
      name: "✅ Approved",
      color: "#0E8A16",
      description: "Pull Request has been approved and can be merged",
      ignore: false
    },
    needsMoreApprovals: {
      name: "🌟 Needs more Approvals",
      color: "#96C823",
      description: "Pull Request needs more approvals",
      ignore: false
    },
    changesRequested: {
      name: "⚠️ Changes requested",
      color: "#AA2626",
      description: "Pull Request needs changes before it can be reviewed again",
      ignore: false
    },
    merged: {
      name: "✨ Merged",
      color: "#6F42C1",
      description: "Pull Request has been merged successfully",
      ignore: false
    }
  },
  addWipLabel: true
};
