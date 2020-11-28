import BaseLayout from '../layouts/BaseLayout';

import { Title } from '../components/shared';

const Contacts = () => {
  return (
    <BaseLayout>
      <div className="g-top-section">
        <Title>Contacts</Title>
        <div className="g-content">
          <p>Find me on telegram - <b>@webuxmotion</b></p>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Contacts;
