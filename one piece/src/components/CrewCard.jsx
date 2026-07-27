import { Plus } from "lucide-react";

function CrewCard({ member }) {
    return (
        <div className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
        <img src={member.image}
         alt={member.name}
         className="h-12 w-12 rounded-full border-2 border-white/30 object-cover" />

         <div className="min-w-0 flex-1">
         <h3 className="truncate text-xs font-bold uppercase text-white">
         {member.name}
         </h3>
         <p className="mt-1 truncate text-[10px] text-white/60">
         {member.description}
         </p>
         </div>

         <button
        type="button"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-red-500/80 text-white transition duration-300 group-hover:rotate-90 group-hover:bg-red-500"
        aria-label={`Add ${member.name}`}
      >
        <Plus size={18} />
      </button>
      </div>

        
    );
}

export default CrewCard;