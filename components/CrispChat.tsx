"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0263b525-10e7-4954-948c-0c733a94f17c");
  }, []);

  return null;
};
