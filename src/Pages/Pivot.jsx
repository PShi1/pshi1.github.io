import React, {useEffect} from 'react';

export const Pivot = () => {
  useEffect(() => {
    document.title = "Emma Li | Pivot";
  }, []);

  return (
    <div>
      <h1>Pivot</h1>
    </div>
  )
}