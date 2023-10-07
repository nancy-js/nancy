"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { AccountInfo } from "./AccountInfo";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import * as apis from "@nancy/apis";

// console.log("createCosmosSdkClient", apis);
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { Suspense } from "react";

// // export const runtime = "edge"; // 'nodejs' (default) | 'edge'

// function getBaseURL() {
//   if (typeof window !== "undefined") {
//     return "";
//   }
//   if (process.env.VERCEL_URL) {
//     return `https://${process.env.VERCEL_URL}`;
//   }
//   return "http://localhost:3000";
// }
// const baseUrl = getBaseURL();
// function useWaitQuery(props: { wait: number }) {
//   const query = useSuspenseQuery({
//     queryKey: ["wait", props.wait],
//     queryFn: async () => {
//       const path = `/api/wait?wait=${props.wait}`;
//       const url = baseUrl + path;

//       console.log("fetching", url);
//       const res: string = await (
//         await fetch(url, {
//           cache: "no-store",
//         })
//       ).json();
//       return res;
//     },
//   });

//   return [query.data as string, query] as const;
// }

// function MyComponent(props: { wait: number }) {
//   const [data] = useWaitQuery(props);

//   return <div>result: {data}</div>;
// }

// export default function MyPage() {
//   return (
//     <>
//       <Suspense fallback={<div>waiting 100....</div>}>
//         <MyComponent wait={100} />
//       </Suspense>
//       <Suspense fallback={<div>waiting 200....</div>}>
//         <MyComponent wait={200} />
//       </Suspense>
//       <Suspense fallback={<div>waiting 300....</div>}>
//         <MyComponent wait={300} />
//       </Suspense>
//       <Suspense fallback={<div>waiting 400....</div>}>
//         <MyComponent wait={400} />
//       </Suspense>
//       <Suspense fallback={<div>waiting 500....</div>}>
//         <MyComponent wait={500} />
//       </Suspense>
//       <Suspense fallback={<div>waiting 600....</div>}>
//         <MyComponent wait={600} />
//       </Suspense>
//       <Suspense fallback={<div>waiting 700....</div>}>
//         <MyComponent wait={700} />
//       </Suspense>

//       <fieldset>
//         <legend>
//           combined <code>Suspense</code>-container
//         </legend>
//         <Suspense
//           fallback={
//             <>
//               <div>waiting 800....</div>
//               <div>waiting 900....</div>
//               <div>waiting 1000....</div>
//             </>
//           }
//         >
//           <MyComponent wait={800} />
//           <MyComponent wait={900} />
//           <MyComponent wait={1000} />
//         </Suspense>
//       </fieldset>
//     </>
//   );
// }

// "use client";

// import { Suspense } from "react";
// import { Providers } from "./providers";
// import { AccountInfo } from "../components/AccountInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Suspense fallback={<div>waiting 100....</div>}>
          sds
          <QueryErrorResetBoundary>
            <ErrorBoundary fallback={<div>error</div>}>
              <AccountInfo address="nancy1znlrc5gpl7gpshhn4a9z5r27sz53ds2hmxlnna" />
            </ErrorBoundary>
          </QueryErrorResetBoundary>
        </Suspense>

        {/* <SearchBalance /> */}
      </div>
    </main>
  );
}
