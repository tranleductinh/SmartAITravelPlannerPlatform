import React from "react";

const TravelerPlaceholder = ({ title, subtitle }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">{title}</h1>
      {subtitle ? (
        <p className="text-on-surface-variant max-w-2xl">{subtitle}</p>
      ) : null}
      <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6 text-on-surface-variant">
        This is a placeholder page. The UI/content will be implemented later.
      </div>
    </div>
  );
};

export default TravelerPlaceholder;

