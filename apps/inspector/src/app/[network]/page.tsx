import { mainnet } from "@nancyjs/registry";
import { get } from "lodash-es";

import Image from "next/image";
import { Octokit } from "octokit";
import { Settings } from "./Settings";
const octokit = new Octokit();

export default async function Network({
  params,
}: {
  params: {
    network: string;
  };
}) {
  const { network } = params;
  const chain = get(
    mainnet,
    network
  ) as (typeof mainnet)[keyof typeof mainnet];
  if (!chain.repository) {
    return <h1>not found</h1>;
  }

  const url = new URL(chain.repository);
  const [, owner, repo] = url.pathname.split("/");
  const releases = await octokit.request(
    "GET /repos/{owner}/{repo}/releases",
    {
      owner,
      repo,
    }
  );
  return (
    <div className="m-auto p-8">
      <div className="flex items-center gap-x-4">
        {chain.logo.png && (
          <Image
            src={chain.logo.png}
            width={50}
            height={50}
            alt="logo"
          />
        )}
        <h1 className="font-bold text-3xl">
          {chain.displayName}
        </h1>
      </div>
      <div>
        <Settings />
        {/* {releases.data.map((release) => (
          <div key={release.id}>
            {release.name}
            {release.assets.map((asset) => (
              <div key={asset.id}>
                <a href={asset.browser_download_url}>
                  {asset.name}
                </a>
              </div>
            ))}
          </div>
        ))} */}
      </div>
      {/* <pre>{JSON.stringify(chain, null, 2)}</pre> */}
    </div>
  );
}
