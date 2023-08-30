import backgroundImage1 from "../backgroudimage1.jpg"; // Make sure the filename matches

const styling = {
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  color: 'red',
  backgroundImage: `url('/backgroudimage.jpg')`,
};

function Home() {
  return (
    <div className="team" style={styling}>
      <p>here</p>
      <img src="../backgroudimage1.jpg" alt="My Image" width={100} height={100} />
    </div>
  );
}

export default Home;
