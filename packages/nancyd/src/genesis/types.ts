import { Amount } from "../utils/types.js";

export type Genesis = {
  app_state: {
    bank: BankModule;
  };

  app_hash: string;
  genesis_time: string;
  chain_id: string;
  initial_height: string;
  validators: {
    address: string;
    name: string;
    power: string;
    pub_key: {
      type: string;
      value: string;
    };
  }[];
  consensus_params: {
    block: {
      max_bytes: string;
      max_gas: string;
    };
    evidence: {
      max_age_num_blocks: string;
      max_age_duration: string;
      max_bytes: string;
    };
    validator: {
      pub_key_types: string[];
    };
    version: {
      app: string;
    };
  };
};

type BankModule = {
  balances: {
    address: string;
    coins: {
      denom: string;
      amount: string;
    }[];
  }[];

  denom_metadata: {
    denom_units: {
      aliases: string[];
      exponent: number;
      denom: string;
    }[];
    base: string;
    description: string;
    display: string;
    name: string;
    symbol: string;
    uri: string;
    uri_hash: string;
  }[];
  params: {
    default_send_enabled: boolean;
    send_enabled: boolean;
  };
  supply: {
    amount: string;
    denom: string;
  }[];
  send_enabled: {
    denom: string;
    enabled: boolean;
  }[];
};
