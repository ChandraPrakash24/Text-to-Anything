"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8056f458-3f77-4fde-bf42-43bfbfc797b3");
  }, []);

  return null;
};
