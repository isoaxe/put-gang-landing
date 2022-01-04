import { useState, useEffect } from 'react';
import Nav from './../components/Nav';
import Hero from './../components/Hero';
import Membership from './../components/Membership';
import EmailSignup from './../components/EmailSignup';
import LearnModal from './../components/LearnModal';
import './css/App.css';


function App() {
  const [learnModalVisible, setLearnModalVisible] = useState(false);
  const [learnModalChoice, setLearnModalChoice] = useState("");
  const [referrerId, setReferrerId] = useState("");

  const currentUrl = new URL(window.location.href);
  const membLvl = currentUrl.searchParams.get("membLvl"); // Membership level.
  const refId = currentUrl.searchParams.get("refId"); // Referrer ID.

  useEffect(() => {
    if (membLvl) setLearnModalChoice(membLvl);
    if (refId) setReferrerId(refId);
  }, [membLvl, refId]);

  return (
    <div className="wrapper">
      <div className="inner">
        <Nav />
      </div>
      <Hero
        setLearnModalVisible={setLearnModalVisible}
        setLearnModalChoice={setLearnModalChoice}
      />
      <div className="inner">
        <Membership
          setLearnModalVisible={setLearnModalVisible}
          setLearnModalChoice={setLearnModalChoice}
        />
        <EmailSignup />
      </div>
      <LearnModal
        learnModalVisible={learnModalVisible}
        setLearnModalVisible={setLearnModalVisible}
        learnModalChoice={learnModalChoice}
        setLearnModalChoice={setLearnModalChoice}
        referrerId={referrerId}
      />
    </div>
  );
}

export default App;
