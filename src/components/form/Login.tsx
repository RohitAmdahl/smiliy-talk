// "use server";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import OauthButton from "./OauthButton";
// import { login, signup } from "@/app/login/actions";
// import { useForm, FormProvider } from "react-hook-form";

// const FormSchema = z.object({
//   email: z
//     .string()
//     .min(2, {
//       message: "Email is required.",
//     })
//     .email("Invalid email."),
//   password: z
//     .string()
//     .min(2, "Password is required.")
//     .max(8, "Password must be less than 8 characters."),
// });

// const Login = () => {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   });
//   console.log(Form);

//   const onSubmit = () => {
//     console.log("form", form.getValues());
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="text-3xl text-center">Log in</h1>
//         <p className="text-center font-serif p-4">
//           Login to get started, please enter your credentials
//         </p>
//       </div>
//       <div className="w-full max-w-md mx-auto container font-sans px-8 py-8 border-2">
//         <FormProvider {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="w-full space-y-6"
//           >
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="Enter your password"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               formAction={login}
//               className="w-full"
//               variant="default"
//               type="submit"
//             >
//               Login
//             </Button>
//           </form>
//         </FormProvider>
//         <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-slate-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-slate-300">
//           or
//         </div>
//         <OauthButton />
//         <div>
//           <p className="flex gap-4 justify-center items-center">
//             Don&apos;t have an account?
//             <Link className="font-bold text-xl hover:underline" href="/sign-up">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
"use server";

import { login, signup } from "@/app/login/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 border rounded-lg shadow-md">
      <div>
        <h1 className="text-3xl text-center">Log in</h1>

        <p className="text-center font-serif p-4">
          Login to get started, please enter your credentials
        </p>
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg">
            Email:
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-lg">
            Password:
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            className="mt-1 block w-full"
          />
        </div>

        <div className="space-y-4">
          <Button
            formAction={login}
            type="submit"
            className="w-full text-lg tracking-wider"
          >
            Login
          </Button>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-slate-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-slate-300">
            or
          </div>
          <Button
            formAction={signup}
            type="submit"
            variant="secondary"
            className="w-full text-lg tracking-wider"
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
