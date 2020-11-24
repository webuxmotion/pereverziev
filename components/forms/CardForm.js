import { useForm } from "react-hook-form";

import Button from '../shared/Button';

const CardForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="title"
          id="title" />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="content"
          id="content" />
      </div>

      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="link"
          id="link" />
      </div>

      { loading && 'Submiting...' }
      { !loading &&
        <Button>Submit</Button>
      }
    </form>
  )
}

export default CardForm;
