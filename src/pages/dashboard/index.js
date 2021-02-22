import React, { useEffect } from "react";
import DashboardSection from "../../components/DashboardSection";
import { useAuth } from "../../util/auth.js";
import { useRouter } from "../../util/router.js";

function DashboardPage() {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth, router]);

  return (
    <DashboardSection
      color="white"
      size="large"
      title="Dashboard"
      subtitle="Dashboard components are coming soon."
    />
  );
}

export default DashboardPage;
