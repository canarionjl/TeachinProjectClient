
import "solana-wallets-vue/styles.css";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

export const walletOptions = {
    wallets: [
        new PhantomWalletAdapter(),
    ],
    autoConnect: true,
};

