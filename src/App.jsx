import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player /> 
      <div id='challenges'>
        <TimerChallenge title={'Easy'} duration={15} />
        <TimerChallenge title={'Little bit easy'} duration={10} />
        <TimerChallenge title={'A little hard'} duration={5} />
        <TimerChallenge title={'Hard'} duration={1} />
      </div>
    </>
  );
}

export default App;
