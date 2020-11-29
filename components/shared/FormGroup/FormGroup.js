const FormGroup = ({ id, name, label, type = "text", refProp }) => (
  <div className="form-group">
    <label className="form-group__label" htmlFor={id}>{label}</label>
    <input
      type={type}
      className="form-group__input"
      name={name}
      id={id}
      ref={refProp}
    />
  </div>
);

export default FormGroup;
