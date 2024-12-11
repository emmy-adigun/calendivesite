import localFont from "next/font/local";
import { Allura } from "next/font/google";


export const AlluraFont = Allura({
  subsets: ["latin"],
  weight: "400",
});
export const AdleryFont = localFont({
  src: "/fonts/Adlery-Pro-Blockletter-trial.ttf"
});

export const AdleryFont2 = localFont({
    src: "/fonts/Adlery-Pro-trial.ttf"
});
