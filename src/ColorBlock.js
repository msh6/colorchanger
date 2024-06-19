const ColorBlock = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <main
      className="box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000000" : "#FFFFFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
      <h2>Color Box</h2>
    </main>
  );
};

ColorBlock.defaulProps = {
  colorValue: "Empty Color Value",
};

export default ColorBlock;
