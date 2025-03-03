import { SignIn } from "@clerk/nextjs"
const page = () => {
    return <div className="flex h-screen justify-center items-center mx-auto">
      <SignIn/>
  </div>
}

export default page