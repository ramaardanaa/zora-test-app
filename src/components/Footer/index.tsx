import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-10 pb-10">
      <div className="container flex justify-between flex-col gap-5 md:flex-row items-center py-20 ">
        <Image src="/assets/logo.svg" alt="logo" width={180} height={100} className="filter-white" />
        <div className="flex items-center space-x-4 gap-10">
          <Image src="/assets/women-owned-logo.svg" alt="logo" width={150} height={100} className="filter-white" />
          <Image src="/assets/deborah.jpg" alt="logo" width={150} height={100} className="rounded-full border-2 border-white" />
        </div>
      </div>

      <div className="container flex justify-between items-center flex-wrap">
        <div className="flex flex-col gap-y-5 font-semibold font-inter">
          <div className="flex gap-x-2 flex-wrap">
            <Link href="/courses" className="underline">Courses</Link>
            <Link href="" className="underline">Find a Doctor</Link>
            <Link href="" className="underline">Share a Review</Link>
            <Link href="" className="underline">For Employers</Link>
            <Link href="" className="underline">For Doctors and Clinics</Link>
            <Link href="" className="underline">All US Provider</Link>
          </div>
          <div className="flex gap-x-2 flex-wrap">
            <Link href="" className="underline">info@fertilityiq.com</Link>
            <Link href="" className="underline">Terms of Use</Link>
            <Link href="" className="underline">Privacy Policy</Link>
            <Link href="" className="underline">FAQs</Link>
          </div>
        </div>
        <div className="text-start xl:text-end mt-4 font-inter">
          <div>Our content is for informational purposes only - it&apos;s not a <br />
            substitute for medical advice, diagnosis, or treatment.
          </div>
        </div>
      </div>
    </footer>
  )
}