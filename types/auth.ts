/* -------------------- ROLES -------------------- */
export type UserRole = "student" | "tutor" | "organization";

/* -------------------- BASE -------------------- */
export interface BaseSignupData {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

/* -------------------- STUDENT -------------------- */
export interface StudentSignupData extends BaseSignupData {
  role: "student";
  firstName: string;
  lastName: string;
  phoneNumber: string;
  parentEmail?: string;
  parentPhoneNumber?: string;
  schoolLevel: string;
}

/* -------------------- TUTOR -------------------- */
export interface TutorSignupData extends BaseSignupData {
  role: "tutor";
  fullName: string;
  yearsOfExperience: string;
  subjectOfExpertise: string[];
  location?: string;
  bankName?: string;
  accountNumber?: string;
  rank?: string;
}

/* -------------------- ORGANIZATION -------------------- */
export interface OrganizationSignupData extends BaseSignupData {
  role: "organization";
  organizationName: string;
  typeOfOrganization?: string;
  registrationNumber?: string;
  officialEmail?: string;
  phoneNumber?: string;
  website?: string;
  country?: string;
  state?: string;
  city?: string;
  estimatedStudents?: string;
  contactPerson?: {
    fullName?: string;
    officialRole?: string;
    emailAddress?: string;
    phoneNumber?: string;
    alternateContact?: {
      email?: string;
      phone?: string;
    };
  };
  agreements?: {
    termsAndConditions?: boolean;
    dataPrivacyPolicy?: boolean;
  };
}

/* -------------------- UNION -------------------- */
export type SignupData =
  | StudentSignupData
  | TutorSignupData
  | OrganizationSignupData;

/* -------------------- RESPONSE -------------------- */
export interface SignupResponse {
  status?: string;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
    role?: UserRole;
    profile?: Record<string, unknown>;
  };
}
