import { Droplet, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

export default function  BloodDonorLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo mark */}
      <div className="relative">
        {/* Blood drop container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Droplet className="h-full w-full text-white fill-red-600" />
        </div>
        
        {/* Heart pulse overlay */}
        <HeartPulse className="h-3/4 w-3/4 relative text-red-600" strokeWidth={2.5} />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-white leading-none">
          BLOOD
        </span>
        <span className="text-2xl font-bold tracking-tight text-white leading-none">
          DONOR
        </span>
      </div>
    </div>
  );
}

// export function BloodDonorLogoCompact({ className }: { className?: string }) {
//   return (
//     <div className={cn("flex items-center gap-2", className)}>
//       <div className="relative h-8 w-8">
//         <Droplet className="absolute h-8 w-8 text-white fill-red-600" />
//         <HeartPulse className="absolute h-6 w-6 left-1 top-1 text-red-600" strokeWidth={2.5} />
//       </div>
//       <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-gray-900 bg-clip-text text-transparent">
//         Blood Donor
//       </span>
//     </div>
//   );
// }