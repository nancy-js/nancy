export interface CometBFTConfig {
  /**
   * TCP or UNIX socket address of the ABCI application, or the name of an ABCI application compiled in with the CometBFT binary.
   */
  proxy_app: string;
  /**
   * A custom human readable name for this node.
   */
  moniker: string;
  /**
   * If this node is many blocks behind the tip of the chain, BlockSync allows them to catchup quickly by downloading blocks in parallel and verifying their commits. Deprecated: this key will be removed and BlockSync will be enabled unconditionally in the next major release.
   */
  block_sync: boolean;
  /**
   * Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb
   */
  db_backend:
    | "goleveldb"
    | "cleveldb"
    | "boltdb"
    | "rocksdb"
    | "badgerdb";
  /**
   * Database directory.
   */
  db_dir: string;
  /**
   * Output level for logging, including package level options.
   */
  log_level: string;
  /**
   * Output format: 'plain' (colored text) or 'json'.
   */
  log_format: "plain" | "json";
  /**
   * Path to the JSON file containing the initial validator set and other meta data.
   */
  genesis_file: string;
  /**
   * Path to the JSON file containing the private key to use as a validator in the consensus protocol.
   */
  priv_validator_key_file: string;
  /**
   * Path to the JSON file containing the last sign state of a validator.
   */
  priv_validator_state_file: string;
  /**
   * TCP or UNIX socket address for CometBFT to listen on for connections from an external PrivValidator process.
   */
  priv_validator_laddr: string;
  /**
   * Path to the JSON file containing the private key to use for node authentication in the p2p protocol.
   */
  node_key_file: string;
  /**
   * Mechanism to connect to the ABCI application: socket | grpc.
   */
  abci: "socket" | "grpc";
  /**
   * If true, query the ABCI app on connecting to a new peer so the app can decide if we should keep the connection or not.
   */
  filter_peers: boolean;
  rpc: {
    /**
     * TCP or UNIX socket address for the RPC server to listen on.
     */
    laddr: string;
    /**
     * A list of origins a cross-domain request can be executed from. Default value '[]' disables cors support. Use '["*"]' to allow any origin.
     */
    cors_allowed_origins: string[];
    /**
     * A list of methods the client is allowed to use with cross-domain requests.
     */
    cors_allowed_methods: string[];
    /**
     * A list of non simple headers the client is allowed to use with cross-domain requests.
     */
    cors_allowed_headers: string[];
    /**
     * TCP or UNIX socket address for the gRPC server to listen on. NOTE: This server only supports /broadcast_tx_commit.
     */
    grpc_laddr: string;
    /**
     * Maximum number of simultaneous connections. Does not include RPC (HTTP&WebSocket) connections. See max_open_connections. If you want to accept a larger number than the default, make sure you increase your OS limits. 0 - unlimited. Should be < {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files} 1024 - 40 - 10 - 50 = 924 = ~900.
     */
    grpc_max_open_connections: number;
    /**
     * Activate unsafe RPC commands like /dial_seeds and /unsafe_flush_mempool.
     */
    unsafe: boolean;
    /**
     * Maximum number of simultaneous connections (including WebSocket). Does not include gRPC connections. See grpc_max_open_connections. If you want to accept a larger number than the default, make sure you increase your OS limits. 0 - unlimited. Should be < {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files} 1024 - 40 - 10 - 50 = 924 = ~900.
     */
    max_open_connections: number;
    /**
     * Maximum number of unique clientIDs that can /subscribe. If you're using /broadcast_tx_commit, set to the estimated maximum number of broadcast_tx_commit calls per block.
     */
    max_subscription_clients: number;
    /**
     * Maximum number of unique queries a given client can /subscribe to. If you're using GRPC (or Local RPC client) and /broadcast_tx_commit, set to the estimated # maximum number of broadcast_tx_commit calls per block.
     */
    max_subscriptions_per_client: number;
    /**
     * Experimental parameter to specify the maximum number of events a node will buffer, per subscription, before returning an error and closing the subscription. Must be set to at least 100, but higher values will accommodate higher event throughput rates (and will use more memory).
     */
    experimental_subscription_buffer_size: number;
    /**
     * Experimental parameter to specify the maximum number of RPC responses that can be buffered per WebSocket client. If clients cannot read from the WebSocket endpoint fast enough, they will be disconnected, so increasing this parameter may reduce the chances of them being disconnected (but will cause the node to use more memory). Must be at least the same as "experimental_subscription_buffer_size", otherwise connections could be dropped unnecessarily. This value should ideally be somewhat higher than "experimental_subscription_buffer_size" to accommodate non-subscription-related RPC responses.
     */
    experimental_websocket_write_buffer_size: number;
    /**
     * If a WebSocket client cannot read fast enough, at present we may silently drop events instead of generating an error or disconnecting the client. Enabling this experimental parameter will cause the WebSocket connection to be closed instead if it cannot read fast enough, allowing for greater predictability in subscription behavior.
     */
    experimental_close_on_slow_client: boolean;
    /**
     * How long to wait for a tx to be committed during /broadcast_tx_commit. WARNING: Using a value larger than 10s will result in increasing the global HTTP write timeout, which applies to all connections and endpoints. See https://github.com/tendermint/tendermint/issues/3435.
     */
    timeout_broadcast_tx_commit: string;
    /**
     * Maximum size of request body, in bytes.
     */
    max_body_bytes: number;
    /**
     * Maximum size of request header, in bytes.
     */
    max_header_bytes: number;
    /**
     * The path to a file containing certificate that is used to create the HTTPS server. Might be either absolute path or path related to CometBFT's config directory. If the certificate is signed by a certificate authority, the certFile should be the concatenation of the server's certificate, any intermediates, and the CA's certificate. NOTE: both tls_cert_file and tls_key_file must be present for CometBFT to create HTTPS server. Otherwise, HTTP server is run.
     */
    tls_cert_file: string;
    /**
     * The path to a file containing matching private key that is used to create the HTTPS server. Might be either absolute path or path related to CometBFT's config directory. NOTE: both tls-cert-file and tls-key-file must be present for CometBFT to create HTTPS server. Otherwise, HTTP server is run.
     */
    tls_key_file: string;
    /**
     * pprof listen address (https://golang.org/pkg/net/http/pprof)
     */
    pprof_laddr: string;
  };
  p2p: {
    /**
     * Address to listen for incoming connections.
     */
    laddr: string;
    /**
     * Address to advertise to peers for them to dial. If empty, will use the same port as the laddr, and will introspect on the listener to figure out the address. IP and port are required. Example: 159.89.10.97:26656
     */
    external_address: string;
    /**
     * Comma separated list of seed nodes to connect to.
     */
    seeds: string;
    /**
     * Comma separated list of nodes to keep persistent connections to.
     */
    persistent_peers: string;
    /**
     * Path to address book.
     */
    addr_book_file: string;
    /**
     * Set true for strict address routability rules. Set false for private or local networks.
     */
    addr_book_strict: boolean;
    /**
     * Maximum number of inbound peers.
     */
    max_num_inbound_peers: number;
    /**
     * Maximum number of outbound peers to connect to, excluding persistent peers.
     */
    max_num_outbound_peers: number;
    /**
     * List of node IDs, to which a connection will be (re)established ignoring any existing limits.
     */
    unconditional_peer_ids: string;
    /**
     * Maximum pause when redialing a persistent peer (if zero, exponential backoff is used).
     */
    persistent_peers_max_dial_period: string;
    /**
     * Time to wait before flushing messages out on the connection.
     */
    flush_throttle_timeout: string;
    /**
     * Maximum size of a message packet payload, in bytes.
     */
    max_packet_msg_payload_size: number;
    /**
     * Rate at which packets can be sent, in bytes/second.
     */
    send_rate: number;
    /**
     * Rate at which packets can be received, in bytes/second.
     */
    recv_rate: number;
    /**
     * Set true to enable the peer-exchange reactor.
     */
    pex: boolean;
    /**
     * Set true to enable a node to run in seed mode, making it discoverable by other nodes.
     */
    seed_mode: boolean;
    /**
     * Comma separated list of peer IDs to keep private (will not be gossiped to other peers).
     */
    private_peer_ids: string;
    /**
     * Toggle to disable guard against peers connecting from the same ip.
     */
    allow_duplicate_ip: boolean;
    /**
     * Timeout to wait for a handshake response.
     */
    handshake_timeout: string;
    /**
     * Timeout to wait for a dial to complete.
     */
    dial_timeout: string;
  };
  mempool: {
    /**
     * Mempool version to use: 'v0' for FIFO mempool, 'v1' for prioritized mempool.
     */
    version: string;
    /**
     * Toggle to recheck transactions in the mempool.
     */
    recheck: boolean;
    /**
     * Toggle to broadcast transactions from the mempool.
     */
    broadcast: boolean;
    /**
     * Directory for the Write-Ahead Logging of mempool transactions.
     */
    wal_dir: string;
    /**
     * Maximum number of transactions in the mempool.
     */
    size: number;
    /**
     * Limit the total size of all txs in the mempool.
     */
    max_txs_bytes: number;
    /**
     * Size of the cache used to filter transactions seen earlier.
     */
    cache_size: number;
    /**
     * Do not remove invalid transactions from the cache.
     */
    "keep-invalid-txs-in-cache": boolean;
    /**
     * Maximum size of a single transaction.
     */
    max_tx_bytes: number;
    /**
     * Maximum size of a batch of transactions to send to a peer.
     */
    max_batch_bytes: number;
    /**
     * Maximum duration a transaction can exist in the mempool.
     */
    "ttl-duration": string;
    /**
     * Maximum number of blocks a transaction can exist in the mempool.
     */
    "ttl-num-blocks": number;
  };
  statesync: {
    /**
     * Enable state sync for rapid node bootstrapping.
     */
    enable: boolean;
    /**
     * RPC servers for light client verification of the synced state machine and retrieval of state data.
     */
    rpc_servers: string;
    /**
     * Trusted height for light client verification.
     */
    trust_height: number;
    /**
     * Trusted hash for light client verification.
     */
    trust_hash: string;
    /**
     * Duration during which validators can be trusted for light client verification.
     */
    trust_period: string;
    /**
     * Time spent discovering snapshots before initiating a restore.
     */
    discovery_time: string;
    /**
     * Temporary directory for state sync snapshot chunks.
     */
    temp_dir: string;
    /**
     * Timeout duration before re-requesting a chunk.
     */
    chunk_request_timeout: string;
    /**
     * Number of concurrent chunk fetchers to run.
     */
    chunk_fetchers: string;
  };
  blocksync: {
    /**
     * Block Sync version to use.
     */
    version: string;
  };
  consensus: {
    /**
     * File location for the consensus Write-Ahead Logging.
     */
    wal_file: string;
    /**
     * How long we wait for a proposal block before prevoting nil.
     */
    timeout_propose: string;
    /**
     * How much timeout_propose increases with each round.
     */
    timeout_propose_delta: string;
    /**
     * How long we wait after receiving +2/3 prevotes for “anything”.
     */
    timeout_prevote: string;
    /**
     * How much the timeout_prevote increases with each round.
     */
    timeout_prevote_delta: string;
    /**
     * How long we wait after receiving +2/3 precommits for “anything”.
     */
    timeout_precommit: string;
    /**
     * How much the timeout_precommit increases with each round.
     */
    timeout_precommit_delta: string;
    /**
     * How long we wait after committing a block before starting on the new height.
     */
    timeout_commit: string;
    /**
     * How many blocks to look back to check existence of the node's consensus votes before joining consensus.
     */
    double_sign_check_height: number;
    /**
     * Make progress as soon as we have all the precommits.
     */
    skip_timeout_commit: boolean;
    /**
     * Toggle for creating empty blocks.
     */
    create_empty_blocks: boolean;
    /**
     * Interval between empty blocks.
     */
    create_empty_blocks_interval: string;
    /**
     * Reactor sleep duration for peer gossip.
     */
    peer_gossip_sleep_duration: string;
    /**
     * Reactor sleep duration for peer majority queries.
     */
    peer_query_maj23_sleep_duration: string;
  };
  storage: {
    /**
     * Set to true to discard ABCI responses from the state store.
     */
    discard_abci_responses: boolean;
  };
  tx_index: {
    /**
     * What indexer to use for transactions.
     */
    indexer: string;
    /**
     * The PostgreSQL connection configuration.
     */
    "psql-conn": string;
  };
  instrumentation: {
    /**
     * Toggle for Prometheus metrics.
     */
    prometheus: boolean;
    /**
     * Address to listen for Prometheus collector(s) connections.
     */
    prometheus_listen_addr: string;
    /**
     * Maximum number of simultaneous connections.
     */
    max_open_connections: number;
    /**
     * Instrumentation namespace.
     */
    namespace: string;
  };
}
