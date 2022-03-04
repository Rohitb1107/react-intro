import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["Android", "Blackberry", "iphone", "Windows Phone"];
  const data1 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <ul>
        <h1> Mobile Operating System{" "}</h1>
        {data.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <ul>
        <h1> Mobile Manufactures{" "}</h1>
        {data1.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

// function App() {
//   const data = ["Android", "Blackberry", "iphone", "Windows Phone"];
//   const data1 = ["Samsung", "HTC", "Micromax", "Apple"];
//   return (
//     <div>
//       <ul>
//         <h1> Mobile Operating System{" "}</h1>
//         {data.map((e) => (
//           <li>{e}</li>
//         ))}
//       </ul>
//       <ul>
//         <h1> Mobile Manufactures{" "}</h1>
//         {data1.map((e) => (
//           <li>{e}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


export default App;
