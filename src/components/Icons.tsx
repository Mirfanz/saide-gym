import React from "react";

/**
 * Official Brand Social Media Vector - WhatsApp
 * Accurate official SVG glyph for Indonesian audience recognition.
 */
export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
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
export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo SAIDE GYM"
    >
      <path
        d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z"
        fill={variant === "duo" ? "#DC2626" : "currentColor"}
      />
      <path
        d="M16 4.5L26.5 10.5V21.5L16 27.5L5.5 21.5V10.5L16 4.5Z"
        fill={variant === "duo" ? "#991B1B" : "rgba(0,0,0,0.25)"}
      />
      <path
        d="M22 8H12L10 13H18.5C19.05 13 19.5 13.45 19.5 14V14.5C19.5 15.05 19.05 15.5 18.5 15.5H13C11.34 15.5 10 16.84 10 18.5V20C10 21.66 11.34 23 13 23H23L25 18H16.5C15.95 18 15.5 17.55 15.5 17V16.5C15.5 15.95 15.95 15.5 16.5 15.5H22C23.66 15.5 25 14.16 25 12.5V11C25 9.34 23.66 8 22 8Z"
        fill={variant === "duo" ? "#FFFFFF" : "#09090B"}
      />
      <circle cx="16" cy="6.75" r="1.1" fill={variant === "duo" ? "#FFFFFF" : "#09090B"} />
      <circle cx="16" cy="25.25" r="1.1" fill={variant === "duo" ? "#FFFFFF" : "#09090B"} />
    </svg>
  );
}

/**
 * SAIDE GYM Freestanding Monogram (Interlocking Power Plates)
 * Minimalist geometric glyph forming an S from two heavy interlocking weights.
 */
export function SaideGymMark({
  className = "w-6 h-6",
  color1 = "#EF4444",
  color2 = "#FFFFFF",
}: {
  className?: string;
  color1?: string;
  color2?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mark SAIDE GYM"
    >
      <path
        d="M7 6H23C24.6569 6 26 7.34315 26 9V11C26 12.6569 24.6569 14 23 14H16L21 18H15L9 13.5C7.8 12.5 7 11.2 7 9.8V6Z"
        fill={color1}
      />
      <path
        d="M25 26H9C7.34315 26 6 24.6569 6 23V21C6 19.3431 7.34315 18 9 18H16L11 14H17L23 18.5C24.2 19.5 25 20.8 25 22.2V26Z"
        fill={color2}
      />
      <circle cx="16" cy="16" r="1.75" fill={color1} />
    </svg>
  );
}
