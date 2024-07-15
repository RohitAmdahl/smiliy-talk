import { Button } from "@/components/ui/button";
import Signup from "@/components/signup/Signup";
export default function Home() {
  return (
    <div className="">
      <Signup />
      <div>
        <h1>shadcn/ui</h1>
        <Button size="lg">Click me</Button>
      </div>
    </div>
  );
}
