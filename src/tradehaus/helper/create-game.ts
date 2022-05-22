import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, Keypair, PublicKey, TokenAccountsFilter } from '@solana/web3.js';
import { TradehausClient } from '..';
import * as anchor from "@project-serum/anchor";

const findUserRewardAccount = async (
  user: PublicKey,
  rewardMint: PublicKey,
  conn: Connection
): Promise<PublicKey> => {
  const tokenAccountsFilter: TokenAccountsFilter = {
    programId: TOKEN_PROGRAM_ID
  }
  const splTokenAccounts = await conn.getParsedTokenAccountsByOwner(user, tokenAccountsFilter);
  const rewardAccount = splTokenAccounts.value.filter(
    account => account.account.data.parsed.info.mint === rewardMint.toBase58()
  ).slice(0)
  return rewardAccount[0].pubkey
}

export async function createGameFe(
  host: PublicKey,
  rewardMint: PublicKey,
  join: number,
  start: number,
  end: number,
  startUsd: number,
  winners: number,
  maxPlayers:number,
  rewardAmount:number,
  th: TradehausClient
) {
  const gameConfig = anchor.web3.Keypair.generate();
  const hostRewardAccount = await findUserRewardAccount(host, rewardMint, th.provider.connection);
  const [reward_escrow_pda, reward_escrow_bump] = await th.findRewardEscrowPDA(gameConfig.publicKey);
  return await th.createGame(
    gameConfig,
    host,
    hostRewardAccount,
    rewardMint,
    reward_escrow_pda,
    Math.ceil(join/1000),
    Math.ceil(start/1000),
    Math.ceil(end/1000),
    startUsd,
    winners,
    maxPlayers,
    rewardAmount,
    reward_escrow_bump
  )
}