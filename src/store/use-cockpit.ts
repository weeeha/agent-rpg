import { create } from "zustand";
import { Agent, ActiveOp } from "@/types";
import { mockAgents } from "@/data";

/**
 * Minimal cockpit store for the RPG game view.
 * Agents drive the in-game character sprites; activeOps feeds the HUD counter.
 * In the full Command HQ branch this store carries missions, log, resources too.
 */
interface CockpitStore {
  agents: Agent[];
  activeOps: ActiveOp[];

  selectedAgentId: string | null;
  selectAgent: (id: string | null) => void;
}

// Derive a lightweight activeOps list from agents currently in "deployed" status.
const initialActiveOps: ActiveOp[] = mockAgents
  .filter((a) => a.status === "deployed")
  .map((a, i) => ({
    id: `op-${a.id}-${i}`,
    missionId: `mission-${i}`,
    title: a.statusDetail ?? "In-flight task",
    assignedAgentIds: [a.id],
    state: "in-progress",
    progress: 50,
    stateDetail: a.statusDetail ?? "Running",
    elapsedMinutes: 20,
    etaMinutes: 30,
    creditsSpent: 0,
  }));

export const useCockpitStore = create<CockpitStore>((set) => ({
  agents: mockAgents,
  activeOps: initialActiveOps,

  selectedAgentId: null,
  selectAgent: (id) => set({ selectedAgentId: id }),
}));
