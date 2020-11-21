import BaseLayout from '../layouts/BaseLayout';

const Cv = () => 
  <BaseLayout>
    <div className="page-wrapper">
      <iframe 
        style={{
          width: '100%',
          height: '800px',
          marginBottom: '100px'
        }}
        src="/cv.pdf"
      ></iframe>
    </div>
  </BaseLayout>

export default Cv;
