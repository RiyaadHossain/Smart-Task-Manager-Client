"use client";
import { Layout, theme } from "antd";
import Sidebar from "../components/layout/Sidebar";
import LayoutContainer from "../components/layout/LayoutContainer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  localStorage.setItem("accessToken", "your_token_here"); // For testing purposes only
  const token = localStorage.getItem("accessToken");

  if (!token) 
    router.replace("/login");
   else 
    Promise.resolve().then(() => setLoading(false));
  
}, [router]);


  // Optional: simple loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium">
        Checking authentication...
      </div>
    );
  }

  return (
    <Layout className="h-screen">
      <Sidebar collapsed={collapsed} />
      <LayoutContainer
        borderRadiusLG={borderRadiusLG}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        colorBgContainer={colorBgContainer}
      >
        {children}
      </LayoutContainer>
    </Layout>
  );
};

export default DashboardLayout;
