import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Work} from "../Pages/Work";
import {About} from "../Pages/About";
import {Playground} from "../Pages/Playground";
import {FinWell} from "../Pages/CaseStudyPages/FinWell";
import {Pivot} from "../Pages/CaseStudyPages/Pivot";
import {SponsorCircle} from "../Pages/CaseStudyPages/SponsorCircle";
import {Access} from "../Pages/CaseStudyPages/Access";
import {Knowbie} from "../Pages/CaseStudyPages/Knowbie";
import {Aprio} from "../Pages/CaseStudyPages/Aprio";
import {Solearn} from "../Pages/PlaygroundPages/Solearn";
import {HandMadeOnlineStore} from "../Pages/PlaygroundPages/HandMadeOnlineStore";
import {FeaturedDrawings} from "../Pages/PlaygroundPages/FeaturedDrawings";
import {BookBuds} from "../Pages/PlaygroundPages/BookBuds";
import {Recharge} from "../Pages/PlaygroundPages/Recharge";

export const RoutesComponent = () => {
    return (
      <Routes>
          <Route exact path="/" element={<Work/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/about" element={<About/>}/>
          <Route path="/playground" element={<Playground/>}/>
          <Route path="/finwell" element={<FinWell/>}/>
          <Route path="/pivot" element={<Pivot/>}/>
          <Route path="/sponsorcircle" element={<SponsorCircle/>}/>
          <Route path="/access" element={<Access/>}/>
          <Route path="/knowbie" element={<Knowbie/>}/>
          <Route path="/aprio" element={<Aprio/>}/>
          <Route path="/solearn" element={<Solearn/>}/>
          <Route path="/handMadeOnlineStore" element={<HandMadeOnlineStore/>}/>
          <Route path="/featuredDrawings" element={<FeaturedDrawings/>}/>
          <Route path="/bookBuds" element={<BookBuds/>}/>
          <Route path="/recharge" element={<Recharge/>}/>
      </Routes>
  )
}