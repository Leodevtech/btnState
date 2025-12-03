const MoodButton = ({ mood, setActualMood }) => {

  const handleClick = () => {
    setActualMood(mood)
  }



  return <button onClick={handleClick}>{mood}</button>;
};

export default MoodButton;
