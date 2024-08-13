"use Server";
import { signIn } from "@/auth";
// interface Formdata {
//     name: string;
//     action: string;
// }
export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action);

  console.log(action);
  console.log("doSocialLogin");
}

export async function doLogout() {
  console.log("doLogout");
}
