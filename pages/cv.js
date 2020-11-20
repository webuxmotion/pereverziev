import BaseLayout from '../layouts/BaseLayout';

const Cv = () => 
  <BaseLayout>
    <iframe 
      style={{
        width: '100%',
        height: '800px'
      }}
      src="/cv.pdf"
    ></iframe>
  </BaseLayout>

export default Cv;
