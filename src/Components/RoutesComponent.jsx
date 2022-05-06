import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Work} from "../Pages/Work";
import {About} from "../Pages/About";
import {Playground} from "../Pages/Playground";
import {FinWell} from "../Pages/FinWell";
import {Pivot} from "../Pages/Pivot";
import {SponsorCircle} from "../Pages/SponsorCircle";
import {Access} from "../Pages/Access";
import {Knowbie} from "../Pages/Knowbie";
import {Aprio} from "../Pages/Aprio";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Work/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/playground" element={<Playground/>} />
      <Route path="/finwell" element={<FinWell/>} />
      <Route path="/pivot" element={<Pivot/>} />
      <Route path="/sponsorcircle" element={<SponsorCircle/>} />
      <Route path="/access" element={<Access/>} />
      <Route path="/knowbie" element={<Knowbie/>} />
      <Route path="/aprio" element={<Aprio/>} />
    </Routes>
  )
}