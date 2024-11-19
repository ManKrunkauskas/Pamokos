const PostImage = ({ imgSrc }) => {
  return (
    <div>
      <img src={imgSrc} alt="Post" style={{ width: "100%", maxWidth: "500px" }} />
    </div>
  );
};

export default PostImage;
