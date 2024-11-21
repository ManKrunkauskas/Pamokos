const ChildComponent = ({ items }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
