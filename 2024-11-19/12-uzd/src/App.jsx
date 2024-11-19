import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header 
          title="Labas, aš mokausi"
          link="src/assets/pngegg.png" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
        <PostImage imgSrc="https://i.postimg.cc/zGzR9K5C/temp-Image3b5x-Eh.avif" />
          <PostContent />
        </div>
        <div className="col-12 col-sm-6">
        <PostImage imgSrc="https://i.postimg.cc/zGzR9K5C/temp-Image3b5x-Eh.avif" />
          <PostContent />
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-2 col-sm-3">
        <Box color="red" />
        </div>
        <div className="col-6 mb-2 col-sm-3">
        <Box color="green" />
        </div>
        <div className="col-6 mb-2 col-sm-3">
        <Box color="blue" />
        </div>
        <div className="col-6 mb-2 col-sm-3">
        <Box color="pink" />
        </div>
      </div>
    </div>
  );
}
