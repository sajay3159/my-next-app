"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the token from cookies on the client side
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const onClickHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Logout not successful");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Dashboard</h1>
      <p className={styles.subtext}>Welcome to your dashboard.</p>
      <button className={styles.button} onClick={onClickHandler}>
        Logout
      </button>
    </div>
  );
}
