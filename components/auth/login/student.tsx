import { User, LockIcon, LockKeyhole , Eye } from "lucide-react";
export default function StudentLoginForm() {
  return (
    <div>
      <label htmlFor="fullname">Full name</label>

      <div className="border border-gray-200">
        <User />{" "}
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter full name here"
        />
      </div>

      <label htmlFor="password">Password</label>
      <div className="flex gap-2 items-center justify-start" >
        
        <LockKeyhole className="cursor-pointer" />
        <input
        className="outline-none p-3"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password here"
        />
        <Eye className="cursor-pointer" />
      </div>

      <button>login</button>

      <p>Don't have an account? Create account</p>
    </div>
  );
}
