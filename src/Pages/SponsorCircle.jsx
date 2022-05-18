import React, {useEffect} from 'react';

export const SponsorCircle = () => {
  useEffect(() => {
    document.title = "Emma Li | SponsorCircle";
  }, []);

  return (
    <div>
      <h1>SponsorCircle</h1>
    </div>
  )
}