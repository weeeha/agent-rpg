"use client";

import { GameCanvas } from "./game-canvas";
import { ResourceHUD } from "./resource-hud";
import { ActivityBar } from "./activity-bar";
import { AgentPanel } from "./agent-panel";
import { RoomPanel } from "./room-panel";
import { Minimap } from "./minimap";
import { ScreenNav } from "./screen-nav";
import { useBaseStore } from "@/store/use-base";
import { useCockpitStore } from "@/store/use-cockpit";
import { useEffect } from "react";

// Dev: expose stores for debugging in browser console.
if (typeof window !== "undefined") {
  (window as unknown as { __baseStore?: unknown }).__baseStore = useBaseStore;
  (window as unknown as { __cockpitStore?: unknown }).__cockpitStore =
    useCockpitStore;
}

/**
 * Top-level RimWorld-style game view for the agent base.
 *
 * Layers:
 *   - Canvas (full area) renders the tilemap + agent sprites
 *   - HUD overlays (resource bar, activity log, minimap)
 *   - Side panel (agent or room profile) slides in on click
 */
export function GameView() {
  const panelOpen = useBaseStore((s) => s.panelOpen);

  // Seed some tasks on deployed agents for initial visual interest
  const seedTasks = useBaseStore((s) => s.setAgentTask);
  const agents = useCockpitStore((s) => s.agents);
  useEffect(() => {
    for (const agent of agents) {
      if (agent.status === "deployed" && agent.statusDetail) {
        seedTasks(agent.id, agent.statusDetail);
      }
    }
  }, [agents, seedTasks]);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-[#050308] text-foreground">
      <GameCanvas />
      <ResourceHUD />
      <Minimap />
      <ActivityBar />
      <ScreenNav />
      {panelOpen === "agent" && <AgentPanel />}
      {panelOpen === "room" && <RoomPanel />}
    </div>
  );
}
