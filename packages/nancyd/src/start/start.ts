import { pick } from "lodash-es";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { toCliArgs } from "../utils/toCliArgs.js";
import { spawn } from "child_process";
import { DeepPartial } from "../utils/types.js";

// Flags:
//       --abci string                                     specify abci transport (socket | grpc) (default "socket")
//       --address string                                  Listen address (default "tcp://0.0.0.0:26658")
//       --api.address string                              the API server address to listen on (default "tcp://localhost:1317")
//       --api.enable                                      Define if the API server should be enabled
//       --api.enabled-unsafe-cors                         Define if CORS should be enabled (unsafe - use it at your own risk)
//       --api.max-open-connections uint                   Define the number of maximum open connections (default 1000)
//       --api.rpc-max-body-bytes uint                     Define the Tendermint maximum request body (in bytes) (default 1000000)
//       --api.rpc-read-timeout uint                       Define the Tendermint RPC read timeout (in seconds) (default 10)
//       --api.rpc-write-timeout uint                      Define the Tendermint RPC write timeout (in seconds)
//       --api.swagger                                     Define if swagger documentation should automatically be registered (Note: the API must also be enabled)
//       --block_sync                                      sync the block chain using the blocksync algorithm (default true)
//       --consensus.create_empty_blocks                   set this to false to only produce blocks when there are txs or when the AppHash changes (default true)
//       --consensus.create_empty_blocks_interval string   the possible interval between empty blocks (default "0s")
//       --consensus.double_sign_check_height int          how many blocks to look back to check existence of the node's consensus votes before joining consensus
//       --cpu-profile string                              Enable CPU profiling and write to the provided file
//       --db_backend string                               database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb (default "goleveldb")
//       --db_dir string                                   database directory (default "data")
//       --genesis_hash bytesHex                           optional SHA-256 hash of the genesis file
//       --grpc-only                                       Start the node in gRPC query only mode (no Tendermint process is started)
//       --grpc-web.address string                         The gRPC-Web server address to listen on (default "localhost:9091")
//       --grpc-web.enable                                 Define if the gRPC-Web server should be enabled. (Note: gRPC must also be enabled) (default true)
//       --grpc.address string                             the gRPC server address to listen on (default "localhost:9090")
//       --grpc.enable                                     Define if the gRPC server should be enabled (default true)
//       --halt-height uint                                Block height at which to gracefully halt the chain and shutdown the node
//       --halt-time uint                                  Minimum block time (in Unix seconds) at which to gracefully halt the chain and shutdown the node
//   -h, --help                                            help for start
//       --home string                                     The application home directory (default "/Users/juliaortiz/.nancy")
//       --iavl-disable-fastnode                           Disable fast node for IAVL tree
//       --inter-block-cache                               Enable inter-block caching (default true)
//       --inv-check-period uint                           Assert registered invariants every N blocks
//       --mempool.max-txs int                             Sets MaxTx value for the app-side mempool
//       --min-retain-blocks uint                          Minimum block height offset during ABCI commit to prune Tendermint blocks
//       --minimum-gas-prices string                       Minimum gas prices to accept for transactions; Any fee in a tx must meet this minimum (e.g. 0.01photino;0.0001stake)
//       --moniker string                                  node name (default "MacBook-Pro-de-Julia.local")
//       --p2p.external-address string                     ip:port address to advertise to peers for them to dial
//       --p2p.laddr string                                node listen address. (0.0.0.0:0 means any interface, any port) (default "tcp://0.0.0.0:26656")
//       --p2p.persistent_peers string                     comma-delimited ID@host:port persistent peers
//       --p2p.pex                                         enable/disable Peer-Exchange (default true)
//       --p2p.private_peer_ids string                     comma-delimited private peer IDs
//       --p2p.seed_mode                                   enable/disable seed mode
//       --p2p.seeds string                                comma-delimited ID@host:port seed nodes
//       --p2p.unconditional_peer_ids string               comma-delimited IDs of unconditional peers
//       --p2p.upnp                                        enable/disable UPNP port forwarding
//       --priv_validator_laddr string                     socket address to listen on for connections from external priv_validator process
//       --proxy_app string                                proxy app address, or one of: 'kvstore', 'persistent_kvstore' or 'noop' for local testing. (default "tcp://127.0.0.1:26658")
//       --pruning string                                  Pruning strategy (default|nothing|everything|custom) (default "default")
//       --pruning-interval uint                           Height interval at which pruned heights are removed from disk (ignored if pruning is not 'custom')
//       --pruning-keep-recent uint                        Number of recent heights to keep on disk (ignored if pruning is not 'custom')
//       --rpc.grpc_laddr string                           GRPC listen address (BroadcastTx only). Port required
//       --rpc.laddr string                                RPC listen address. Port required (default "tcp://127.0.0.1:26657")
//       --rpc.pprof_laddr string                          pprof listen address (https://golang.org/pkg/net/http/pprof)
//       --rpc.unsafe                                      enabled unsafe rpc methods
//       --state-sync.snapshot-interval uint               State sync snapshot interval
//       --state-sync.snapshot-keep-recent uint32          State sync snapshot to keep (default 2)
//       --trace                                           Provide full stack traces for errors in ABCI Log
//       --trace-store string                              Enable KVStore tracing to an output file
//       --transport string                                Transport protocol: socket, grpc (default "socket")
//       --unsafe-skip-upgrades ints                       Skip a set of upgrade heights to continue the old binary
//       --with-tendermint                                 Run abci app embedded in-process with tendermint (default true)
//       --x-crisis-skip-assert-invariants                 Skip x/crisis invariants check on startup

