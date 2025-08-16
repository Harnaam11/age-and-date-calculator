import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Card className="w-full max-w-md mx-auto p-4 shadow-lg">
      <CardContent className="text-center space-y-4">
        {/* Title inside the box */}
        <h2 className="text-xl font-bold">Countdown Timer</h2>

        <input
          type="datetime-local"
          onChange={(e) => setTargetDate(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {targetDate && (
          <div className="text-lg font-mono">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
