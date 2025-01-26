import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-10 pb-10">
      <div className="flex justify-between items-center py-20 ">
        <Image src="/assets/logo.svg" alt="logo" width={180} height={100} className="filter-white" />
        <div className="flex items-center space-x-4 gap-10">
          <Image src="/assets/women-owned-logo.svg" alt="logo" width={150} height={100} className="filter-white" />
          <Image src="/assets/deborah.jpg" alt="logo" width={150} height={100} className="rounded-full border-2 border-white" />
        </div>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex flex-col gap-y-5 font-semibold font-inter">
          <div className="flex gap-x-12">
            <a href="#" className="underline">Courses</a>
            <a href="#" className="underline">Find a Doctor</a>
            <a href="#" className="underline">Share a Review</a>
            <a href="#" className="underline">For Employers</a>
            <a href="#" className="underline">For Doctors and Clinics</a>
            <a href="#" className="underline">All US Provider</a>
          </div>
          <div className="flex gap-x-12">
            <a href="#" className="underline">info@fertilityiq.com</a>
            <a href="#" className="underline">Terms of Use</a>
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">FAQs</a>
          </div>
        </div>
        <div className="text-end mt-4 font-inter">
          <p>Our content is for informational purposes only - it's not a <br />
            substitute for medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  )
}