import CrewCard from "./CrewCard";
import crewMembers from "../data/crew";

function Sidebar() {
  return (
    <aside className="w-full space-y-5 lg:w-[230px]">
      {/* Color palette card */}
      <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img
            src="/images/luffy-avatar.png"
            alt="Monkey D. Luffy"
            className="h-14 w-14 rounded-xl border border-white/30 object-cover"
          />

          <div>
            <p className="mb-2 text-[10px] uppercase tracking-wider text-white/60">
              Color code
            </p>

            <div className="flex gap-1.5">
              <span className="h-7 w-7 rounded-md border border-white/20 bg-[#f7dfad]" />
              <span className="h-7 w-7 rounded-md border border-white/20 bg-[#f2cb4d]" />
              <span className="h-7 w-7 rounded-md border border-white/20 bg-[#e94b45]" />
            </div>
          </div>
        </div>
      </div>

      {/* Crew members */}
      <div className="space-y-3">
        {crewMembers.map((member) => (
          <CrewCard key={member.id} member={member} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;