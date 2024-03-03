"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

let crispKey = process.env.NEXT_PUBLIC_CRISP_PUBLISHABLE_KEY;

export const CrispChat = () => {
  useEffect(() => {    
    Crisp.configure( crispKey as string);
  }, []);

  return null;
};
