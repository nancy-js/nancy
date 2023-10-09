import { bank }from './bank.js'
import { addGenesisAccount }from './add-genesis-account.js'
import { gentx }from './gentx.js'
import { collectGentxs } from './collect-gentx.js';


export const genesis = {
  bank,
  addGenesisAccount,
  gentx,
  collectGentxs,
};
