"use client";
export default function ErrorBoundry({error}: {error: Error}) {
  return <div>{error.message}</div>;
}
