'use client'
import React from 'react';
import Link from 'next/link';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/material';
import { useAuth } from '../Auth';
import { useRouter } from 'next/navigation';
import { PrivateRoute } from '@/app/PrivateRoute';

<<<<<<< HEAD
export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };
=======
import Link from "next/link"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Stack } from "@mui/material";
import { Datas } from "../auth";
import { useRouter } from 'next/navigation';

export default function Dashboardlayout(
    props: {
        children: React.ReactNode
    }
) {
    const { user } = Datas()
    const route = useRouter();
    if (user === null) {
        return route.push('/login')
    }
    return (
        <>
            <section>
                <Grid2 container spacing={2}>
                    <Grid2 xs={3}>
>>>>>>> main

  return (
    <PrivateRoute>
      <section>
        <Grid2 container spacing={2}>
          <Grid2 item xs={2}>
            <Stack direction="column" spacing={2}>
              <button onClick={handleLogout}>Logout</button>
              <div>
                <h2>Channels</h2>
                <button>Add Channel</button>
              </div>
              <div>
                <h1>Direct Messages</h1>
              </div>
            </Stack>
          </Grid2>
          <Grid2 item xs={12} md={9}>
            {props.children}
          </Grid2>
        </Grid2>
      </section>
    </PrivateRoute>
  );
}
