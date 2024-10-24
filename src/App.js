import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import { Button } from 'antd';

export default function SyncedInputs() {
  return (
    <div>
      <Button type="primary">Button</Button>
      This is App.js content
      <Nav />
      <Outlet />
    </div>
  )
}