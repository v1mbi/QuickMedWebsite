import { useState } from "react";
import React from "react";
import Notification from "./notification";

export default function NotificationBlock({ announcements = [] }) {
  const [hiddenKeys, setHiddenKeys] = useState(new Set());

  const handleClose = (uniqueKey) => {
    setHiddenKeys((prev) => {
      const next = new Set(prev);
      next.add(uniqueKey);
      return next;
    });
  };

  // Filter using the unique combination key
  const visibleNotes = announcements.filter((note) => {
    const key = `${note.title}-${note.date}`;
    return !hiddenKeys.has(key);
  });

  if (visibleNotes.length === 0) return null;

  return (
    <div className="fixed top-16 left-6 right-6 z-[9999] pointer-events-none flex flex-col items-end gap-4 max-h-[calc(100vh-80px)] overflow-y-auto pb-6 clean-scroll snap-y scroll-smooth">
      {visibleNotes.map((note) => {
        const uniqueKey = `${note.title}-${note.date}`;
        return (
          <div
            key={uniqueKey}
            className="pointer-events-auto flex-none snap-start"
          >
            <Notification
              {...note}
              urgency={note.urgency?.toLowerCase()}
              date={new Date(note.date).toLocaleDateString()}
              onClose={() => handleClose(uniqueKey)}
            />
          </div>
        );
      })}
    </div>
  );
}
