import type { SVGProps } from "react";
import type { ServiceIconName } from "@/lib/content/services";

type IconProps = SVGProps<SVGSVGElement>;

/** Ortak line-icon gövdesi — bağımlılık eklemeden tutarlı bir ikon seti. */
function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- Hizmet ikonları ---------------------------------------------------- */

export const ChildIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="7" r="3.2" />
    <path d="M5.5 20.5v-1.2a5.5 5.5 0 0 1 11 0v1.2" />
    <path d="M18.5 4.5v3M20 6h-3" />
  </Icon>
);

export const TeenIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="9" r="3.2" />
    <path d="M6 20.5v-.8a6 6 0 0 1 12 0v.8" />
    <path d="M5.5 9.5a6.5 6.5 0 0 1 13 0" />
    <path d="M4.6 9.5h1.2v3.2H4.6zM18.2 9.5h1.2v3.2h-1.2z" />
  </Icon>
);

export const ParentIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="8.5" cy="6.5" r="2.9" />
    <path d="M3.5 20.5v-1.3a5 5 0 0 1 10 0v1.3" />
    <circle cx="17.5" cy="11.5" r="2.1" />
    <path d="M14 20.5v-1a3.5 3.5 0 0 1 7 0v1" />
  </Icon>
);

export const FamilyIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="6.5" cy="8" r="2.4" />
    <circle cx="17.5" cy="8" r="2.4" />
    <circle cx="12" cy="12.5" r="2" />
    <path d="M2.5 19v-.8a4 4 0 0 1 8 0" />
    <path d="M13.5 18.2a4 4 0 0 1 8 0V19" />
    <path d="M8.8 21v-.4a3.2 3.2 0 0 1 6.4 0v.4" />
  </Icon>
);

export const SchoolIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
    <path d="M6.5 10v5.2c0 1.8 2.5 3.3 5.5 3.3s5.5-1.5 5.5-3.3V10" />
    <path d="M21 7.5V13" />
  </Icon>
);

export const ExamIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 4H6.8A1.8 1.8 0 0 0 5 5.8v13.4A1.8 1.8 0 0 0 6.8 21h10.4a1.8 1.8 0 0 0 1.8-1.8V5.8A1.8 1.8 0 0 0 17.2 4H16" />
    <rect x="8" y="2.6" width="8" height="3.2" rx="1.2" />
    <path d="m9 13.5 2 2 4-4" />
  </Icon>
);

export const EmotionIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20.2s-7.2-4.3-7.2-9.1A4 4 0 0 1 12 8.4a4 4 0 0 1 7.2 2.7c0 1.5-.7 2.9-1.7 4.1" />
    <path d="M4.8 14.2h2.6l1.3-2.2 1.6 3.6 1.4-2.6" />
  </Icon>
);

const serviceIcons: Record<ServiceIconName, (p: IconProps) => React.JSX.Element> = {
  child: ChildIcon,
  teen: TeenIcon,
  parent: ParentIcon,
  family: FamilyIcon,
  school: SchoolIcon,
  exam: ExamIcon,
  emotion: EmotionIcon,
};

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & IconProps) {
  const Component = serviceIcons[name];
  return <Component {...props} />;
}

/* --- Arayüz ikonları ---------------------------------------------------- */

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
  </Icon>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </Icon>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6.2 3.5h3l1.5 4-2 1.3a11.5 11.5 0 0 0 5.5 5.5l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.4" />
    <path d="m3.8 7 7.2 5.2a1.8 1.8 0 0 0 2 0L20.2 7" />
  </Icon>
);

export const MapPinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </Icon>
);

export const CalendarIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.6" />
    <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
  </Icon>
);

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s7-3.2 7-8.6V5.9L12 3 5 5.9v6.5C5 17.8 12 21 12 21Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Icon>
);

export const SparkleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
  </Icon>
);

export const BookIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 5.5A2 2 0 0 1 6 3.5h13v14H6a2 2 0 0 0-2 2v-14Z" />
    <path d="M4 19.5a2 2 0 0 1 2-2h13v3H6a2 2 0 0 1-2-2Z" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const WhatsappIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 20.5 4.9 16A8 8 0 1 1 8 19.1l-4.5 1.4Z" />
    <path d="M9 9.2c.3 1.6 2.2 3.5 3.8 3.8l.9-1.2 1.8.9v1.4c-2.6.5-5.8-2.4-6.3-5l1.4-.4.4 1.9-1 .6" />
  </Icon>
);

export const InstagramIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
  </Icon>
);

export const LinkedinIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3.4" />
    <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a1.9 1.9 0 0 1 3.8 0V16" />
  </Icon>
);