// Global Flags:
//       --log_format string   The logging format (json|plain) (default "plain")
//       --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")

type Time =
  | `${number}${"ms" | "s" | "m" | "h"}`
  | `${number}${"h"}${number}$${"m"}}`;
type StartFlags = {
  /**
   * specify abci transport (socket | grpc) (default "socket")
   */
  abci: "socket" | "grpc";
  /**
   * Listen address
   * @default tcp://0.0.0.0:26658
   */
  address: string;
  api: {
    /**
     * the API server address to listen on
     * @default tcp://localhost:1317
     */
    address: string;
    port: number;
    /**
     * Define if the API server should be enabled
     */
    enable: boolean;
    /**
     * Define if CORS should be enabled (unsafe - use it at your own risk)
     */
    enabledUnsafeCors: boolean;
    /**
     * Define the number of maximum open connections
     * @default 1000
     */
    maxOpenConnections: number;
    /**
     * Define the Tendermint maximum request body (in bytes)
     * @default 1000000
     */
    rpcMaxBodyBytes: number;
    /**
     * Define the Tendermint RPC read timeout (in seconds)
     * @default 10
     */
    rpcReadTimeout: number;
    /**
     * Define the Tendermint RPC write timeout (in seconds)
     */
    rpcWriteTimeout: number;
    /**
     * Define if swagger documentation should automatically be registered (Note: the API must also be enabled)
     */
    swagger: boolean;
  };
  /**
   * sync the block chain using the blocksync algorithm
   * @default true
   */
  blockSync: boolean;
  consensus: {
    /**
     * set this to false to only produce blocks when there are txs or when the AppHash changes
     * @default true
     */
    createEmptyBlocks: boolean;
    /**
     * the possible interval between empty blocks
     * @default "0s"
     */
    createEmptyBlocksInterval: Time;
    /**
     * how many blocks to look back to check existence of the node's consensus votes before joining consensus
     */
    doubleSignCheckHeight: number;
  };
  /**
   * Enable CPU profiling and write to the provided file
   */
  cpuProfile: string;
  /**
   * database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb
   * @default "goleveldb"
   */
  dbBackend:
    | "goleveldb"
    | "cleveldb"
    | "boltdb"
    | "rocksdb"
    | "badgerdb";
  /**
   * database directory
   * @default "data"
   */
  dbDir: string;
  /**
   * optional SHA-256 hash of the genesis file
   */
  genesisHash: string;
  /**
   * Start the node in gRPC query only mode (no Tendermint process is started)
   */
  grpcOnly: boolean;

  grpcWeb: {
    /**
     * The gRPC-Web server address to listen on
     * @default "localhost:9091"
     */

    address: string;
    /**
     * Define if the gRPC-Web server should be enabled. (Note: gRPC must also be enabled)
     * @default true
     */
    enable: boolean;
  };
  grpc: {
    /**
     * the gRPC server address to listen on
     * @default "localhost:9090"
     */
    address: string;
    /**
     * Define if the gRPC server should be enabled
     * @default true
     */
    enable: boolean;
  };
  /**
   * Block height at which to gracefully halt the chain and shutdown the node
   */
  haltHeight: number;
  /**
   * Minimum block time (in Unix seconds) at which to gracefully halt the chain and shutdown the node
   */
  haltTime: number;
  /**
   * The application home directory
   */
  home: string;
  /**
   * Disable fast node for IAVL tree
   */
  iavlDisableFastnode: boolean;
  /**
   * Enable inter-block caching
   * @default true
   */
  interBlockCache: boolean;
  /**
   * Assert registered invariants every N blocks
   */
  invCheckPeriod: number;
  mempool: {
    /**
     * Sets MaxTx value for the app-side mempool
     */
    maxTxs: number;
  };
  /**
   * Minimum block height offset during ABCI commit to prune Tendermint blocks
   */
  minRetainBlocks: number;
  /**
   * Minimum gas prices to accept for transactions; Any fee in a tx must meet this minimum (e.g. 0.01photino;0.0001stake)
   */
  minimumGasPrices: string;
  /**
   * node name
   * @default "MacBook-Pro-de-Julia.local"
   */
  moniker: string;
  p2p: {
    /**
     * ip:port address to advertise to peers for them to dial
     */
    externalAddress: string;
    /**
     * node listen address. (0.0.0.0:0 means any interface, any port) (default "tcp://0.0.0.0:26656")
     */
    laddr: string;
    /**
     * comma-delimited ID@host:port persistent peers
     */
    persistentPeers: string;
    /**
     * enable/disable Peer-Exchange
     * @default true
     */
    pex: boolean;
    /**
     * comma-delimited private peer IDs
     */
    privatePeerIds: string;
    /**
     * enable/disable seed mode
     */
    seedMode: boolean;
    /**
     * comma-delimited ID@host:port seed nodes
     */
    seeds: string;
    /**
     * enable/disable UPNP port forwarding
     */
    upnp: boolean;
  };
  /**
   * socket address to listen on for connections from external priv_validator process
   */
  privValidatorLaddr: string;
  /**
   * proxy app address, or one of: 'kvstore', 'persistent_kvstore' or 'noop' for local testing.
   * @default "tcp://127.0.0.1:26658"
   * */
  proxyApp: string;
  /**
   * Pruning strategy (default|nothing|everything|custom)
   * @default "default"
   */
  pruning: "default" | "nothing" | "everything" | "custom";
  /**
   * Height interval at which pruned heights are removed from disk (ignored if pruning is not 'custom')
   */
  pruningInterval: number;
  /**
   * Number of recent heights to keep on disk (ignored if pruning is not 'custom')
   */
  pruningKeepRecent: number;
  rpc: {
    /**
     * GRPC listen address (BroadcastTx only). Port required
     */
    grpcLaddr: string;
    /**
     * RPC listen address. Port required
     * @default "tcp://127.0.0.1:26657"
     * */
    laddr: string;
    /**
     * pprof listen address (https://golang.org/pkg/net/http/pprof)
     */
    pprofLaddr: string;
    /**
     * enabled unsafe rpc methods
     */
    unsafe: boolean;
  };
  /**
   * State sync snapshot interval
   */
  stateSyncSnapshotInterval: number;
  /**
   * State sync snapshot to keep
   * @default 2
   */
  stateSyncSnapshotKeepRecent: number;
  /**
   * Provide full stack traces for errors in ABCI Log
   */
  trace: boolean;
  /**
   * Enable KVStore tracing to an output file
   */
  traceStore: string;
  /**
   * Transport protocol: socket, grpc
   * @default "socket"
   */
  transport: "socket" | "grpc";
  /**
   * Skip a set of upgrade heights to continue the old binary
   */
  unsafeSkipUpgrades: number[];
  /**
   * Run abci app embedded in-process with tendermint
   * @default true
   */
  withTendermint: boolean;
  /**
   * Skip x/crisis invariants check on startup
   */
  xCrisisSkipAssertInvariants: boolean;
};

