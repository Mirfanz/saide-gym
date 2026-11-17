import React from "react";

/**
 * Official Brand Social Media Vector - WhatsApp
 * Accurate official SVG glyph for Indonesian audience recognition.
 */
export function WhatsAppIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="WhatsApp"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Official Brand Social Media Vector - Instagram
 */
export function InstagramIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Official Brand Social Media Vector - TikTok
 */
export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="TikTok"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.02 2.77.01 5.53-.02 8.3-.08 1.83-.69 3.65-1.85 5.09-1.43 1.76-3.64 2.82-5.91 2.87-2.34.07-4.69-.9-6.3-2.6-1.82-1.88-2.65-4.57-2.26-7.18.39-2.58 2.06-4.85 4.45-5.95 1.84-.87 3.99-.95 5.92-.25.01 1.44.01 2.89 0 4.33-1.06-.41-2.28-.46-3.37-.09-1.03.34-1.88 1.13-2.28 2.14-.52 1.25-.33 2.76.51 3.82.84 1.07 2.24 1.63 3.61 1.43 1.34-.17 2.48-1.06 2.93-2.33.25-.66.33-1.37.33-2.07l.03-15.35z" />
    </svg>
  );
}

/**
 * SAIDE GYM Official Brand Logo (The Olympic Hex Plate "S")
 * Represents iron weight plates, powerlifting, and athletic strength.
 * Minimalist, 2-color scalable SVG.
 */
export function SaideGymLogo({
  className = "w-6 h-6",
  variant = "duo",
}: {
  className?: string;
  variant?: "duo" | "mono";
}) {
  return (
    <svg
      className={className}
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256 32L464 152V360L256 480L48 360V152L256 32Z"
        fill={variant === "duo" ? "#DC2626" : "currentColor"}
      />
      <path
        d="M256 72L424 168V344L256 440L88 344V168L256 72Z"
        fill={variant === "duo" ? "#991B1B" : "rgba(0,0,0,0.25)"}
      />
      <path
        d="M184 136H344L376 216H240C231.2 216 224 223.2 224 232V240C224 248.8 231.2 256 240 256H328C354.56 256 376 277.44 376 304V328C376 354.56 354.56 376 328 376H168L136 296H272C280.8 296 288 288.8 288 280V272C288 263.2 280.8 256 272 256H184C157.44 256 136 234.56 136 208V184C136 157.44 157.44 136 184 136Z"
        fill={variant === "duo" ? "#FFFFFF" : "#09090B"}
      />
      <path
        d="M255.6 125.6C265.32 125.6 273.2 117.72 273.2 108C273.2 98.2798 265.32 90.4 255.6 90.4C245.88 90.4 238 98.2798 238 108C238 117.72 245.88 125.6 255.6 125.6Z"
        fill={variant === "duo" ? "#FFFFFF" : "#09090B"}
      />
      <path
        d="M256 421.6C265.72 421.6 273.6 413.72 273.6 404C273.6 394.28 265.72 386.4 256 386.4C246.28 386.4 238.4 394.28 238.4 404C238.4 413.72 246.28 421.6 256 421.6Z"
        fill={variant === "duo" ? "#FFFFFF" : "#09090B"}
      />
    </svg>
  );
}
