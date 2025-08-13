"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function LogoutPage() {
  useEffect(() => {
    localStorage.removeItem("token");
    redirect("/login");
  }, []);

  return null;
}