type LogMessage = {
  level: string;
  module: string;
  time: string;
  message: string;
  [key: string]: unknown;
};
export const start = (
  config: DConfig,
  options: DeepPartial<StartFlags & GlobalFlags> = {}
) => {
  let { api, ...mergedOptions } = Object.assign(
    {},
    pick(config.defaultArgs, [
      "home",
      // "chainId",
      "logLevel",
      "logFormat",
    ]),
    options
  );
  if (api) {
    const { port, ...rest } = api;
    if (port) {
      api = {
        ...rest,
        address: `tcp://localhost:${port}`,
      };
    }
  }

  const args = [
    "start",
    ...toCliArgs({ api, ...mergedOptions }),
  ];

  // const proc = spawn(args, {
  //   stdio: ["pipe", "pipe", "pipe"],
  // });
  const proc = spawn(config.executablePath, args, {
    stdio: ["pipe", "pipe", "pipe"],
  });

  const subscriptions = new Set<
    (log: LogMessage) => void
  >();

  const enc = new TextDecoder();
  const listenToLoks = async () => {
    for await (const chunk of proc.stdout) {
      if (subscriptions.size === 0) continue;
      const logs: LogMessage[] = enc
        .decode(chunk)
        .split("\n")
        .filter(Boolean)
        .map((text) => JSON.parse(text));
      for (const log of logs) {
        for (const subscription of subscriptions) {
          subscription(log);
        }
      }
    }
  };
  listenToLoks();

  return {
    ...proc,
    subscribe: (cb: (log: LogMessage) => void) => {
      subscriptions.add(cb);
      return () => {
        subscriptions.delete(cb);
      };
    },
  };
};
