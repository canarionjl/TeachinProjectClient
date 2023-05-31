import { computed } from "vue";
import { useAnchorWallet } from "solana-wallets-vue";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";

import idl from '@/program/idl/teaching_project_handler.json'

const preflightCommitment = "processed";
const commitment = "confirmed";
const programID = new PublicKey(idl.metadata.address);

let workspace: any;

export const useWorkspace = () => workspace;

export const initWorkspace = () => {

  const wallet: any = useAnchorWallet();
  const connection = new Connection("http://127.0.0.1:8899", commitment);

  const provider = computed (
    () =>
      new AnchorProvider(connection, wallet.value, {
        preflightCommitment,
        commitment,
      })
  );
  
  const program = computed(
    () => new Program (idl as Idl, programID, provider.value))
;

  workspace = {
    wallet,
    connection,
    provider,
    program,
  };

};