"use server";

export default async (formData) => {
  e.preventDefault();
  const action = formData.get("action");
  console.log(action);
};
