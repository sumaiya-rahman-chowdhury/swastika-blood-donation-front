"use client";
import { Loader2, Droplet, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export function BloodDonationLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-red-100 bg-white shadow-lg overflow-hidden">
        {/* Animated header */}
        <div className="bg-red-600 p-6 text-white">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center"
          >
            <Droplet className="h-12 w-12" />
          </motion.div>
          <h1 className="text-2xl font-bold text-center mt-4">
            Saving Lives Together
          </h1>
        </div>

        {/* Loading content */}
        <div className="p-8 space-y-6">
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 text-red-600 animate-spin" />
          </div>

          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Preparing Your Donation Portal
            </h2>
            <p className="text-gray-600">
              Just a moment while we connect you to our lifesaving network
            </p>
          </div>

          {/* Animated progress with heartbeat effect */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-red-600">
              <span>Loading</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity 
                }}
              >
                <HeartPulse className="inline mr-1" />
                <span>Live Updates</span>
              </motion.span>
            </div>
            <Progress 
              value={65} 
              className="h-2 bg-red-100 [&>div]:bg-red-600"
            />
          </div>

          {/* Pulsing blood drop animation */}
          <div className="flex justify-center pt-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Droplet className="h-16 w-16 text-red-500 fill-red-100" />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-50 p-4 text-center text-sm text-red-800">
          <p>Thank you for your life-saving contribution</p>
        </div>
      </Card>
    </div>
  );
}