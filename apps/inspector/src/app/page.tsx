"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { AccountInfo } from "./AccountInfo";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Suspense fallback={<div>waiting 100....</div>}>
          <QueryErrorResetBoundary>
            <ErrorBoundary fallback={<div>error</div>}>
              <AccountInfo address="nancy1znlrc5gpl7gpshhn4a9z5r27sz53ds2hmxlnna" />
            </ErrorBoundary>
          </QueryErrorResetBoundary>
        </Suspense>
      </div>
    </main>
  );
}
