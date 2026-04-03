import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef(function Table(
  { className, ...props },
  ref,
) {
  return (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
});

const TableHeader = React.forwardRef(function TableHeader(
  { className, ...props },
  ref,
) {
  return (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  );
});

const TableBody = React.forwardRef(function TableBody(
  { className, ...props },
  ref,
) {
  return <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
});

const TableFooter = React.forwardRef(function TableFooter(
  { className, ...props },
  ref,
) {
  return (
    <tfoot
      ref={ref}
      className={cn("bg-slate-50/50 font-medium text-slate-700 dark:bg-slate-900/50 dark:text-slate-300", className)}
      {...props}
    />
  );
});

const TableRow = React.forwardRef(function TableRow(
  { className, ...props },
  ref,
) {
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b border-outline-variant/30 transition-colors hover:bg-surface-container-low",
        className,
      )}
      {...props}
    />
  );
});

const TableHead = React.forwardRef(function TableHead(
  { className, ...props },
  ref,
) {
  return (
    <th
      ref={ref}
      className={cn(
        "h-10 px-4 text-left align-middle font-medium text-on-surface-variant [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
});

const TableCell = React.forwardRef(function TableCell(
  { className, ...props },
  ref,
) {
  return (
    <td
      ref={ref}
      className={cn(
        "px-4 align-middle [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
});

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableCell, TableRow };

