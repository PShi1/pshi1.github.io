import React, {useEffect} from 'react';

export const Knowbie = () => {
  useEffect(() => {
    document.title = "Emma Li | Knowbie";
  }, []);

  return (
    <div>
      <h1>Knowbie</h1>
    </div>
  )
}