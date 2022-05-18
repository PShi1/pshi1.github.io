import React, {useEffect} from 'react';

export const Aprio = () => {
  useEffect(() => {
    document.title = "Emma Li | Aprio";
  }, []);

  return (
    <div>
      <h1>Aprio</h1>
    </div>
  )
}