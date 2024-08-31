export default function Title() {
  console.log("Rendering title");
  return <h1>React optimize performance</h1>;
}

// HOC
/* 
  export const MemoizedTitle = React.memo(Title);
*/
