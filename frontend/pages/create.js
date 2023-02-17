import { Contract } from "ethers";
import { isAddress, parseEther } from "ethers/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useSigner, erc721ABI } from "wagmi";
import MarketplaceABI from "../abis/NFTMarketplace.json";
import Navbar from "@/components/Navbar";
import styles from "../styles/Create.module.css";
import { MARKETPLACE_ADDRESS } from "@/constants";

export default function Create() {
    
}