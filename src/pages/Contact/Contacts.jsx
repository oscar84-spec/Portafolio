const Contacts = ({ cont }) => {
  const { icon, type, link, text } = cont;
  return (
    <div className='contactParent'>
      <div className='contact__icon'>
        <i className='iconContact'>{icon}</i>
        <p className='nameContact'>{type}</p>
      </div>
      <a href={link} className='linkContact'>
        {text}
      </a>
    </div>
  );
};

export default Contacts;
