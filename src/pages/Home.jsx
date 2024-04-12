import { useState } from 'react';
import { BsFeather } from 'react-icons/bs';
import { RxCrumpledPaper } from 'react-icons/rx';
import WrightButton from '../ui/WrightButton';
import WrightForm from '../ui/WrightForm';

function Home() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <WrightButton active={openForm} onClick={() => setOpenForm(!openForm)}>
        {openForm ? <RxCrumpledPaper /> : <BsFeather />}
      </WrightButton>
      <WrightForm active={openForm} />
    </div>
  );
}

export default Home;
