import { ScreenShell, Panel } from "@/components/chrome/screen-shell";

export default function SettingsPage() {
  return (
    <ScreenShell title="SETTINGS" subtitle="SYSTEM CONFIGURATION">
      <div className="w-full max-w-2xl space-y-3">
        <Panel title="SIMULATION">
          <div className="space-y-2 text-[12px]">
            <label className="flex items-center justify-between rounded bg-[#06121a] px-2 py-2">
              <span>Auto-pause on event</span>
              <span className="text-emerald-300">ON</span>
            </label>
            <label className="flex items-center justify-between rounded bg-[#06121a] px-2 py-2">
              <span>Default speed</span>
              <span className="text-cyan-200">1x</span>
            </label>
          </div>
        </Panel>
        <Panel title="DISPLAY">
          <div className="space-y-2 text-[12px]">
            <label className="flex items-center justify-between rounded bg-[#06121a] px-2 py-2">
              <span>Scanline overlay</span>
              <span className="text-emerald-300">ON</span>
            </label>
            <label className="flex items-center justify-between rounded bg-[#06121a] px-2 py-2">
              <span>Reduce motion</span>
              <span className="text-cyan-500/60">OFF</span>
            </label>
          </div>
        </Panel>
      </div>
    </ScreenShell>
  );
}
