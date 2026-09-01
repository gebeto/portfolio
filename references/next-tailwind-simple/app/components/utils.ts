"use client";

import { useMediaQuery } from "@reactuses/core";

export const useIsMobile = () => useMediaQuery("(max-width: 767px)", false);
