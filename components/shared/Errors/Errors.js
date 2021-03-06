const Errors = ({ error }) => {
  console.log('error', error);
  
  return (
    <div className="errors">
      {(error.graphQLErrors && error.graphQLErrors[0]?.message) || 'Oops, something went wrong'}
    </div>
  )
}

export default Errors;
